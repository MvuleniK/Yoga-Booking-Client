import React from 'react';
import '../styles/Contact.css';
import "../styles/About.css";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-info">
        <p>
          Phone: <span className="contact-detail">+1 (555) 123-4567</span>
        </p>
        <p>
          Email: <span className="contact-detail">info@yogastudio.com</span>
        </p>
        <p>
          Address: <span className="contact-detail">123 Main St, Anytown, USA</span>
        </p>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678910111213!2d-122.12345678901234!3d37.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890123456!2sYoga%20Studio!5e0!3m2!1sen!2sus!4v1234567890123456"
          width="100%"
          height="400"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Contact;
