import React from 'react';
import '../styles/LandingPage.css';

import Header from '../components/general/Header.js'
import Footer from '../components/general/Footer.js'

import Intro from '../components/home/Intro.js'
import Socials from '../components/home/Socials.js'
import LandingActions from '../components/home/LandingActions.js'


const LandingPage = () => {
    return (
        <div className="page-container">
            <Header />
            <Intro />
            <LandingActions />
            <Socials />
            <Footer />
        </div>
    );
}

export default LandingPage;
