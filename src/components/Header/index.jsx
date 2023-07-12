import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.svg';
import '../../styles/header.css';

function Header() {
      return (
            <header className="header">
                  <img src={logo} alt="KASA logo" className="header__logo" />
                  <nav>
                        <Link
                              to="/"
                              className="header__link header__link--accueil"
                        >
                              Accueil
                        </Link>
                        <Link
                              to="/a_propos"
                              className="header__link header__link--apropos"
                        >
                              A Propos
                        </Link>
                  </nav>
            </header>
      );
}

export default Header;
