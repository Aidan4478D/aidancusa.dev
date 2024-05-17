import React from 'react';
import '../styles/LandingPage.css';
import Header from '../components/Header.js'
import Intro from '../components/Intro.js'
import AutoplayCarousel from '../components/carousel/AutoplayCarousel'


const LandingPage = () => {
    return (
        <div>
            <Header />
            <AutoplayCarousel />
            <Intro />
        </div>
    );
}

export default LandingPage;
