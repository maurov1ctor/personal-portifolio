import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const MENU = ["about", "projects", "skills", "contact"];

const Hero = ({ active }) => {

  const [openCV, setOpenCV] = useState(false);
  const [selected, setSelected] = useState(0);
  const itemRefs = useRef([]);

  // Menu principal: ↑ ↓ movem a seleção, Enter confirma
  useEffect(() => {
    if (!active || openCV) return;

    const onKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const step = e.key === "ArrowDown" ? 1 : -1;
        const next = (selected + step + MENU.length) % MENU.length;
        setSelected(next);
        itemRefs.current[next]?.focus();
      } else if (e.key === "Enter" && document.activeElement === document.body) {
        window.location.hash = MENU[selected];
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, openCV, selected]);

  useEffect(() => {
    if (!openCV) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenCV(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openCV]);

  return (
    <>
      <section className="hero screen__inner">

        <div className="hero-intro">

          <h2 className="rise">
            <span className="hero-hi">Hi, I'm</span>{" "}
            <span className="hero-name">Mauro!</span>
          </h2>

          <p className="rise" style={{ "--d": 2 }}>
            Backend Developer focused on Java.<br />
            I build scalable REST APIs and well-structured applications.
          </p>

          <div className="hero-buttons rise" style={{ "--d": 3 }}>

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

        <nav className="hero-menu" aria-label="Main menu">
          {MENU.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              ref={(el) => (itemRefs.current[i] = el)}
              className={`hero-menu__item rise ${selected === i ? "is-selected" : ""}`}
              style={{ "--i": i, "--d": i + 2 }}
              onMouseEnter={() => setSelected(i)}
              onFocus={() => setSelected(i)}
            >
              <span className="hero-menu__num" aria-hidden="true">0{i + 1}</span>
              <span className="hero-menu__label">{id}</span>
            </a>
          ))}
        </nav>

      </section>

      {/* MODAL CV */}
      {openCV && (
        <div
          className="cv-modal-overlay"
          onClick={() => setOpenCV(false)}
        >
          <div
            className="cv-modal dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="cv-modal-title" className="dialog__name">Meu Currículo</h3>

            <p>Você pode visualizar ou baixar meu CV aqui.</p>

            <div className="cv-modal__actions">
              <a
                href="/cv-mauro-victor.pdf"
                target="_blank"
                rel="noreferrer"
                className="cv-link btn-primary"
              >
                Visualizar
              </a>

              <a
                href="/cv-mauro-victor.pdf"
                download
                className="cv-download btn-outline"
              >
                Baixar
              </a>
            </div>

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
