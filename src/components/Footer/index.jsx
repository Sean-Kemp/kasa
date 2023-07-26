import React from 'react';
import { Link } from 'react-router-dom';
import logoFooter from '../../assets/logos/logo-footer.svg';
import '../../styles/component-styles/footer.css';

function Footer() {
      return (
            <footer className="footer">
                  <Link to="/">
                        <img
                              src={logoFooter}
                              alt="KASA logo"
                              className="footer__logo"
                        />
                  </Link>

                  <p className="footer__text">
                        © 2020 Kasa. All rights reserved
                  </p>
            </footer>
      );
}

export default Footer;
