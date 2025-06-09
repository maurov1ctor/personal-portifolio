import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Mauro Carvalho. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/maurov1ctor" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/maurov1ctor" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/5581993877127" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;