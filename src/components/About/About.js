import React, { useState } from "react";
import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import useReveal from "../../hooks/useReveal";

const TABS = [
  {
    id: "focus",
    label: "Focus",
    text: "I focus on backend development, APIs, database modeling and clean architecture.",
  },
  {
    id: "learning",
    label: "Learning",
    text: "Currently improving my knowledge in Java, Spring Boot, and software architecture patterns.",
  },
  {
    id: "goal",
    label: "Goal",
    text: "My goal is to become a senior backend developer and build scalable systems.",
  },
];

const About = () => {

  const [activeTab, setActiveTab] = useState(null);
  const [ref, inView] = useReveal();

  const current = TABS.find((tab) => tab.id === activeTab);

  return (
    <section id="about" ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
      <div className="container">
        <SectionTitle index="02">About Me</SectionTitle>

        <p>
          Junior web developer focused on building functional and well-structured applications. Passionate about backend development, problem solving, and writing clean, maintainable code.
        </p>

        <div className="about-buttons">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              aria-pressed={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TEXTO QUE APARECE */}
        {current && (
          <div className="about-content" key={current.id}>
            <span className="about-content__tag">{current.label}</span>
            <p>{current.text}</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default About;
