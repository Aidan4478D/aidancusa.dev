import React from 'react';
// import '../../styles/TurkeyClock.css';
import { ReactP5Wrapper } from "react-p5-wrapper";
import { Link } from "react-router-dom"

function sketch(p) {
    // --- Aidan's Turkey Clock ---

    p.setup = function() {
        p.createCanvas(400, 400);
        p.angleMode(p.RADIANS);
        p.noStroke();
    }

    p.draw = function() {
        const hRaw = p.hour();
        const m = p.minute();
        const s = p.second();

        // night time sky or day time
        if(hRaw > 12) {
            p.background(96, 101, 235);
        }
        else p.background(210, 235, 255);
        drawGround();

        // console.log(hRaw);

        const nSlots = 12;
        const feathersNow = hRaw % 12;
        const tens = p.floor(m / 10);
        const ones = m % 10;

        // anchors
        const groundY = 320;
        const bodyX = 135, bodyY = 235; // turkey body and head
        const headBaseX = 205, headBaseY = 245;

        // peck animation - use millis() for fractional time
        const f = (p.millis() % 1000) / 1000;
        const peckDepth = peckMotion(f) * 16;
        const headY = headBaseY + peckDepth;

        drawTurkey(bodyX, bodyY, headBaseX, headY, groundY);
        drawFeathers(bodyX, bodyY, nSlots, feathersNow);
        drawHole(headBaseX + 20, groundY, s);
        drawCornPatches(270, groundY, tens, ones);

        // tiny digital readout
        p.fill(0, 60);
        p.textAlign(p.LEFT, p.TOP);
        p.textSize(12);
        const hh = p.nf(hRaw, 2);
        const mm = p.nf(m, 2);
        const ss = p.nf(s, 2);
        p.text(`${hh}:${mm}:${ss}`, 10, 10);
    }

    function drawGround() {
        p.fill(120, 200, 120); //for the grass
        p.rect(0, 320, p.width, 80);
    }

    // pecking motion
    function peckMotion(t) {
        return t < 0.5 ? p.map(t, 0, 1.5, 0, 10) : p.map(t, 0, 1, 6, 0);
    }

    function drawTurkey(bx, by, hx, hy, groundY) {
        p.push();

        // body
        p.fill(155, 90, 45);
        p.ellipse(bx, by, 150, 110);

        // wing
        p.fill(140, 80, 40);
        p.ellipse(bx + 5, by + 10, 90, 70);

        // head
        p.fill(160, 95, 50);
        p.ellipse(hx, hy, 35, 35);

        // eye
        p.fill(255);
        p.ellipse(hx + 6, hy - 6, 10, 10);
        p.fill(0);
        p.ellipse(hx + 7, hy - 6, 5, 5);

        // beak but rotated downwards
        p.push();
        p.translate(hx + 13, hy + 10);
        p.rotate(p.PI / 3);
        p.fill(250, 200, 40);
        p.triangle(0, -4, 18, 0, 0, 4);
        p.pop();

        // beard thing
        p.fill(210, 30, 40);
        p.ellipse(hx + 10, hy + 15, 10, 16);

        // legs
        p.stroke(120, 70, 30);
        p.strokeWeight(3);
        p.line(bx + 10, groundY, bx + 10, by + 40);
        p.line(bx + 30, groundY, bx + 30, by + 40);

        // toes
        p.line(bx + 10, groundY, bx + 18, groundY);
        p.line(bx + 30, groundY, bx + 38, groundY);
        p.noStroke();
        p.pop();
    }

    // ChatGPT helped me with this

    // Feathers along an arc from back-left → near neck, left-to-right
    // Arc center near body; tweak radius & angles as needed
    function drawFeathers(bx, by, nSlots, count) {

        const cx = bx - 20, cy = by - 10;
        const r = 86;
        const startA = -p.PI/4;   // leftmost on back
        const endA = -5 * p.PI / 4;   // near neck
        const featherLen = 50;
        const featherWide = 14;

        const fallPalette = [
            p.color(227, 102, 52),  // pumpkin
            p.color(242, 186, 66),  // maize
            p.color(199, 66, 45),   // red maple
            p.color(108, 176, 90),  // sage
            p.color(181, 121, 55),  // brown-gold
        ];

        for (let i = 0; i < count; i++) {
            const t = nSlots === 1 ? 0 : i / (nSlots - 1);
            const a = p.lerp(startA, endA, t); // linear interpolation, kinda like linspace but for one point
            const x = cx + r * p.cos(a);
            const y = cy + r * p.sin(a);
            const orient = a - p.HALF_PI; // point outward

            p.push();
            p.translate(x, y);
            p.rotate(orient);

            // Feather blade (teardrop)
            p.fill(fallPalette[i % fallPalette.length]);
            p.beginShape();
            p.vertex(0, -featherLen - 6);
            p.bezierVertex(-featherWide, -featherLen * 0.6, -featherWide, -featherLen * 0.2, 0, 0);
            p.bezierVertex(featherWide, -featherLen * 0.2, featherWide, -featherLen * 0.6, 0, -featherLen - 6);
            p.endShape(p.CLOSE);
            p.pop();
        }
    }

    function drawHole(xCenter, groundY, s) {
        const maxDepth = 75;
        const depth = p.map(s, 0, 59, 0, maxDepth);

        p.push();
        // dirt wall being dug
        p.fill(90, 60, 40);
        p.rect(xCenter - 12, groundY + 6, 24, depth);

        // hole
        p.fill(80, 40, 15);
        p.ellipse(xCenter, groundY + 6, 36, 12);
        p.pop();

        // corn at bottom of hole
        drawCorn(225, 400, 1)
    }

    function drawCornPatches(startX, groundY, tens, ones) {
        const patchW = 55, patchH = 70, gap = 16;
        const rightPatch_x = startX + patchW + gap
        const rightPatch_y = groundY

        // tens corn fits 5 so 3x2
        drawCornCount(startX, groundY, patchW, patchH, tens, 3, 2);

        // ones corn fits 9 so 3x3
        drawCornCount(rightPatch_x, rightPatch_y, patchW, patchH, ones, 3, 3);
    }


    function drawCornCount(x, groundY, w, h, count, cols, rows) {
        const cellW = w / cols;
        const cellH = (h - 10) / rows;

        let placed = 0;

        for (let r = 0; r < rows && placed < count; r++) {
            for (let c = 0; c < cols && placed < count; c++) {

                // corn location
                const cx = x + cellW * c * 1.15 + cellW * 0.25;
                const cy = groundY + (1.35 * cellH * r + cellH) - 90;

                drawCorn(cx, cy, 1.35);
                placed++;
            }
        }
    }


    function drawCorn(cx, cy, s = 2) {
        p.push();
        p.translate(cx, cy);
        p.scale(s);

        // stalk
        p.stroke(120, 200, 120);
        p.strokeWeight(3);
        p.line(0, 100, 0, -12);
        p.noStroke();

        // leaves
        p.fill(70, 150, 70);
        p.ellipse(-6, 0, 14, 8);
        p.ellipse(6, 0, 14, 8);

        // husk
        p.fill(85, 160, 85);
        p.ellipse(0, -8, 16, 24);

        // cob
        p.fill(250, 210, 60);
        p.ellipse(0, -8, 10, 18);

        p.pop();
    }

}

const TurkeyClock = () => {
    return <ReactP5Wrapper sketch={sketch} />;
}

export default TurkeyClock;

