import React, {useEffect,useRef} from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaInstagram, FaBehance } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import letsCreate from '../../assets/lets-create.png';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



const Footer = () => {
  const bottomRef=useRef(null)
  useEffect(() => {
    gsap.utils.toArray('.item').forEach((child) => {
    gsap.fromTo(child, {
      opacity: 0,
      xPercent: -22,
    },{
      opacity:1,
      xPercent:0,
      duration:1,
      delay:0.5,
      scrollTrigger: {
        trigger: child,
        start: 'top 95%',
      },
    });})
    }, []);

  return (
    <footer className='footer'>
      <div className='top'>
        <div className='img'>
          <img src={letsCreate} alt="Let's Create" />
        </div>
        <h2>UNLEASHING THE POTENTIAL OF YOUR BRAND</h2>
        <button className='white'>
          GET IN TOUCH <BsArrowUpRight />
        </button>
      </div>

      <div className='line'></div>

      <div ref={bottomRef} className='bottom'>
        <div className='box'>
          <div className='logo'></div>
          <div className='socials'>
            <div className='item insta'>
              <div className='icon'>
                <FaInstagram />
              </div>
              <span>Instagram</span>
            </div>
            <div className='item twitter'>
              <div className='icon'>
                <FiTwitter />
              </div>
              <span>Twitter</span>
            </div>
            <div className='item behance'>
              <div className='icon'>
                <FaBehance />
              </div>
              <span>Behance</span>
            </div>
          </div>
        </div>

        <div className='box'></div>

        <div className='box'></div>

        <div className='box'></div>
      </div>
    </footer>
  );
};

export default Footer;
