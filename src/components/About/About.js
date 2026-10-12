import React, { useState } from "react";
import "./About.css";
import ScreenTitle from "../ScreenTitle/ScreenTitle";
import Typewriter from "../Typewriter/Typewriter";

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

  const [activeTab, setActiveTab] = useState("focus");

  const current = TABS.find((tab) => tab.id === activeTab);

  return (
    <section className="about screen__inner">
      <span className="screen__ghost" aria-hidden="true">About</span>

      <ScreenTitle index="01">About Me</ScreenTitle>

      <div className="about-grid">

        <div>
          <p className="about-lead rise" style={{ "--d": 1 }}>
            Junior web developer focused on building functional and well-structured applications. Passionate about backend development, problem solving, and writing clean, maintainable code.
          </p>

          <div className="about-buttons rise" style={{ "--d": 2 }}>
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
        </div>

        {/* TEXTO QUE APARECE */}
        <div className="about-content dialog rise" style={{ "--d": 3 }}>
          <span className="dialog__name">{current.label}</span>
          <Typewriter text={current.text} />
        </div>

      </div>
    </section>
  );
};

export default About;
