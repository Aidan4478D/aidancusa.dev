// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project10Content() {
    return (
        <div className = "project-content-box">
            <h2>Scope TV</h2>
            <p>
                NTSC (National Television System Committee) is an analog television 
                broadcasting standard primarily used in North America and parts 
                of South America and Asia. Developed in the 1940s and standardized 
                in 1953, NTSC encodes video signals using a composite video format, 
                combining luminance (brightness) and chrominance (color) information 
                into a single analog waveform. This system transmits images at 
                approximately 30 frames per second (29.97 fps), with each frame 
                comprising 525 interlaced scan lines. 

                Together with Kristof Jablonowski (EE'26), we built a system which uses the NTSC 
                signals from a DVD player to display a monochrome video on an analog 
                oscilloscope and output its audio. We called this system <strong> ScopeTV </strong> as
                the output is displayed on an oscilloscope. The primary challenge was synchronizing 
                the oscilloscope’s beam movements to match the video signal’s horizontal 
                and vertical synchronization intervals, which we achieve through 
                our synchronizers and ramps. 
            </p>
            <p>
                In order to take a DVD players output NTSC audio and video signal 
                and display it onto an analog oscilloscope and output onto a speaker, we segmented 
                our system into four main components as seen in the block diagram below.
            </p>
                <div className="image-gallery">
                    <div className="gallery-item-wide">
                        <img src="/projects/project10/scopetv-block-diagram.png" alt="ScopeTV Circuit Block Diagram" />
                        <div className="gallery-caption">Circuit Block Diagram</div>
                    </div>
                </div>
            <p>
                Initially, the circuit separates the horizontal sync from the NTSC signal. From there,
                we can time the horizonal ramp and we have the output for the X component. For the vertical
                ramp, we first generate a vertical sync that is based off of the horizontal sync. From this
                vertical sync, we can then employ a very similar circuit in order to generate the vertical ramp.
                This is then the output for our Y component. These two ramps control the oscilloscope’s
                electron beam, which scans across the display surface. For the Z output, which has the video
                information encoded within it, we take the NTSC signal and utilize a opamp to boost the
                gain on the signal. Then with two potentiometers, we can control the contrast and the brightness of
                the output signal. Finally, the audio from the separate output on the DVD player
                is taken and amplified through an audio amplifier, which can then be played on a speaker
                to actually hear what is being said in the video.

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project10/scopetv-ltspice.png" alt="ScopeTV LTSpice Simulation" />
                        <div className="gallery-caption">LTSpice Simulation</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/projects/project10/scopetv-in-box.png" alt="ScopeTV Implementation in Box" />
                        <div className="gallery-caption">Implementation in Box</div>
                    </div>
                </div>

            </p>
            <p>
                We then created each block in LTSpice and verified that our 
                implementation worked with a dummy NTSC signal. After simulation, 
                we physically built the circuit and created an enclosure for ease
                of use for the user. Check out the video below to see each component
                within ScopeTV and watch it play Dispicable Me!

                <div className="image-gallery">
                    <div className="gallery-item">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GuEB_Ho9gno?si=nO9KdKdifPUBdbAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className="gallery-caption">ScopeTV Final Demo</div>
                    </div>
                </div>
            </p>
            <p>
                ScopeTV ultimately bridges traditional electronic testing equipment 
                and multimedia technology, illustrating how versatile and adaptable these devices can be.
            </p>
        </div>
    );
}

