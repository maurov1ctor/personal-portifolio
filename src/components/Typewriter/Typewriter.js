import React, { useEffect, useState } from 'react';
import './Typewriter.css';

// Escreve o texto letra a letra, como uma caixa de diálogo de jogo
const Typewriter = ({ text, speed = 16 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const timer = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(timer);
          return c;
        }
        return c + 1;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p className="typewriter">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="typewriter__rest">{text.slice(count)}</span>
        {count >= text.length && <span className="typewriter__next">▼</span>}
      </span>
    </p>
  );
};

export default Typewriter;
