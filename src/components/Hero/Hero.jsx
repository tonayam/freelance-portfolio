import React, { useEffect, useRef } from 'react';
import heroVid from '../../assets/hero-video.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

  // ANIMATIONS
  const tl = gsap.timeline({
    defaults: {
      ease: `none`,
    },
    scrollTrigger: {
      trigger: `.offers`,
      start: `top 70%`,
      markers: true,
    },
  });

  useEffect(() => {
    gsap.utils.toArray(`.num`).forEach((num) => {
      tl.fromTo(
        num,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        0
      );
    });
    gsap.utils.toArray(`.type`).forEach((type) => {
      tl.fromTo(
        type,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        0
      );
    });
    // eslint-disable-next-line
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
          <div className='offer ofh'>
            <span className='num'>01</span>
            <span className='type'>BRANDING</span>
          </div>
          <div className='offer ofh'>
            <span className='num'>02</span>
            <span className='type'>CAMPAIGNS</span>
          </div>
          <div className='offer ofh'>
            <span className='num'>03</span>
            <span className='type'>E-COMMERCE</span>
          </div>
          <div className='offer ofh'>
            <span className='num'>04</span>
            <span className='type'>SOCIAL MEDIA</span>
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
