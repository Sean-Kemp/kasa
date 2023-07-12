import { Link } from 'react-router-dom';
import '../../styles/nopage.css';

function NoPage() {
      return (
            <div className="nopage__container">
                  <p className="nopage__code">404</p>
                  <p className="nopage__message">
                        Oups! La page que vous demandez n'existe pas.
                  </p>
                  <Link to="/" className="nopage__link">
                        Retourner sur la page d'accueil
                  </Link>
            </div>
      );
}

export default NoPage;
