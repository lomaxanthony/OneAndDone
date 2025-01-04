import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; One & Done 2025. All rights reserved. Anthony Lomax</p>
      <div>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;