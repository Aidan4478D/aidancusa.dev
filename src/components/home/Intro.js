// src/components/home/Intro.js
import React from "react";
import "../../styles/Intro.css";
import Socials from "./Socials";   // import your socials component

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-text-container">
                <h1>Hello!</h1>
                <p>
                    I am a Senior Electrical Engineering student at The Cooper Union, passionate
                    in tinkering with technology and programming. I have experience in Software
                    Engineering (both front-end and back-end), Computer Engineering, Data Engineering, 
                    Firmware Engineering, Machine Learning Engineering, and Data Analytics. My primary 
                    interests lie in Artificial Intelligence development!
                </p>

                <Socials />
            </div>

            <div className="intro-image-container">
                <img
                src="/about/aidan_in_garden_cropped.jpg"
                alt="Aidan in Garden"
                />
            </div>
        </div>
    );
};

export default Intro;

