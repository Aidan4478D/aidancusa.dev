// src/components/home/Intro.js
import React from "react";
import "../../styles/Intro.css";
import Socials from "./Socials";   // import your socials component

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-text-container">
                <h1>Hello!</h1>
                { /*
                <p>
                    I am a Senior Electrical Engineering student at The Cooper Union, passionate
                    in tinkering with technology and programming. I have experience in Software
                    Engineering (both front-end and back-end), Computer Engineering, Data Engineering, 
                    Firmware Engineering, Machine Learning Engineering, and Data Analytics. My primary 
                    interests lie in Artificial Intelligence development!
                </p>
                */ }
                <p>
                    I am a senior Electrical Engineering student at The Cooper Union, 
                    enrolled in the dual Bachelor's-Master's program. My experience spans 
                    front- and back-end software development, firmware, computer and 
                    data engineering, machine-learning engineering, and data analytics. 
                    I focus on applied artificial intelligence and the designing reliable, 
                    efficient intelligent systems.
                </p>

                <Socials />
            </div>

            <div className="intro-image-container">
                <img src="/about/aidan_in_garden_cropped.jpg" alt="Aidan in Garden" />
            </div>
        </div>
    );
};

export default Intro;

