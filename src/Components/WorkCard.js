// src/Components/WorkCard.js
import React from 'react';
import './WorkCard.css';

function WorkCard({ title, description, image, demoLink, codeLink }) {
  return (
    <div className="work-card">
      <img src={image} alt={title} className="work-image" />
      <h3 className="work-card-title">{title}</h3>
      <p className="work-card-description">{description}</p>
      <div className="work-buttons">
        {/* <a href={demoLink} target="_blank" rel="noopener noreferrer" className="work-button">Demo</a> */}
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="work-button">Code</a>
      </div>
    </div>
  );
}

export default WorkCard;
