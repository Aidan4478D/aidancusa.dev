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
          I am a Junior Electrical Engineering student at The Cooper Union, passionate
          in tinkering with technology and programming. I have experience in Software
          Engineering (both front-end and back-end) though my primary interests lie in
          Artificial Intelligence development!
        </p>
        <Socials />   {/* social icons go right under the paragraph */}
      </div>

      <div className="intro-image-container">
        <img
          src="/intro-pic-gold.png"
          alt="Introduction Illustration"
        />
      </div>
    </div>
  );
};

export default Intro;

