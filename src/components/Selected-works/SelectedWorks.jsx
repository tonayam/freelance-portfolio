import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { projects } from '../../data/data';
import selectedWork from '../../assets/selected-work.png';

const SelectedWorks = () => {
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
            <div className='info'>
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
