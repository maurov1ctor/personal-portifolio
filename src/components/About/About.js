import React, { useState } from "react";
import "./About.css";

const About = () => {

  const [activeTab, setActiveTab] = useState(null);

  return (
    <section id="about">
<div className="container">
      <h3>About Me</h3>

      <p>
        Junior web developer focused on building functional and well-structured applications. Passionate about backend development, problem solving, and writing clean, maintainable code.
      </p>

      <div className="about-buttons">

  <button
    className={activeTab === "focus" ? "active" : ""}
    onClick={() => setActiveTab("focus")}
  >
    Focus
  </button>

  <button
    className={activeTab === "learning" ? "active" : ""}
    onClick={() => setActiveTab("learning")}
  >
    Learning
  </button>

  <button
    className={activeTab === "goal" ? "active" : ""}
    onClick={() => setActiveTab("goal")}
  >
    Goal
  </button>

</div>

 {/* TEXTO QUE APARECE */}
        {activeTab === "focus" && (
          <div className="about-content">
            <p>
              I focus on backend development, APIs, database modeling and clean architecture.
            </p>
          </div>
        )}

        {activeTab === "learning" && (
          <div className="about-content">
            <p>
              Currently improving my knowledge in Java, Spring Boot, and software architecture patterns.
            </p>
          </div>
        )}

        {activeTab === "goal" && (
          <div className="about-content">
            <p>
              My goal is to become a senior backend developer and build scalable systems.
            </p>
          </div>
        )}

</div>
    </section>
  );
};

export default About;
