import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact">
    <div className="container">
    <h2>Contact</h2>
    <form>
      <input type="email" placeholder="your.email@example.com" />
      <button type="submit">Send</button>
    </form>
    </div>
  </section>
);

export default Contact;
