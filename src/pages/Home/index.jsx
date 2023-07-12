import React from 'react';
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import '../../styles/home.css';
import bannerHome from '../../assets/banner/banner-home.png';

function Home() {
      return (
            <div className="home__container">
                  <Banner
                        image={bannerHome}
                        text="Chez vous, partout et ailleurs"
                  />
                  <Gallery />
            </div>
      );
}

export default Home;
