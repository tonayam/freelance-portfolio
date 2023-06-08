import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import quantumOffice from '../../assets/quantum-office.png';
import selectedWork from '../../assets/selected-work.png';
import { BsArrowUpRight } from 'react-icons/bs';
import electricBikes from '../../assets/electric-bikes.png';

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
      <section className='selected-work'>
        <div className='title'>
          <img src={selectedWork} alt='SELECTED WORK' />
        </div>

        {/* PROJECT */}
        <div className='project'>
          <div className='imgs'>
            <div className='img'>
              <img src={electricBikes} alt='electric bikes' />
            </div>
          </div>
          <div className='info'>
            <h2>ELECTRIC BIKES LAGOS</h2>
            <p>A Nigerian based e-commerce store that sells electric bikes</p>
            <div className='btn'>
              <a
                href='https://www.electricbikeslagos.com/'
                target='_blank'
                rel='noreferrer'
                className='icon'
              >
                <BsArrowUpRight />
              </a>
              <span>Visit Project</span>
            </div>
          </div>
        </div>

        {/* PROJECT */}
        <div className='project inverted'>
          <div className='imgs'>
            <div className='img'>
              <img src={electricBikes} alt='electric bikes homepage' />
            </div>
          </div>
          <div className='info'>
            <h2>AZURE</h2>
            <p>
              Website Redesign: Improving user experience and modernizing
              design.
            </p>
            <div className='btn'>
              <div className='icon'>
                <BsArrowUpRight />
              </div>
              <span>Visit Project</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
