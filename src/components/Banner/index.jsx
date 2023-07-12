import React from 'react';
import '../../styles/banner.css';

function Banner({ image, text }) {
      return (
            <div className="banner">
                  <img className="banner__img" src={image} alt="Banner" />
                  <div className="banner__overlay">
                        <span className="banner__heading">{text}</span>
                  </div>
            </div>
      );
}

export default Banner;
