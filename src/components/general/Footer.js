import React from 'react';
import '../../styles/Footer.css';
import { Link, useNavigate } from "react-router-dom"

const Footer = () => {

    const navigate = useNavigate();

    return (
        <>
        <footer>
            <div className="footer-container-nav"> 
                <Link className="footer-link" to="/">Home</Link>
                <Link className="footer-link" to="/about">About</Link>
                <Link className="footer-link" to="/portfolio">Portfolio</Link>
                { /* <Link className="footer-link" to="/tutoring">Tutoring</Link> */ }
                <Link className="footer-link" to="/contact">Contact</Link>
            </div>
            <div className="footer-container-text">
                <span>Website constructed by Aidan Cusa © 2025</span>
            </div>
        </footer>
        </>
    );
}

export default Footer;
