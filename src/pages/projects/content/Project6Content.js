// src/pages/projects/content/Project7Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project6Content() {
    return (
        <div className = "project-content-box">
            <h2>Theremin</h2>
            <p>
                Invented in around 1920 by Soviet inventor Lev Sergeyevich Termen, 
                known in the West as Leon Theremin, the theremin generates music 
                without any physical contact by manipulating two antennas which respond 
                to the movement of the performer's hands. One antenna alters the frequency 
                of the musical output, while the other traditionally controls the 
                volume, although our version of the theremin is simplified, featuring 
                only the pitch-controlling antenna. 
            </p>
            <p>
                This instrument operates on the principles of human body capacitance. 
                It consists of two oscillators: one maintains a constant frequency, 
                and the other's frequency varies based on the operator's body 
                capacitance, as measured by the antenna. This interaction creates 
                changes in pitch when the distance between the operator's hands 
                and the antenna is varied. The sound is then refined through a 
                series of filters that eliminate unwanted frequencies, leaving 
                only the desired frequency combinations. Our project version 
                of the theremin, while lacking the traditional volume-controlling 
                antenna, remains a fully analog device employing oscillators, 
                amplifiers, and filters.

                Over the course of 10 weeks, Stephen Brockerhoff (EE'26) and I 
                learned the theory behind each component and constructed the 
                theremin instrument using the schematic below.

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project6/theremin-schematic.png" alt="Theremin Schematic" />
                        <div className="gallery-caption">Theremin Schematic</div>
                    </div>
                </div>
            </p>
            <p>
                By the end of the semester, our theremin worked as intended as the
                pitch of the output varied with the position of the hand near 
                the antenna, increasing as the hand approaches without contact and 
                decreasing as it moves away. View the video below to see our 
                theremin in action!
            </p>
            <div className="image-gallery">
                <div className="gallery-item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ez5cQZoXomc?si=LOVM6OK5hslSpV93" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div className="gallery-caption">Theremin Live Demo</div>
                </div>
            </div>
        </div>
    );
}

