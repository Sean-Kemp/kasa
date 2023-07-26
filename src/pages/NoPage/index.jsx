import { Link } from 'react-router-dom';
import '../../styles/page-styles/nopage.css';
import '../../styles/general-styles/page-layout.css';

function NoPage() {
      return (
            <main className="main">
                  <p className="nopage__code">404</p>
                  <p className="nopage__message">
                        Oups! La page que vous demandez n'existe pas.
                  </p>
                  <Link to="/" className="nopage__link">
                        Retourner sur la page d'accueil
                  </Link>
            </main>
      );
}

export default NoPage;
