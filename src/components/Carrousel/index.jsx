import React from 'react';
import { useState } from 'react';

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
            <div>
                  {length > 1 && (
                        <span className="left-Arrow" onClick={previous}>
                              <button>PREVIOUS</button>
                        </span>
                  )}
                  {length > 1 && (
                        <span className="right-Arrow" onClick={next}>
                              <button>NEXT</button>
                        </span>
                  )}
                  {slides.map((image, i) => {
                        return (
                              <div key={i}>
                                    {i === current && (
                                          <img src={image} alt=" " />
                                    )}
                                    {i === current && length > 1 && (
                                          <span>
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
