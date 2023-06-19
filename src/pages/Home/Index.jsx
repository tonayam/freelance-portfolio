import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import agencyName from '../../assets/agency-name.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SelectedWorks from '../../components/Selected-works/SelectedWorks';
import OurServices from '../../components/Our-Services/OurServices';
import Hero from '../../components/Hero/Hero';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <main className='home-page'>
      <Navbar />
      {/* HEADER */}
      <header>
        <div className='img'>
          <img src={agencyName} alt='ESTUDIO BRILLANTE' />
        </div>
        <div className='mini'>
          <span>WEB DEVELOPMENT AGENCY</span>
        </div>
      </header>

      <Hero />
      <OurServices />
      <SelectedWorks />
      <Footer />
    </main>
  );
};

export default Home;
