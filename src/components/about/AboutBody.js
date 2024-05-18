import React from 'react';
import '../../styles/About.css';
import FadeInSection from '../../tools/FadeInSection'

const AboutBody = () => {
    return (
        <div>
            <br/>
            <div className="about-container-video">
                <video height="auto" autoPlay muted loop>
                    <source src="videos/shrt_crop_natm_f3.mp4" type="video/mp4" />
                </video>
                <div className="overlay">
                    <h1 id = "top_text">About Me</h1>
                </div>
            </div>
            <br/> <br/> <br/> <br/>
            <FadeInSection>
                <div className="about-img-text-container">
                    <img src="about/family-photo-christmas.jpg" alt="Family Christmas" />
                    <a> My name's Aidan, and I'm an upcoming Junior at The Cooper 
                        Union majoring in electrical engineering! I grew up in 
                        Monroe, Connecticut and attended Masuk High School where 
                        I was an active member of the VEX Robotics team 4478D.
                        Currently, I'm interested in Deep Learning Engineering,
                        focusing on taking classes to aid this passion.
                        <br/><br/>
                        When not involved in academics, you could probably find 
                        me exploring the streets and parks in New York City, belting 
                        lyrics in concerts, playing music and games with friends, 
                        and much more! 
                    </a>
                </div>
            </FadeInSection>
            <br/> <br/> <br/> <br/>
            
            <div className="image-wide-container">
                <img src="about/cooper_wide.jpg" alt="The Cooper Union" className="wide-image" />
                <div className="centered-text">
                    <h2>The Cooper Union</h2>
                </div>
            </div>
            <hr/>

            <br/>
            <FadeInSection>
                <div className="about-img-text-container">
                    <img src="about/family-photo-christmas.jpg" alt="Family Christmas" />
                    <a> My name's Aidan, and I'm an upcoming Junior at The Cooper 
                        Union majoring in electrical engineering! I grew up in 
                        Monroe, Connecticut and attended Masuk High School where 
                        I was an active member of the VEX Robotics team 4478D.
                        Currently, I'm interested in Deep Learning Engineering,
                        focusing on taking classes to aid this passion.
                        <br/><br/>
                        When not involved in academics, you could probably find 
                        me exploring the streets and parks in New York City, belting 
                        lyrics in concerts, playing music and games with friends, 
                        and much more! 
                    </a>
                </div> 
            </FadeInSection>
        </div>
    );
}

export default AboutBody;
