import React from 'react';
import './AboutMe.css';

const AboutMe = () => (
  <section className="aboutme" id="about">
    <h2 className="aboutme__title">About Me</h2>
    <p className="aboutme__summary">
      Motivated and tech-savvy 2nd-year BCA student actively seeking a Front-End Developer internship to apply and expand my web development skills. Proficient in HTML, CSS, and JavaScript, with a strong interest in building responsive, user-friendly websites. Committed to continuous learning and eager to gain hands-on experience in a real-world development environment.
    </p>
    <div className="aboutme__skills">
      <h3>Skills</h3>
      <ul>
        <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript</li>
        <li><strong>Front-End Concepts:</strong> Responsive Design, Flexbox, CSS Grid, DOM Manipulation</li>
        <li><strong>Tools & Platforms:</strong> Visual Studio Code, GitHub</li>
        <li><strong>Programming Languages:</strong> C++, Python</li>
        <li><strong>Soft Skills:</strong> Team Collaboration, Problem Solving, Time Management, Willingness to Learn</li>
      </ul>
    </div>
  </section>
);

export default AboutMe; 