import React from 'react';
import './Projects.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import useReveal from '../../hooks/useReveal';

const PROJECTS = [
  {
    title: 'Project 1: E-commerce BackEnd',
    text: 'Developed a BackEnd model for an E-commerce using technologies like Springboot and SpringSecurity.',
  },
  {
    title: 'Project 2: Portfolio Website',
    text: 'Designed and built a personal portfolio website to showcase skills and projects.',
  },
  {
    title: 'Project 3: Basic CRUD with Node.JS',
    text: 'A basic backend CRUD structure with Node.JS .',
  },
];

const Projects = () => {
  const [ref, inView] = useReveal();

  return (
    <section id="projects" ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
      <div className="container">
      <SectionTitle index="03">Projects</SectionTitle>
      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <div className="project-card" key={project.title} style={{ '--i': i }}>
            <span className="project-card__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <h4>{project.title}</h4>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
