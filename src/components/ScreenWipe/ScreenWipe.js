import React, { useEffect, useRef, useState } from 'react';
import './ScreenWipe.css';

const COVERED_AT = 520;
const WIPE_END = 960;
const INTRO_END = 1100;

// Transição de tela: faixas diagonais cobrem a página ao navegar entre seções
const ScreenWipe = () => {
  const [phase, setPhase] = useState('intro');
  const [label, setLabel] = useState('');
  const timers = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setPhase('idle'), INTRO_END);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const clearTimers = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    const handleClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;

      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        target.scrollIntoView();
        return;
      }

      clearTimers();
      setLabel(id);
      setPhase('wipe');
      timers.current.push(
        setTimeout(() => target.scrollIntoView(), COVERED_AT),
        setTimeout(() => setPhase('idle'), WIPE_END)
      );
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      clearTimers();
    };
  }, []);

  if (phase === 'idle') return null;

  return (
    <div className={`wipe wipe--${phase}`} key={`${phase}-${label}`} aria-hidden="true">
      <span className="wipe__panel wipe__panel--cyan" />
      <span className="wipe__panel wipe__panel--white" />
      <span className="wipe__panel wipe__panel--navy">
        <span className="wipe__label">{phase === 'intro' ? 'DevPortfolio' : label}</span>
      </span>
    </div>
  );
};

export default ScreenWipe;
