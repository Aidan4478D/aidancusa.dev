import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "../../styles/BuildingMap.css";

/**
 * Map fills the viewport minus the header.
 * Adjust `headerOffset` if your header height changes (in px).
 */
const headerOffset = 72; // ← tweak as needed

const BuildingMap = () => {
    const mapRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        const key = process.env.REACT_APP_MAPS_API_KEY;
        if (!key) {
            console.error("Missing REACT_APP_MAPS_API_KEY in .env.local");
        }

        // Load Google Maps JS API
        const ensureGoogle = () =>
            new Promise((resolve) => {
                if (window.google?.maps) return resolve();
                const script = document.createElement("script");
                script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
                script.async = true;
                script.onload = resolve;
                document.head.appendChild(script);
            });

        ensureGoogle().then(() => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 40.7, lng: -73.94 },
                zoom: 10,
                mapTypeId: "roadmap",
                gestureHandling: "greedy",
            });

            d3.csv(process.env.PUBLIC_URL + "/HousingDB_post2010.csv").then((rows) => {
                // Filter: permit year 2022 and NOT "Completed Construction"
                const filtered = rows
                    .filter((d) => +d.PermitYear === 2022)
                    .filter(
                        (d) => !String(d.Job_Status || "").toUpperCase().includes("COMPLETED")
                    )
                    .map((d) => {
                        const lat = +d.Latitude;
                        const lon = +d.Longitude;
                        const desc = (d.Job_Desc || d.Job_Status || "").toUpperCase();
                        let typ = null;
                        if (desc.includes("DEMOL")) typ = "DEMOLITION";
                        else if (desc.includes("ALT")) typ = "ALTERATION";
                        else if (desc.includes("NEW")) typ = "NEW BUILDING";
                        return {
                            lat,
                            lon,
                            typ,
                            address: [d.AddressNum, d.AddressSt].filter(Boolean).join(" "),
                            permitYear: d.PermitYear,
                            rawDesc: d.Job_Desc || d.Job_Status || "",
                        };
                    })
                    .filter(
                        (d) => Number.isFinite(d.lat) && Number.isFinite(d.lon) && d.typ
                    );

                const color = (t) =>
                    t === "DEMOLITION" ? "red" : t === "ALTERATION" ? "yellow" : t === "NEW BUILDING" ? "green" : "gray";

                // ---------- Canvas Overlay (fast & stable) ----------
                class CanvasOverlay extends window.google.maps.OverlayView {
                    onAdd() {
                        this.canvas = document.createElement("canvas");
                        this.canvas.style.position = "absolute";
                        this.ctx = this.canvas.getContext("2d", { alpha: true });
                        this.getPanes().overlayLayer.appendChild(this.canvas);
                        this.tooltip = tooltipRef.current;

                        // Build a quadtree in geographic space (lon/lat) for hover
                        this.qtreeGeo = d3.quadtree()
                            .x((d) => d.lon)
                            .y((d) => d.lat)
                            .addAll(filtered);
                    }

                    draw() {
                        const proj = this.getProjection();
                        if (!proj) return;

                        const bounds = this.getMap().getBounds();
                        if (!bounds) return;

                        // Viewport extent in DIV/CSS pixels
                        const ne = proj.fromLatLngToDivPixel(bounds.getNorthEast());
                        const sw = proj.fromLatLngToDivPixel(bounds.getSouthWest());

                        const left = sw.x;
                        const top = ne.y;
                        const widthCss = ne.x - sw.x;
                        const heightCss = sw.y - ne.y;

                        // DPI-aware canvas but draw in CSS px
                        const dpr = window.devicePixelRatio || 1;
                        const c = this.canvas;
                        c.style.left = `${left}px`;
                        c.style.top = `${top}px`;
                        c.style.width = `${widthCss}px`;
                        c.style.height = `${heightCss}px`;
                        c.width = Math.max(1, Math.round(widthCss * dpr));
                        c.height = Math.max(1, Math.round(heightCss * dpr));

                        const ctx = this.ctx;
                        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                        ctx.clearRect(0, 0, widthCss, heightCss);
                        ctx.globalAlpha = 0.9;

                        const zoom = this.getMap().getZoom() || 10;
                        const r = Math.min(10, Math.max(2, (zoom - 8) * 1.2 + 2));

                        // Project and draw
                        this.projected = filtered.map((d) => {
                            const p = proj.fromLatLngToDivPixel(
                                new window.google.maps.LatLng(d.lat, d.lon)
                            );
                            return { ...d, x: p.x - left, y: p.y - top };
                        });

                        this.projected.forEach((p) => {
                            if (p.x < -r || p.y < -r || p.x > widthCss + r || p.y > heightCss + r) return;
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
                            ctx.fillStyle = color(p.typ);
                            ctx.fill();
                            ctx.lineWidth = 0.5;
                            ctx.strokeStyle = "rgba(34,34,34,0.6)";
                            ctx.stroke();
                        });

                        // Save anchors for hover math
                        this._leftCss = left;
                        this._topCss = top;
                        this._rCss = r; // <-- Save the current radius
                    }

                    onRemove() {
                        if (this.canvas) this.canvas.remove();
                    }
                }

                const overlay = new CanvasOverlay();
                overlay.setMap(map);

                // ---------- Accurate hover logic ----------
                const tooltip = tooltipRef.current;
                
                map.addListener("mousemove", (e) => {
                    // Ensure overlay, projection, and tooltip are ready
                    if (!overlay.qtreeGeo || !overlay.getProjection() || !tooltip) {
                        tooltip.style.visibility = "hidden";
                        return;
                    }

                    const proj = overlay.getProjection();

                    // 1. Get mouse coordinates in both LatLng and DivPixel
                    const mouseLat = e.latLng.lat();
                    const mouseLon = e.latLng.lng();
                    const mouseDivPx = proj.fromLatLngToDivPixel(e.latLng);

                    if (!mouseDivPx) {
                        tooltip.style.visibility = "hidden";
                        return;
                    }

                    // 2. Find the *single nearest* point from the geographic quadtree
                    const found = overlay.qtreeGeo.find(mouseLon, mouseLat);
                    if (!found) {
                        tooltip.style.visibility = "hidden";
                        return;
                    }

                    // 3. Project the *found point* to DivPixel coordinates
                    const foundDivPx = proj.fromLatLngToDivPixel(
                        new window.google.maps.LatLng(found.lat, found.lon)
                    );
                    
                    if (!foundDivPx) {
                        tooltip.style.visibility = "hidden";
                        return;
                    }

                    // 4. Calculate the *pixel distance* between mouse and the found point
                    const distSq =
                        (mouseDivPx.x - foundDivPx.x) ** 2 +
                        (mouseDivPx.y - foundDivPx.y) ** 2;

                    // 5. Define a "hit radius" in pixels (circle's radius + a buffer)
                    const circleRadius = overlay._rCss ?? 4; // Get current radius from overlay
                    const hitRadius = circleRadius + 6; // Add a 6px buffer
                    const hitRadiusSq = hitRadius ** 2;

                    // 6. Check if the mouse is within the hit radius
                    if (distSq < hitRadiusSq) {
                        
                        // [FIXED] Set visibility and content. Position is now handled by CSS.
                        tooltip.style.visibility = "visible";
                        
                        //
                        //  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
                        //
                        //  THIS IS WHERE YOU EDIT THE MESSAGE CONTENT
                        //
                        tooltip.innerHTML = `
                            <b>${found.typ}</b><br/>
                            ${found.address || "Address N/A"}<br/>
                            Status: ${found.rawDesc || "N/A"}
                        `;
                        //
                        //  ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
                        //

                        // [REMOVED] All dynamic style.top, style.left, and style.transform
                        
                    } else {
                        // Mouse is not close enough to the nearest point
                        tooltip.style.visibility = "hidden";
                    }
                });

                // Listeners to hide tooltip
                map.addListener("dragstart", () => (tooltip.style.visibility = "hidden"));
                map.addListener("zoom_changed", () => (tooltip.style.visibility = "hidden"));
                
                // Hide when mouse leaves the map container
                map.getDiv().addEventListener("mouseout", () => {
                   tooltip.style.visibility = "hidden";
                });
            });
        });
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="map-shell" style={{ height: `calc(100vh - ${headerOffset}px)` }}>
            <div ref={mapRef} className="map-root" />
            <div ref={tooltipRef} className="tooltip" />

            <div className="map-legend">
            <div className="legend-row">
                <span className="legend-swatch legend-green" /> New Building
            </div>
            <div className="legend-row">
                <span className="legend-swatch legend-yellow" /> Alteration
            </div>
            <div className="legend-row">
                <span className="legend-swatch legend-red" /> Demolition
            </div>
            </div>
        </div>
    );

};

export default BuildingMap;
