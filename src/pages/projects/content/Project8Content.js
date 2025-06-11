// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project8Content() {
    return (
        <div className = "project-content-box">
            <h2>Single-Balanced Active Mixer</h2>
            <p>
                In the fall 2024 semester, Kristof Jablonowski (EE'26), Jaeho 
                Cho (EE'26) and I designed and built a 

                <strong> single-balanced active mixer</strong>, 

                used for down-converting radio-frequency (RF) signals to an 
                easier-to-process intermediate frequency (IF). 

                We began by generating a clean local-oscillator (LO) tone with 
                a Colpitts oscillator (two capacitors and an inductor to form a 
                resonance tank) and produced its 180° complement through 
                an inverting amplifier to obtain a balanced LO pair (picture
                at the top of the page shows the two LO output traces with a 
                clear 180° difference).
                
                A common-source MOSFET then converted the incoming RF voltage to 
                current, which a differential switching pair - timed by the LO - alternately 
                steered between two load resistors. This current chopping effectively 
                multiplies the RF by a square wave, yielding the required sum-and-difference 
                frequency components. Finally, an RC low-pass filter removed unwanted 
                LO, RF, and harmonic products, isolating the desired IF output.

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project8/jlab1-differential.png" alt="Differential Diagram" />
                        <div className="gallery-caption">Differential Diagram</div>
                    </div>

                    <div className="gallery-item">
                        <img src="/projects/project8/jlab1-mixer-example.png" alt="75% Model Confusion Matrix" />
                        <div className="gallery-caption">How Mixers are used in Generic Transceivers </div>
                    </div>
                </div>
            </p>
            <p>

                Before physically building the circuit, we designed and simulated
                the theory within LTSpice, verifying that each component worked
                as intented. To simulate an incoming 5MHz RF signal, we used a 
                sine wave with an amplitude of 3V. Check out the simulation schematic below! 
                
                <div className="image-gallery">
                    <div className="gallery-item-wide">
                        <img src="/projects/project8/jlab1-simulation.png" alt="LTSpice Schematic" />
                        <div className="gallery-caption">LTSpice Schematic</div>
                    </div>
                </div>
            </p>
            <p>
                Throughout our LTSpice simulation and physical building process, we verified
                our mixer was working by mixing our signal with different
                RF values and then taking the FFT. We can then analyze the IF 
                peaks to see if the signals were mixing properly and the 
                filter stage cleaned up the spectrum as predicted. Below are three
                different RF values (created with a function generator) at 5.5 MHz,
                5 MHz, and 4.5 MHz from left to right. 

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project8/jlab1-fft-5-5.png" alt="LTSpice Schematic" />
                        <div className="gallery-caption">FFT Mixed with 5.5 MHz</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/projects/project8/jlab1-fft-5-meg.png" alt="LTSpice Schematic" />
                        <div className="gallery-caption">FFT Mixed with 5 MHz</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/projects/project8/jlab1-fft-4-5.png" alt="LTSpice Schematic" />
                        <div className="gallery-caption">FFT Mixed with 4.5 MHz</div>
                    </div>
                </div>
            </p>
            <p>
                Although it's difficult to read, when the cursor is over the largest
                peak for that frequency, that is the value at the combined frequency.
                For example, in the image on the far right, when a 5.5 MHz signal is 
                mixed with our LO signal, (targeted at 4.1 MHz) the resulting peak
                occurs at 1.4 MHz. Mixed with the 5 MHz signal results in a peak
                at 955 kHz, and mixed with the 4.5 MHz signal results in a peak at
                roughly 450 kHz. Thus, the single-balanced active mixer worked 
                as inteded. View our physical implementation and video of it working
                below!

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project8/jlab1-final-breadboards.png" alt="LTSpice Schematic" />
                        <div className="gallery-caption">LTSpice Schematic</div>
                    </div>
                    <div className="gallery-item">
                        <iframe 
                            width="auto" 
                            height="250" 
                            src="https://www.youtube.com/embed/YeixVrDZvtI" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <div className="gallery-caption">Active Mixer Demo</div>
                    </div>
                </div>
            </p>
            
        </div>
    );
}

