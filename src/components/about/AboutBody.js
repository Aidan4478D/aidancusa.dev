import React from 'react';
import '../../styles/About.css';

const AboutBody = () => {
    return (
        <div>
            <div class="container-video">
                <video height="auto" autoPlay muted loop>
                    <source src="videos/shrt_crop_natm_f3.mp4" type="video/mp4" />
                </video>
                <div class="overlay">
                    <h1 id = "top_text">About Me</h1>
                </div>
            </div>
        </div>
    );
}

export default AboutBody;
