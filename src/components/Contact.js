import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container glass">
        <h2 className="contact__title neon">Contact Me</h2>
        <div className="contact__info">
          <div className="contact__item">
            <span className="contact__icon">📧</span>
            <span className="contact__text">kohlikhushi389@gmail.com</span>
          </div>
          <div className="contact__item">
            <span className="contact__icon">📞</span>
            <span className="contact__text">87550282933</span>
          </div>
          <div className="contact__item">
            <span className="contact__icon">🔗</span>
            <a className="contact__text contact__link" href="https://www.linkedin.com/in/khushi-kohli-9a981a363" target="_blank" rel="noopener noreferrer">linkedin.com/in/khushi-kohli-9a981a363</a>
          </div>
        </div>
        <form className="contact__form">
          <input type="text" placeholder="Your Name" className="contact__input" required />
          <input type="email" placeholder="Your Email" className="contact__input" required />
          <textarea placeholder="Your Message" className="contact__textarea" required></textarea>
          <button type="submit" className="contact__btn neon-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 