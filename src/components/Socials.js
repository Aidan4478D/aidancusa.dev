import React from 'react';
import '../styles/Socials.css';
import { useNavigate } from "react-router-dom"

const Socials = () => {

    const navigate = useNavigate();

    const handleNavigate = (url) => {
        window.open(url, "_blank"); // "_blank" opens a new tab
    }

    return (
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
    );
}

export default Socials;
