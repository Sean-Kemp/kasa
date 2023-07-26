import React from 'react';
import '../../styles/component-styles/card.css';

function Card({ cover, title }) {
      return (
            <div className="card">
                  <img src={cover} alt={title} className="card__img" />
                  <div className="card__overlay">
                        <p className="card__title">{title}</p>
                  </div>
            </div>
      );
}

export default Card;
