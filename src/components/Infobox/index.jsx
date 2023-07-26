import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/component-styles/infobox.css';

function Infobox({ title, text }) {
      const [isOpen, setIsOpen] = useState(false);
      const location = useLocation();
      return isOpen ? (
            <div
                  className={
                        location.pathname === '/a_propos'
                              ? 'infobox'
                              : 'infobox--logement'
                  }
            >
                  <div className="infobox__head">
                        <h2
                              className={
                                    location.pathname === '/a_propos'
                                          ? 'infobox__title'
                                          : 'infobox__title infobox__title--logement'
                              }
                        >
                              {title}
                        </h2>
                        <i
                              className="infobox__button fa-solid fa-chevron-up"
                              onClick={() => setIsOpen(false)}
                        ></i>
                  </div>

                  <div className="infobox__textbox">
                        <span
                              className={
                                    location.pathname === '/a_propos'
                                          ? 'infobox__text'
                                          : 'infobox__text infobox__text--logement'
                              }
                        >
                              {text}
                        </span>
                  </div>
            </div>
      ) : (
            <div
                  className={
                        location.pathname === '/a_propos'
                              ? 'infobox'
                              : 'infobox infobox--logement'
                  }
            >
                  <div className="infobox__head">
                        <h2
                              className={
                                    location.pathname === '/a_propos'
                                          ? 'infobox__title'
                                          : 'infobox__title infobox__title--logement'
                              }
                        >
                              {title}
                        </h2>
                        <i
                              className="infobox__button fa-solid fa-chevron-down"
                              onClick={() => setIsOpen(true)}
                        ></i>
                  </div>
            </div>
      );
}

export default Infobox;
