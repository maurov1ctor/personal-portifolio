import React from 'react';
import './Skills.css';
import ScreenTitle from '../ScreenTitle/ScreenTitle';

const SKILLS = ['HTML5', 'CSS3', 'Java', 'React', 'MySQL', 'Springboot', 'RESTful APIs'];

const Skills = () => (
  <section className="skills screen__inner">
    <span className="screen__ghost" aria-hidden="true">Skills</span>

    <ScreenTitle index="03">Skills</ScreenTitle>

    <ul className="skills-list">
      {SKILLS.map((skill, i) => (
        <li key={skill} className="rise" style={{ '--d': i + 1 }}>
          <span className="skill-num" aria-hidden="true">0{i + 1}</span>
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
