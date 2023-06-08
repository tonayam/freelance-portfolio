import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import quantumOffice from '../../assets/quantum-office.png';

const Home = () => {
  return (
    <main className='home-page'>
      <Navbar />
      {/* HEADER */}
      <header>
        <div className='img'>
          <img src={quantumOffice} alt='Quantum Office' />
        </div>
        <div className='mini'>
          <span>WEB DEVELOPMENT AGENCY</span>
        </div>
      </header>

      {/* FIRST SECTION */}
      {/* FIRST SECTION */}
      {/* FIRST SECTION */}
      {/* SELECTED WORKS */}
      <Footer />
    </main>
  );
};

export default Home;
