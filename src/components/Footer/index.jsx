import React from 'react';
import logoFooter from '../../assets/logos/logo-footer.svg';
import '../../styles/footer.css';

function Footer() {
      return (
            <footer className="footer">
                  <img
                        src={logoFooter}
                        alt="KASA logo"
                        className="footer__logo"
                  />
                  <p className="footer__text">
                        © 2020 Kasa. All rights reserved
                  </p>
            </footer>
      );
}

export default Footer;
