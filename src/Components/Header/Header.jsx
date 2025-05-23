import React, { Profiler } from 'react';
import './Header.css'; // Make sure this path is correct
import profileImage from './profile_img.png'; // Adjust the path to your image

const Header = () => {
  return (
    <section className="hero">
      <img src= {profileImage} alt="Krishna Garg" className="profile-img" />
      <h1>
        I'm <span className="highlight">Krishna Garg</span>,<br /> 
        Full stack developer
      </h1>
      <p>
        I am a full stack developer with experience in React, Node.js, Express, and MongoDB.
        I’ve built major projects like a food delivery app and worked as an intern at QBE Consulting.
      </p>
      <div className="hero-buttons">
        <a href="#" className="btn-outline">My resume</a>
      </div>
    </section>
  );
};

export default Header;
