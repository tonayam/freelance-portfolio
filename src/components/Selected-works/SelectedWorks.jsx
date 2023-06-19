import React, { useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { projects } from '../../data/data';
import selectedWork from '../../assets/selected-work.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SelectedWorks = () => {
  useEffect(() => {
    gsap.utils.toArray(`.selected-work .info p`).forEach((info) => {
      gsap.timeline().fromTo(
        info,
        { opacity: 0, xPercent: -100 },
        {
          opacity: 1,
          xPercent: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: `.selected-work .info`,
          },
        }
      );
    });
  }, []);

  return (
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
            <div className='info ofh'>
              <h2 data-splitting='heading'>{projectName}</h2>
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
  );
};

export default SelectedWorks;
