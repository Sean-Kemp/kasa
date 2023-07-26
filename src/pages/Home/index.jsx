import React from 'react';
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import '../../styles/page-styles/home.css';
import '../../styles/general-styles/page-layout.css';
import bannerHome from '../../assets/banner/banner-home.png';

function Home() {
      return (
            <main className="main">
                  <Banner
                        image={bannerHome}
                        text="Chez vous, partout et ailleurs"
                  />
                  <Gallery />
            </main>
      );
}

export default Home;
