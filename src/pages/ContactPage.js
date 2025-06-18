import React from 'react';
//import '../styles/LandingPage.css';
import Header from '../components/general/Header.js'
import Footer from '../components/general/Footer.js'
import ContactForm from '../components/contact/ContactForm.js'


const ContactPage = () => {
    return (
        <div>
            <Header />
            <main style={{ paddingTop: '1rem' }}>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}

export default ContactPage;
