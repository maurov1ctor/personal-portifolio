import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/About/About.css';
import './components/Contact/Contact.css';
import './components/Footer/Footer.css';
import './components/Header/Header.css';
import './components/Hero/Hero.css';
import './components/Projects/Projects.css';
import './components/Skills/Skills.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);