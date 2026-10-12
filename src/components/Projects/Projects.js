import React, { useState } from 'react';
import './Projects.css';
import ScreenTitle from '../ScreenTitle/ScreenTitle';

const PROJECTS = [
  {
    title: 'E-commerce BackEnd',
    text: 'Developed a BackEnd model for an E-commerce using technologies like Springboot and SpringSecurity.',
  },
  {
    title: 'Portfolio Website',
    text: 'Designed and built a personal portfolio website to showcase skills and projects.',
  },
  {
    title: 'Basic CRUD with Node.JS',
    text: 'A basic backend CRUD structure with Node.JS .',
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(0);
  const project = PROJECTS[selected];

  return (
    <section className="projects screen__inner">
      <span className="screen__ghost" aria-hidden="true">Projects</span>

      <ScreenTitle index="02">Projects</ScreenTitle>

      <div className="projects-grid">

        <div className="projects-list rise" style={{ '--d': 1 }}>
          {PROJECTS.map((item, i) => (
            <button
              key={item.title}
              className={selected === i ? 'active' : ''}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
              onMouseEnter={() => setSelected(i)}
              onFocus={() => setSelected(i)}
            >
              <span className="projects-list__num" aria-hidden="true">0{i + 1}</span>
              {item.title}
            </button>
          ))}
        </div>

        <div className="project-detail dialog rise" style={{ '--d': 2 }}>
          <span className="project-detail__num" aria-hidden="true">0{selected + 1}</span>
          <div className="project-detail__body" key={selected}>
            <span className="dialog__name">Project {selected + 1}</span>
            <h4>{project.title}</h4>
            <p>{project.text}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
