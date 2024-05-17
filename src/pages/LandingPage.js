import React from 'react';
import '../styles/LandingPage.css';
import Header from '../components/Header.js'
import AutoplayCarousel from '../components/carousel/AutoplayCarousel'


const LandingPage = () => {
    return (
        <div>
            <Header />
            <h1> Landing Page </h1>
            <AutoplayCarousel />
        </div>
    );
}

export default LandingPage;
