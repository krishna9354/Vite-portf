import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Kris<span className="dot">.</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <a href="#" className="btn-gradient">Connect With Me</a>
    </nav>
  );
};

export default Navbar;