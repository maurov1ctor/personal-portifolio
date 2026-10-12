import React from 'react';
import './ScreenTitle.css';

const ScreenTitle = ({ index, as: Tag = 'h3', children }) => (
  <div className="screen-title rise">
    <span className="screen-title__num" aria-hidden="true">{index}</span>
    <Tag className="screen-title__text">{children}</Tag>
  </div>
);

export default ScreenTitle;
