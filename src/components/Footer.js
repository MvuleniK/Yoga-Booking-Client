import React from "react";
import "../styles/Footer.css";

const Header = (props) => {
  return (
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
  );
};

export default Header;
