import React, { useEffect, useRef } from 'react';
import heroVid from '../../assets/hero-video.mp4';

const Hero = () => {
  // HANDLE REPLAY
  const videoRef = useRef(null);
  useEffect(() => {
    const handleVideoEnded = () => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    };
    videoRef.current.addEventListener('ended', handleVideoEnded);
    return () => {
      // eslint-disable-next-line
      videoRef.current.removeEventListener('ended', handleVideoEnded);
    };
  }, []);
  return (
    <section className='hero'>
      <div className='info'>
        <h1 data-splitting='heading'>UNLEASHING YOUR BRAND'S POTENTIAL</h1>
        <p data-splitting='paragraph'>
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
      <div className='vid'>
        <video
          ref={videoRef}
          src={heroVid}
          autoPlay={true}
          controls={false}
          muted={true}
        ></video>
      </div>
    </section>
  );
};

export default Hero;
