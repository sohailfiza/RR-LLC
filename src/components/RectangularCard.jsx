import React from 'react';
import './RectangularCard.css';

const RectangularCard = ({ title, highlights, rating }) => {
  return (
    <div className="card">
      <img src="/abc.png" alt="Builder Icon" />
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p>Main highlights</p>
        <p>{highlights}</p>
      </div>
      <div className="card-rating">
        <h3>{rating}</h3>
      </div>
      
      <div>
        <button className="card-button">View</button>
      </div>
    </div>
  );
};

export default RectangularCard;
