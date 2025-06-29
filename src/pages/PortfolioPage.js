import React from 'react';
//import '../styles/LandingPage.css';
import Header from '../components/general/Header.js'
import Footer from '../components/general/Footer.js'
import Slideshow from '../components/projects/Slideshow.js'
import YearProjects from '../components/projects/YearProjects.js'
import Socials from '../components/home/Socials.js'


const PortfolioPage = () => {
    return (
        <div>
            <Header />
            <br/><br/><br/>
            <Slideshow />
            <YearProjects />
            <Socials />
            <br/><br/><br/>
            <Footer />
        </div>
    );
}

export default PortfolioPage;
