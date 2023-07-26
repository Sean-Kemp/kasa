import Infobox from '../../components/Infobox';
import Banner from '../../components/Banner';
import apropos from '../../data/apropos.json';
import '../../styles/page-styles/apropos.css';
import bannerAbout from '../../assets/banner/banner-about.png';
import '../../styles/general-styles/page-layout.css';

function APropos() {
      return (
            <main className="main">
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
            </main>
      );
}

export default APropos;
