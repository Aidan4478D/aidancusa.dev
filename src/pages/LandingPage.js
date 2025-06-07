import React from 'react';
import '../styles/LandingPage.css';

import Header from '../components/general/Header.js'
import Footer from '../components/general/Footer.js'

import AutoplayCarousel from '../components/carousel/AutoplayCarousel'
import Intro from '../components/home/Intro.js'
import Socials from '../components/home/Socials.js'


const LandingPage = () => {
    return (
        <div>
            <Header />
            <Intro />
            <Socials />
            <Footer />
        </div>
    );
}

export default LandingPage;
