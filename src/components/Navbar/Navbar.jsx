import React, { useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className='navbar'>
      <div className='logo'></div>
      <div className={`links ${showNav ? `show` : null}`}>
        <ul>
          <li onClick={() => setShowNav(false)}>
            <a href='#selected-work'>Work</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href='#our-services'>Services</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href='#hero'>About</a>
          </li>
        </ul>
        <button className='black'>
          <a href='mailto:estudiobrilliante@gmail.com'>Let's create</a>
        </button>
      </div>
      <div className='hamburger' onClick={() => setShowNav(!showNav)}>
        <span className={showNav ? `clicked` : null}></span>
      </div>
    </nav>
  );
};

export default Navbar;
