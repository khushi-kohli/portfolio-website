import React from 'react';
import './Achievements.css';

const Achievements = () => (
  <section className="achievements" id="achievements">
    <div className="achievements__container glass">
      <h2 className="achievements__title neon">Achievements</h2>
      <div className="achievements__item">
        <h3>Frontend Development Certificate - One Roadmap</h3>
        <div className="achievements__img-wrapper">
          <img src="/certificate.jpg" alt="Frontend Certificate" className="achievements__img" />
        </div>
      </div>
    </div>
  </section>
);

export default Achievements; 