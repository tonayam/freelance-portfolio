import React, { useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className='navbar'>
      <div className='logo'></div>
      <div className={`links ${showNav ? `show` : null}`}>
        <ul>
          <li>Work</li>
          <li>Services</li>
          <li>About</li>
        </ul>
        <button className='black'>Let's create</button>
      </div>
      <div className='hamburger' onClick={() => setShowNav(!showNav)}>
        <span className={showNav ? `clicked` : null}></span>
      </div>
    </nav>
  );
};

export default Navbar;
