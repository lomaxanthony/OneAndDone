import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">One&Done</h1>
      <nav>
        <ul className="navList">
          <li className="navItem"><a href="#home" className="navLink">Home</a></li>
          <li className="navItem"><a href="#about" className="navLink">About</a></li>
          <li className="navItem"><a href="#contact" className="navLink">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;