import React from 'react';
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="container">
      <div className="header">
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
