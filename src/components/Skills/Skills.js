import React from 'react';
import './Skills.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import useReveal from '../../hooks/useReveal';

const SKILLS = ['HTML5', 'CSS3', 'Java', 'React', 'MySQL', 'Springboot', 'RESTful APIs'];

const Skills = () => {
  const [ref, inView] = useReveal();

  return (
    <section id="skills" ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
      <div className="container">
      <SectionTitle index="01">Skills</SectionTitle>
      <ul className="skills-list">
        {SKILLS.map((skill, i) => (
          <li key={skill} style={{ '--i': i }}>
            <span className="skill-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {skill}
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Skills;
