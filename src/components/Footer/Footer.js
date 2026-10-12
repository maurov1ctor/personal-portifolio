import React from 'react';
import './Footer.css';

const Footer = ({ current }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Dicas de teclado, só em telas com mouse/teclado */}
        <div className="footer-hints" aria-hidden="true">
          {current === 'home' ? (
            <>
              <span><kbd>↑↓</kbd> Select</span>
              <span><kbd>Enter</kbd> Confirm</span>
            </>
          ) : (
            <>
              <span><kbd>Esc</kbd> Back</span>
              <span><kbd>←→</kbd> Switch</span>
            </>
          )}
        </div>

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
