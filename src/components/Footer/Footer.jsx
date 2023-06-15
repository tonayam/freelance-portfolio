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
  const bottom = bottomRef.current
  useEffect(() => {
  const twitter = document.querySelector('.twitter')
  const insta = document.querySelector('.insta')
  const behance = document.querySelector('.behance')
  const bottomDom = document.querySelector('.bottom')
        gsap.fromTo(insta, {
            opacity: 0,
            xPercent:-20,
            skewX:"10deg",
        },
            {
                opacity: 1,
                xPercent:0,
                delay:1,
                skewX:"0",
                duration: 1,
                scrollTrigger:{
                  trigger:bottom||bottomDom,
                  start:"top 80%",
                }
            })
        gsap.fromTo(twitter, {
            opacity: 0,
            xPercent:-20,
            skewX:"10deg",
        },
            {
                opacity: 1,
                xPercent:0,
                delay:1.2,
                skewX:"0",
                duration: 1,
                scrollTrigger:{
                  trigger:bottom||bottomDom,
                  start:"top 80%",
                }
            })
        gsap.fromTo(behance, {
            opacity: 0,
            xPercent:-20,
            skewX:"10deg",
        },
            {
                opacity: 1,
                xPercent:0,
                delay:1.4,
                skewX:"0",
                duration: 1,
                scrollTrigger:{
                  trigger:bottom||bottomDom,
                  start:"top 80%",
                }
            })
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
