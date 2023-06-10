import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import quantumOffice from '../../assets/quantum-office.png';
import selectedWork from '../../assets/selected-work.png';
import { BsArrowUpRight } from 'react-icons/bs';
import electricBikes from '../../assets/electric-bikes.png';
import { ourServices, projects } from '../../data/data';

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

      {/* HERO SECTION */}
      <section className='hero'>
        <div className='info'>
          <h1>UNLEASHING YOUR BRAND'S POTENTIAL</h1>
          <p>
            Comprehensive branding solutions that help fashion, lifestyle, and
            luxury brands connect with their target audience.
          </p>
          <div className='offers'>
            <div className='offer'>
              <span>01</span>
              <span>BRANDING</span>
            </div>
            <div className='offer'>
              <span>02</span>
              <span>CAMPAIGNS</span>
            </div>
            <div className='offer'>
              <span>03</span>
              <span>E-COMMERCE</span>
            </div>
            <div className='offer'>
              <span>04</span>
              <span>SOCIAL MEDIA</span>
            </div>
          </div>
        </div>
        <div className='img'></div>
      </section>
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
        {projects.map((project, projectIndex) => {
          const {
            projectClass,
            projectDesc,
            projectImage,
            projectLink,
            projectName,
          } = project;
          return (
            <div className={`project ${projectClass}`} key={projectIndex}>
              <div className='imgs'>
                <div className='img'>
                  <img src={projectImage} alt={projectName} />
                </div>
              </div>
              <div className='info'>
                <h2>{projectName}</h2>
                <p>{projectDesc}</p>
                <div className='circular-btn-with-label'>
                  <a
                    href={projectLink}
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
          );
        })}
      </section>
      <Footer />
    </main>
  );
};

export default Home;
