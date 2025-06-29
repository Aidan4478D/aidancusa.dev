// src/components/general/ContactForm.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../../styles/ContactForm.css';


const ContactForm = () => {
    const formRef = useRef();
    const [statusMessage, setStatusMessage] = useState('');


    const sendEmail = (e) => {
        emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current
        )
            .then(() => {
                setStatusMessage('Sent! Thanks for reaching out.');
                formRef.current.reset();
            }, () => {
                setStatusMessage('Oops something went wrong! Please try again.');
            });
    };

    return (
        <div className="contact-form-container">
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <h1>Contact Me</h1>

        <label htmlFor="user_name">Name</label>
        <input id="user_name" type="text" name="user_name" placeholder="Your name" required />

        <label htmlFor="user_email">Email</label>
        <input id="user_email" type="email" name="user_email" placeholder="you@domain.com" required />

        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" name="subject" placeholder="Subject" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message…" required />

        <button type="submit">Send</button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
        </div>
    );
};

export default ContactForm;

