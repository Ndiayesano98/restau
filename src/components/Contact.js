import React from 'react';
import './Contact.css';



const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="section-title font-bold text-xl">Contactez-Nous:</h2>
            <form className="contact-form">
                <div className="form-group font-bold text-lg">
                    <label htmlFor="name">Prenom et Nom</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group font-bold text-lg">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group font-bold text-lg">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn font-bold text-lg">Envoyez votre Message</button>
            </form>
            <div className="social-icons">
                <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
};

export default Contact;
