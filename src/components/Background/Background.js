import React from 'react';
import './Background.css';

const Background = () => (
  <div className="bg" aria-hidden="true">
    <span className="bg__blob bg__blob--a" />
    <span className="bg__blob bg__blob--b" />
    <span className="bg__rays" />
    <span className="bg__ripples" />
    <span className="bg__grain" />
  </div>
);

export default Background;
