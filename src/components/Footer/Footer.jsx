import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaInstagram, FaBehance } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import letsCreate from '../../assets/lets-create.png';

const Footer = () => {
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

      <div className='bottom'>
        <div className='box'>
          <div className='logo'></div>
          <div className='socials'>
            <div className='item'>
              <div className='icon'>
                <FaInstagram />
              </div>
              <span>Instagram</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <FiTwitter />
              </div>
              <span>Twitter</span>
            </div>
            <div className='item'>
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
