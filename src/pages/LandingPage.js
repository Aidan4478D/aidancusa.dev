import React from 'react';
import '../styles/LandingPage.css';
import Header from '../components/Header.js'
import AutoplayCarousel from '../components/carousel/AutoplayCarousel'
import Intro from '../components/Intro.js'
import Socials from '../components/Socials.js'


const LandingPage = () => {
    return (
        <div>
            <Header />
            <AutoplayCarousel />
            <Intro />
            <Socials />
        </div>
    );
}

export default LandingPage;
