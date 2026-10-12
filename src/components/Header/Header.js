import React, { useEffect, useState } from 'react';
import './Header.css';
import Moon, { moonPhase, moonPhaseName } from '../Moon/Moon';

const TABS = ['about', 'projects', 'skills', 'contact'];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Períodos do dia, como no calendário do jogo
const SLOTS = [
  [0, 'Dark Hour'],
  [1, 'Late Night'],
  [5, 'Early Morning'],
  [7, 'Morning'],
  [12, 'Daytime'],
  [15, 'After School'],
  [18, 'Evening'],
  [23, 'Late Night'],
];

const slotFor = (hour) => SLOTS.filter(([start]) => hour >= start).pop()[1];

const Header = ({ current }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const hour = now.getHours();
  const phase = moonPhase(now);

  useEffect(() => {
    document.documentElement.toggleAttribute('data-dark-hour', hour === 0);
  }, [hour]);

  return (
    <header className="header">
      <h1>
        <a href="#home">DevPortfolio</a>
      </h1>

      {current !== 'home' && (
        <nav className="nav">
          <a href="#home" className="nav__back">Menu</a>
          {TABS.map((id) => (
            <a key={id} href={`#${id}`} aria-current={current === id ? 'page' : undefined}>
              {id}
            </a>
          ))}
        </nav>
      )}

      <div className="hud">
        <span className="hud__date">
          {now.getDate()} {MONTHS[now.getMonth()]}
        </span>
        <span className={`hud__day hud__day--${now.getDay()}`}>{DAYS[now.getDay()]}</span>
        <span className="hud__slot">{slotFor(hour)}</span>
        <span className="hud__moon" title={moonPhaseName(phase)}>
          <Moon phase={phase} />
          <span>{moonPhaseName(phase)}</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
