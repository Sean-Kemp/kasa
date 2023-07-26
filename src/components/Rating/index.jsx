import React from 'react';
import '../../styles/component-styles/rating.css';

function Rating(rate) {
      const score = rate.score;
      const notes = [1, 2, 3, 4, 5];
      console.log(score);
      return (
            <div className="rating__container">
                  {notes.map((note) =>
                        score >= note ? (
                              <i
                                    key={note.toString()}
                                    className="fa-solid fa-star star--full"
                              ></i>
                        ) : (
                              <i
                                    key={note.toString()}
                                    className="fa-solid fa-star star--empty"
                              ></i>
                        ),
                  )}
            </div>
      );
}

export default Rating;
