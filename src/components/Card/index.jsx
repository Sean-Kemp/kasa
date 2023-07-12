import React from 'react';
import '../../styles/card.css';

function Card(props) {
      const { cover, title } = props;
      return (
            <div className="card">
                  <img src={cover} alt={title} className="card__img" />
                  <div>
                        <p>{title}</p>
                  </div>
            </div>
      );
}

export default Card;
