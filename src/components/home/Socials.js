import React from 'react';
import '../../styles/Socials.css';
import FadeInSection from '../../tools/FadeInSection'

const Socials = () => {
    const handleNavigate = (url) => {
        window.open(url, "_blank");
    }

    return (
        <FadeInSection>
            <div className="socials-container">
                <img 
                    src="/socials/github-logo.png" 
                    alt="Github Logo" 
                    onClick={() => handleNavigate('https://github.com/Aidan4478D')}
                />
                <img 
                    src="/socials/linkedin-logo.png" 
                    alt="LinkedIn Logo" 
                    onClick={() => handleNavigate('https://www.linkedin.com/in/aidancusa')}
                />
                <img 
                    src="/socials/instagram-logo.png" 
                    alt="Instagram Logo" 
                    onClick={() => handleNavigate('https://www.instagram.com/aidan.cusa')}
                />
            </div>
        </FadeInSection>
    );
}

export default Socials;
