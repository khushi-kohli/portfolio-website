import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projects = [
  {
    title: 'LeetMetric – LeetCode Progress Tracker',
    tech: 'HTML, CSS, JavaScript',
    description: 'A responsive web application that allows users to track their LeetCode progress by entering their username. It displays the total number of problems solved, broken down by difficulty levels—Easy, Medium, and Hard. The app uses a proxy URL to fetch data from the LeetCode API and dynamically updates the UI using JavaScript.',
    link: 'https://khushi-kohli.github.io/project2/'
  },
  {
    title: 'StudySync – Landing Page Website',
    tech: 'HTML, CSS',
    description: 'A clean, modern, and mobile-optimized landing page designed for an educational platform called “StudySync.” The layout includes sections such as About, Testimonials, and a Newsletter Subscription Form. The project focuses on delivering a visually appealing user interface, responsive design across devices, and readable typography using the Helvetica World font.',
    link: 'https://khushi-kohli.github.io/project1/'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">My Projects</h2>
      <div className="projects__grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 