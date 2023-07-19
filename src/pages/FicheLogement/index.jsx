import Infobox from '../../components/Infobox';
import Carrousel from '../../components/Carrousel';
import Tag from '../../components/Tag';
import logements from '../../data/logement.json';
import { useParams } from 'react-router-dom';

function FicheLogement() {
      const { id } = useParams();
      const logement = logements.find((logement) => logement.id === id);
      const tags = logement.tags.map((tags, i) => {
            return <Tag key={i} tag={tags} />;
      });
      const equipments = logement.equipments.map((equipment, i) => {
            return (
                  <ul key={i}>
                        <li>{equipment}</li>
                  </ul>
            );
      });
      return (
            <div>
                  <Carrousel slides={logement.pictures} />
                  <div>
                        <h1>{`${logement.title}`}</h1>
                        <h2>{`${logement.location}`}</h2>
                        <div>{tags}</div>
                  </div>
                  <div>
                        <div>
                              <h3>{`${logement.host.name}`}</h3>
                              <img src={`${logement.host.picture}`} alt=" " />
                        </div>
                        <div>
                              <h3>RATING</h3>
                        </div>
                  </div>
                  <div>
                        <Infobox
                              title="Description"
                              text={logement.description}
                        />
                        <Infobox title="Equipements" text={equipments} />
                  </div>
            </div>
      );
}

export default FicheLogement;
