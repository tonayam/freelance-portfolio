import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import quantumOffice from '../../assets/quantum-office.png';
import selectedWork from '../../assets/selected-work.png';
import { BsArrowUpRight } from 'react-icons/bs';
import electricBikes from '../../assets/electric-bikes.png';
import { ourServices } from '../../data/data';

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

      {/* OUR SERVICES SECTION */}
      <section className='our-services'>
        <div className='info'>
          <h2 className='title'>OUR SERVICES</h2>
          <div className='services'>
            {ourServices.map((service, serviceIndex) => {
              const { btnLabel, info, link, title } = service;
              return (
                <div className='service' key={serviceIndex}>
                  <h3>{title}</h3>
                  <p>{info}</p>
                  <div className='circular-btn-with-label'>
                    <a
                      href={link}
                      target='_blank'
                      rel='noreferrer'
                      className='icon'
                    >
                      <BsArrowUpRight />
                    </a>
                    <span>{btnLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='img'></div>
      </section>

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
            <div className='circular-btn-with-label'>
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
            <div className='circular-btn-with-label'>
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
