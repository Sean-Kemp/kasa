import Infobox from '../../components/Infobox';
import Banner from '../../components/Banner';
import apropos from '../../data/apropos.json';
import '../../styles/apropos.css';
import bannerAbout from '../../assets/banner/banner-about.png';

function APropos() {
      return (
            <div className="apropos">
                  <Banner image={bannerAbout} />
                  <div className="apropos__list">
                        {apropos.map((apropos) => {
                              return (
                                    <Infobox
                                          key={`${apropos.title}-${apropos.index}`}
                                          title={`${apropos.title}`}
                                          text={`${apropos.text}`}
                                    />
                              );
                        })}
                  </div>
            </div>
      );
}

export default APropos;
