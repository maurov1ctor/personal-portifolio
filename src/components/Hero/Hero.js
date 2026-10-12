import { useState } from "react";
import "./Hero.css";

const Hero = () => {

  const [openCV, setOpenCV] = useState(false);

  return (
    <>
      <section className="hero">

        <div className="hero-deco" aria-hidden="true">
          <span className="hero-moon" />
          <span className="hero-slash hero-slash--a" />
          <span className="hero-slash hero-slash--b" />
          <span className="hero-ghost">Java</span>
        </div>

        <div className="container">

          <h2>Hi, I'm Mauro!</h2>

          <p>
            Backend Developer focused on Java.<br />
            I build scalable REST APIs and well-structured applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <button
              className="btn-outline"
              onClick={() => setOpenCV(true)}
            >
              View CV
            </button>

          </div>

        </div>
      </section>

      {/* MODAL CV */}
      {openCV && (
        <div
          className="cv-modal-overlay"
          onClick={() => setOpenCV(false)}
        >
          <div
            className="cv-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="cv-modal-title">Meu Currículo</h3>

            <p>Você pode visualizar ou baixar meu CV aqui.</p>

            <a
              href="/cv-mauro-victor.pdf"
              target="_blank"
              rel="noreferrer"
              className="cv-link"
            >
              Visualizar
            </a>

            <a
              href="/cv-mauro-victor.pdf"
              download
              className="cv-download"
            >
              Baixar
            </a>

            <button
              className="cv-close"
              onClick={() => setOpenCV(false)}
            >
              Fechar
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
