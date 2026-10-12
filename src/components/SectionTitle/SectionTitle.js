import React from 'react';

const SectionTitle = ({ index, as: Tag = 'h3', children }) => (
  <div className="section-title">
    <span className="section-title__num" aria-hidden="true">{index}</span>
    <Tag className="section-title__text">{children}</Tag>
  </div>
);

export default SectionTitle;
