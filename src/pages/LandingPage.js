import React from 'react';
import '../styles/LandingPage.css';

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

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
            <Footer />
        </div>
    );
}

export default LandingPage;
