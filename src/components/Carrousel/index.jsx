import React from 'react';
import { useState } from 'react';
import '../../styles/component-styles/carrousel.css';

function Carrousel({ slides }) {
      const [current, setCurrent] = useState(0);
      const length = slides.length;

      const next = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
      };
      const previous = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
      };
      if (!Array.isArray(slides) || slides.length <= 0) {
            return null;
      }
      return (
            <div className="carrousel">
                  <div className="carrousel__overlay">
                        {length > 1 && (
                              <i
                                    className="left-arrow fa-solid fa-chevron-left"
                                    onClick={previous}
                              ></i>
                        )}
                        {length > 1 && (
                              <i
                                    className="right-arrow fa-solid fa-chevron-right"
                                    onClick={next}
                              ></i>
                        )}
                  </div>
                  {slides.map((image, i) => {
                        return (
                              <div key={i} className="carrousel__container">
                                    {i === current && (
                                          <img
                                                src={image}
                                                alt=" "
                                                className="carrousel__img"
                                          />
                                    )}
                                    {i === current && length > 1 && (
                                          <span className="carrousel__counter">
                                                {current + 1}/{length}
                                          </span>
                                    )}
                              </div>
                        );
                  })}
            </div>
      );
}

export default Carrousel;
