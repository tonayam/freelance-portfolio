import React from 'react';
import { ourServices } from '../../data/data';
import { BsArrowUpRight } from 'react-icons/bs';

const OurServices = () => {
  return (
    <section className='our-services' id='our-services'>
      <div className='info'>
        <h2 className='title' data-splitting='heading'>
          OUR SERVICES
        </h2>
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
  );
};

export default OurServices;
