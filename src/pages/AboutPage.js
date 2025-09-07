import React from 'react';
//import '../styles/LandingPage.css';
import Header from '../components/general/Header.js'
import Footer from '../components/general/Footer.js'

import AboutBody from '../components/about/AboutBody.js'


const AboutPage = () => {
    return (
        <div className="page-container">
            <Header />
            <AboutBody />
            <Footer />
        </div>
    );
}

export default AboutPage;
