import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="project-card__tech">{tech}</div>
      <a className="project-card__btn" href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard; 