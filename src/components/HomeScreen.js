import React from 'react';
import '../styles/HomeScreen.css';

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <div className="banner">
        <h1>Welcome to our Yoga Studio</h1>
        <p>Find peace and harmony through the practice of yoga</p>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/teachers">Teachers</a></li>
          <li><a href="/showClassList">Classes</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <h2>Our Studio</h2>
        <p>Our studio offers a welcoming and inclusive environment for all who wish to practice yoga. We provide a variety of classes for all levels, from beginner to advanced, and our experienced teachers are committed to guiding students safely through their practice.</p>
        <h2>Our Philosophy</h2>
        <p>At our studio, we believe that the practice of yoga is a transformative journey that can lead to greater physical, mental, and emotional well-being. We are dedicated to creating a space where students can connect with themselves and with others, and where they can explore their own unique path of growth and healing.</p>
      </div>
      <footer className="footer">
        <div className="social-media">
          <a href="https://www.facebook.com/yogastudio">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/yogastudio">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.twitter.com/yogastudio">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
        <div className="contact-details">
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown USA
          </p>
          <p>
            <i className="fas fa-phone"></i> (555) 555-5555
          </p>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a href="mailto:info@yogastudio.com">info@yogastudio.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomeScreen;

