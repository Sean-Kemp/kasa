import React from 'react';
import { useState } from 'react';
import '../../styles/infobox.css';

function Infobox({ title, text }) {
      const [isOpen, setIsOpen] = useState(false);

      return isOpen ? (
            <div className="infobox">
                  <div className="infobox__head">
                        <h2 className="infobox__title">{title}</h2>
                        <button
                              className="infobox__button"
                              onClick={() => setIsOpen(false)}
                        >
                              Fermer
                        </button>
                  </div>

                  <div className="infobox__textbox">
                        <span className="infobox__text">{text}</span>
                  </div>
            </div>
      ) : (
            <div className="infobox">
                  <div className="infobox__head">
                        <h2 className="infobox__title">{title}</h2>
                        <button
                              className="infobox__button"
                              onClick={() => setIsOpen(true)}
                        >
                              Ouvrir
                        </button>
                  </div>
            </div>
      );
}

export default Infobox;
