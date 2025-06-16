// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project12Content() {
    return (
        <div className = "project-content-box">
            <h2>Differential to Single-Ended Amplifier</h2>
            <p>
                This project was about designing a Differential to Single-Ended 
                Amplifier optimized for Bluetooth Low Energy (BLE) applications, 
                which operate at 2.4 GHz. The main goals were to achieve high gain 
                at DC and 2.4 GHz, a wide unity-gain bandwidth, low power consumption 
                (under 1 mW), correct transistor operating regions (especially saturation),
                a clean layout (LVS/DRC compliant), and ultimately to integrate 
                this design into a gain-boosted cascode current source with tight 
                current stability (less than 1% variation) across voltage swings.
                Thus the project was split into two parts: part one was desiging
                the circuit and layout on Cadence Virtuoso and part two was integrating
                that circuit into the cascoded current source, meeting the necessary
                specs.
            </p>
            <h3> Part One: Amplifier Design </h3>
            <p>
                I designed and simulated a differential amplifier with a current 
                mirror acting as the tail current source (I<sub>ref</sub>) and 
                biasing circuits (instead of resistor dividers) for the input. 
                I also verified that all transistors were in saturation mode 
                amd added a 20 fF capacitor to mimic the input capacitance of 
                the next stage. View the circuit below and the specs achieved! 

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project12/elec2-diff-amplifier-schematic.png" alt="Differential Amplifier Schematic" />
                        <div className="gallery-caption">Differential Amplifier Schematic</div>
                    </div>

                    <div className="gallery-item">
                        <img src="/projects/project12/elec2-diff-amplifier-specs.png" alt="Specs Achieved" />
                        <div className="gallery-caption">Specs Achieved</div>
                    </div>
                </div>

            </p>
        </div>
    );
}

