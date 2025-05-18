import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm'; // Adjust path if needed
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page container py-5">
      <h2 className="text-center mb-4">Get in Touch</h2>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <ContactForm />
        </div>

        

        {/* WhatsApp Contact Section */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center">
          <h1>lets talk</h1>

          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <p>Fill out the form and I'll get back to you as soon as possible.</p>

          <h4 className="mb-3">Prefer WhatsApp?</h4>
          <a
            href="https://wa.me/919999999999" // Replace with your actual number
            className="btn btn-success mt-3 px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
