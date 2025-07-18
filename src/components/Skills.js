import React from 'react';
import './Skills.css';

const languages = ['C++', 'Python'];
const technologies = ['HTML', 'CSS', 'JavaScript', 'React (learning)'];
const tools = ['GitHub', 'Visual Studio Code'];

const Skills = () => (
  <section className="skills" id="skills">
    <div className="skills__container glass">
      <h2 className="skills__title neon">Skills</h2>
      <div className="skills__group">
        <h3>Languages</h3>
        <div className="skills__buttons">
          {languages.map((lang, i) => (
            <button className="skills__btn neon-btn" key={i}>{lang}</button>
          ))}
        </div>
      </div>
      <div className="skills__group">
        <h3>Technologies</h3>
        <div className="skills__buttons">
          {technologies.map((tech, i) => (
            <button className="skills__btn neon-btn" key={i}>{tech}</button>
          ))}
        </div>
      </div>
      <div className="skills__group">
        <h3>Tools</h3>
        <div className="skills__buttons">
          {tools.map((tool, i) => (
            <button className="skills__btn neon-btn" key={i}>{tool}</button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 