import React from 'react';
import '../../styles/Footer.css';
import { useNavigate } from "react-router-dom"

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer>
            <div className = "footer-conatiner-nav"> 
                <a className = "footer-link" onClick={() => navigate('/')}> Home </a>
                <a className = "footer-link" onClick={() => navigate('/about')}> About </a>
                <a className = "footer-link" onClick={() => navigate('/portfolio')}> Portfolio </a>
                { /* <a className = "footer-link" onClick={() => navigate('/tutoring')}> Tutoring </a> */ }
                <a className = "footer-link" onClick={() => navigate('/contact')}> Contact </a>
            </div>
            <div className = "footer-container-text">
                <a> Website constructed by Aidan Cusa © 2025 </a>
            </div>
        </footer>
    );
}

export default Footer;
