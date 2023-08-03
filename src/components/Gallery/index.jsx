import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../data/logement.json';
import Card from '../Card/index.jsx';
import '../../styles/component-styles/gallery.css';

function Gallery() {
      return (
            <div className="gallery">
                  {logements.map((logement) => {
                        //créer un card pour chaque logement dans la base de données
                        return (
                              <article key={logement.id}>
                                    <Link to={`/logement/${logement.id}`}>
                                          <Card
                                                cover={`${logement.cover}`}
                                                title={`${logement.title}`}
                                          />
                                    </Link>
                              </article>
                        );
                  })}
            </div>
      );
}

export default Gallery;
