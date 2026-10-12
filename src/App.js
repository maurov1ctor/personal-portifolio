import React, { useEffect, useRef, useState } from 'react';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const SCREENS = {
  home: Hero,
  about: About,
  projects: Projects,
  skills: Skills,
  contact: Contact,
};

const ORDER = Object.keys(SCREENS);
const SWEEP_MS = 800;

const readHash = () => {
  const id = window.location.hash.slice(1);
  return SCREENS[id] ? id : 'home';
};

function App() {
  const [current, setCurrent] = useState(readHash);
  const [leaving, setLeaving] = useState(null);
  const [direction, setDirection] = useState('forward');
  const currentRef = useRef(current);

  // A tela ativa segue o hash da URL, então o botão voltar do navegador funciona
  useEffect(() => {
    let timer;

    const onHashChange = () => {
      const next = readHash();
      const prev = currentRef.current;
      if (next === prev) return;

      currentRef.current = next;
      setDirection(ORDER.indexOf(next) > ORDER.indexOf(prev) ? 'forward' : 'back');
      setLeaving(prev);
      setCurrent(next);

      clearTimeout(timer);
      timer = setTimeout(() => setLeaving(null), SWEEP_MS);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      clearTimeout(timer);
    };
  }, []);

  // Esc volta ao menu; ← → alternam entre as telas
  useEffect(() => {
    const onKeyDown = (e) => {
      if (current === 'home' || e.target.closest('input, textarea')) return;

      if (e.key === 'Escape') {
        window.location.hash = 'home';
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const tabs = ORDER.slice(1);
        const step = e.key === 'ArrowRight' ? 1 : -1;
        const index = (tabs.indexOf(current) + step + tabs.length) % tabs.length;
        window.location.hash = tabs[index];
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [current]);

  const visible = leaving ? [leaving, current] : [current];

  return (
    <>
      <Background />
      <Header current={current} />

      <main className={`stage stage--${direction}`}>
        {visible.map((id) => {
          const Screen = SCREENS[id];
          const active = id === current;
          const state = !leaving ? '' : active ? 'screen--in' : 'screen--out';

          return (
            <div
              key={id}
              className={`screen screen--${id} ${state}`}
              aria-hidden={!active}
              inert={!active}
            >
              <Screen active={active} />
            </div>
          );
        })}

        {leaving && (
          <React.Fragment key={current}>
            <span className="blade blade--glow" aria-hidden="true" />
            <span className="blade blade--line" aria-hidden="true" />
          </React.Fragment>
        )}
      </main>

      <Footer current={current} />
    </>
  );
}

export default App;
