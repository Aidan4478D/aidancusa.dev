import React from "react";
import "../../styles/Intro.css"

const Intro = () => {

    return (
        <div className="intro-container">
            <img src="/intro-pic-gold.png" alt="Introduction Paragraph Pic" />

            <div className = "intro-text-container">
                <h1> Hello! </h1>
                
                <br/>

                <a> I am a Junior Electrical Engineering student at The Cooper 
                    Union, passionate in tinkering with technology and 
                    programming. I have experience in Software Engineering 
                    (both front-end and back-end) though my primary interests
                    lie in Artificial Intelligence development!
                </a>
            </div>
        </div>
    );
}

export default Intro;
