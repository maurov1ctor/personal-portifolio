import React from 'react';
import './Contact.css';
import ScreenTitle from '../ScreenTitle/ScreenTitle';

const Contact = () => (
  <section className="contact screen__inner">
    <span className="screen__ghost" aria-hidden="true">Contact</span>

    <ScreenTitle index="04" as="h2">Contact</ScreenTitle>

    <form className="rise" style={{ '--d': 1 }}>
      <input type="email" placeholder="your.email@example.com" aria-label="Email" />
      <button type="submit" className="btn-primary">Send</button>
    </form>
  </section>
);

export default Contact;
