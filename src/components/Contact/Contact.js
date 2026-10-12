import React from 'react';
import './Contact.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import useReveal from '../../hooks/useReveal';

const Contact = () => {
  const [ref, inView] = useReveal();

  return (
    <section id="contact" ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
      <div className="container">
      <SectionTitle index="04" as="h2">Contact</SectionTitle>
      <form>
        <input type="email" placeholder="your.email@example.com" aria-label="Email" />
        <button type="submit">Send</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
