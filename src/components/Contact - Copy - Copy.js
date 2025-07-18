import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact Me</h2>
      <form className="contact__form">
        <input type="text" placeholder="Name" className="contact__input" required />
        <input type="email" placeholder="Email" className="contact__input" required />
        <textarea placeholder="Message" className="contact__textarea" required></textarea>
        <button type="submit" className="contact__btn">Submit</button>
      </form>
      <div className="contact__email">kohlikhushi389@gmail.com</div>
    </section>
  );
};

export default Contact; 