import React from 'react';

const SYNODIC_DAYS = 29.530588853;
const REFERENCE_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

const PHASE_NAMES = [
  'New Moon',
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent',
];

// Fração do ciclo lunar: 0 = nova, 0.5 = cheia
export const moonPhase = (date = new Date()) => {
  const days = (date.getTime() - REFERENCE_NEW_MOON) / 86400000;
  return (((days % SYNODIC_DAYS) + SYNODIC_DAYS) % SYNODIC_DAYS) / SYNODIC_DAYS;
};

export const moonPhaseName = (phase) => PHASE_NAMES[Math.round(phase * 8) % 8];

const R = 10;

const Moon = ({ phase, size = 28 }) => {
  const waxing = phase < 0.5;
  const gibbous = phase > 0.25 && phase < 0.75;
  const rx = (R * Math.abs(Math.cos(2 * Math.PI * phase))).toFixed(3);

  // Arco externo do lado iluminado + arco do terminador
  const outer = waxing ? 1 : 0;
  const terminator = waxing === gibbous ? 1 : 0;
  const lit = `M0 ${-R} A${R} ${R} 0 0 ${outer} 0 ${R} A${rx} ${R} 0 0 ${terminator} 0 ${-R}Z`;

  return (
    <svg width={size} height={size} viewBox="-12 -12 24 24" aria-hidden="true">
      <circle r={R} fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
      <path d={lit} fill="var(--moon)" />
    </svg>
  );
};

export default Moon;
