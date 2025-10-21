import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "../../styles/BuildingMap.css";

const BuildingMap = () => {
  const mapRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const key = process.env.REACT_APP_MAPS_API_KEY; // put this in .env.local
    if (!key) {
      console.error("Missing REACT_APP_MAPS_API_KEY in .env.local");
      // You can temporarily hardcode for testing:
      // key = "AIza...yourkey";
    }

    // load Google Maps JS API once
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

      // Load & parse CSV correctly (quoted fields safe)
      d3.csv(process.env.PUBLIC_URL + "/HousingDB_post2010.csv").then((rows) => {
        // Filter: PermitYear == 2022; exclude "Completed Construction"
        const raw = rows
          .filter((d) => +d.PermitYear === 2022)
          .filter((d) => !String(d.Job_Status || "").toUpperCase().includes("COMPLETED"));

        // Keep only rows with valid coordinates & recognizable type
        const data = raw
          .map((d) => {
            const lat = +d.Latitude;
            const lon = +d.Longitude;
            const desc = (d.Job_Desc || d.Job_Status || "").toUpperCase();
            const typ = desc.includes("DEMOL")
              ? "DEMOLITION"
              : desc.includes("ALT")
              ? "ALTERATION"
              : desc.includes("NEW")
              ? "NEW BUILDING"
              : null;
            return {
              lat,
              lon,
              typ,
              address: [d.AddressNum, d.AddressSt].filter(Boolean).join(" "),
              permitYear: d.PermitYear,
              rawDesc: d.Job_Desc || d.Job_Status || "",
            };
          })
          .filter((d) => Number.isFinite(d.lat) && Number.isFinite(d.lon) && d.typ);

        const color = (t) =>
          t === "DEMOLITION" ? "red" : t === "ALTERATION" ? "yellow" : t === "NEW BUILDING" ? "green" : "gray";

        // CANVAS Overlay (fast, no jitter)
        class CanvasOverlay extends window.google.maps.OverlayView {
          onAdd() {
            this.canvas = document.createElement("canvas");
            this.canvas.style.position = "absolute";
            this.ctx = this.canvas.getContext("2d", { alpha: true });
            this.getPanes().overlayLayer.appendChild(this.canvas);

            // Tooltip div in floatPane for z-index above map
            this.tooltip = tooltipRef.current;
          }

          // Draw called on pan/zoom; anchor canvas to current viewport top-left
          draw() {
            const proj = this.getProjection();
            if (!proj) return;

            const bounds = this.getMap().getBounds();
            if (!bounds) return;

            // viewport corners in pixel space
            const ne = proj.fromLatLngToDivPixel(bounds.getNorthEast());
            const sw = proj.fromLatLngToDivPixel(bounds.getSouthWest());

            const left = sw.x;
            const top = ne.y;
            const width = ne.x - sw.x;
            const height = sw.y - ne.y;

            // size & position canvas to viewport
            const c = this.canvas;
            c.style.left = `${left}px`;
            c.style.top = `${top}px`;
            c.width = Math.ceil(width);
            c.height = Math.ceil(height);

            const ctx = this.ctx;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.globalAlpha = 0.9;

            // radius scales with zoom, capped ~10 px
            const zoom = this.getMap().getZoom() || 10;
            const r = Math.min(10, Math.max(2, (zoom - 8) * 1.2 + 2));

            // project all points -> pixel coords relative to canvas
            const projected = data.map((d) => {
              const p = proj.fromLatLngToDivPixel(new window.google.maps.LatLng(d.lat, d.lon));
              return { ...d, x: p.x - left, y: p.y - top };
            });

            // draw points
            projected.forEach((p) => {
              // skip if offscreen
              if (p.x < -r || p.y < -r || p.x > c.width + r || p.y > c.height + r) return;
              ctx.beginPath();
              ctx.arc(p.x, p.y, r, 0, 2 * Math.PI);
              ctx.fillStyle = color(p.typ);
              ctx.fill();
              ctx.lineWidth = 0.5;
              ctx.strokeStyle = "rgba(34,34,34,0.6)";
              ctx.stroke();
            });

            // build quadtree for fast hover hit-tests (pixel space)
            this.qtree = d3.quadtree()
              .x((d) => d.x)
              .y((d) => d.y)
              .addAll(projected);

            this._left = left;
            this._top = top;
            this._r = r;
          }

          onRemove() {
            if (this.canvas) this.canvas.remove();
          }
        }

        const overlay = new CanvasOverlay();
        overlay.setMap(map);

        // precise hover using quadtree in canvas pixel space
        const mapDiv = map.getDiv();
        const moveHandler = (ev) => {
          if (!overlay.qtree) return;
          const rect = mapDiv.getBoundingClientRect();
          // convert page coords -> map div pixels -> canvas pixels
          const px = ev.pageX - rect.left;
          const py = ev.pageY - rect.top;

          // translate to canvas coordinates (subtract viewport anchor)
          const cx = px - (overlay._left ?? 0);
          const cy = py - (overlay._top ?? 0);

          const radius = Math.max(overlay._r ?? 6, 6);
          const found = overlay.qtree.find(cx, cy, radius * 1.5);

          const tt = tooltipRef.current;
          if (found) {
            tt.style.visibility = "visible";
            tt.style.top = ev.pageY - 30 + "px";
            tt.style.left = ev.pageX + 12 + "px";
            tt.innerHTML = `
              <b>${found.typ}</b><br/>
              ${found.address || "Address N/A"}<br/>
              Permit Year: ${found.permitYear || "N/A"}
            `;
          } else {
            tt.style.visibility = "hidden";
          }
        };

        // attach listeners once
        map.addListener("mousemove", (e) => moveHandler(e.domEvent));
        map.addListener("drag", () => (tooltipRef.current.style.visibility = "hidden"));
        map.addListener("idle", () => (tooltipRef.current.style.visibility = "hidden"));
      });
    });
  }, []);

  return (
    <div style={{ position: "relative", width: "900px", height: "700px" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%", position: "absolute" }} />
      <div
        ref={tooltipRef}
        className="tooltip"
        style={{
          position: "absolute",
          background: "rgba(0,0,0,0.85)",
          color: "#fff",
          padding: "6px 10px",
          borderRadius: "4px",
          pointerEvents: "none",
          visibility: "hidden",
          fontSize: "12px",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default BuildingMap;

