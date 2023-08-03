import Infobox from '../../components/Infobox';
import Carrousel from '../../components/Carrousel';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import NoPage from '../NoPage';
import logements from '../../data/logement.json';
import { useParams } from 'react-router-dom';
import '../../styles/page-styles/fichelogement.css';
import '../../styles/general-styles/page-layout.css';

function FicheLogement() {
      const { id } = useParams();
      const logement = logements.find((logement) => logement.id === id);
      if (!logement) {
            return <NoPage />; // En cas de défaut de l'ID, renvoyer vers error page
      }
      const tags = logement.tags.map((tags, i) => {
            //Générer tags
            return <Tag key={i} tag={tags} />;
      });
      const equipments = logement.equipments.map((equipment, i) => {
            //Générer liste d'équipements
            return (
                  <li key={i} className="equipments__item">
                        {equipment}
                  </li>
            );
      });
      return (
            <main className="main">
                  <div className="logement__page">
                        <Carrousel slides={logement.pictures} />
                        <div className="logement__titlesection">
                              <div className="logement__titleleft">
                                    <h1 className="logement__title">{`${logement.title}`}</h1>
                                    <h2 className="logement__location">{`${logement.location}`}</h2>
                                    <div className="logement__tags">{tags}</div>
                              </div>
                              <div className="logement__titleright">
                                    <div className="host__container">
                                          <h3 className="host__name">{`${logement.host.name}`}</h3>
                                          <img
                                                src={`${logement.host.picture}`}
                                                alt=" "
                                                className="host__img"
                                          />
                                    </div>
                                    <Rating score={logement.rating} />
                              </div>
                        </div>

                        <div className="logement__infosection">
                              <Infobox
                                    title="Description"
                                    text={logement.description}
                              />
                              <Infobox
                                    title="Equipements"
                                    text={
                                          <ul className="equipments__list">
                                                {equipments}
                                          </ul>
                                    }
                              />
                        </div>
                  </div>
            </main>
      );
}

export default FicheLogement;
