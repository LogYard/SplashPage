import React from 'react';
import './index.css';

const NavBar = () => {
  return (
    <nav className="bg-transparent h-24 content-center">
      <a href="https://github.com/oslabs-beta/LogYard" className='hover:cursor-pointer'>
        <img src="PageLogo.png" alt="" className="h-20 pt-4 mx-auto" />
      </a>
    </nav>
  );
};

export default NavBar;