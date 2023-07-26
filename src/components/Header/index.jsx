import React from 'react';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logos/logo.svg';
import '../../styles/component-styles/header.css';

function Header() {
      const location = useLocation();
      return (
            <header className="header">
                  <img src={logo} alt="KASA logo" className="header__logo" />
                  <nav className="header__nav">
                        <Link
                              to="/"
                              className={
                                    location.pathname === '/'
                                          ? 'header__link header__link--accueil header__link--active'
                                          : 'header__link header__link--accueil'
                              }
                        >
                              Accueil
                        </Link>
                        <Link
                              to="/a_propos"
                              className={
                                    location.pathname === '/a_propos'
                                          ? 'header__link header__link--active'
                                          : 'header__link'
                              }
                        >
                              A Propos
                        </Link>
                  </nav>
            </header>
      );
}

export default Header;
