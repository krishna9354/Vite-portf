import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            About <span className="highlight-bg">me</span>
          </h2>
          <p>
           I am a Frontend Developer specializing in React, with 1 year of professional experience and 6 months of ongoing backend development experience using Node.js and Express. Currently, I am working as a Full Stack Developer Intern at QBE Consulting, where I contribute to building scalable and efficient web applications for real-world clients. As a BCA graduate, I blend strong academic knowledge with hands-on experience to deliver seamless user interfaces and robust backend solutions. I am passionate about expanding my skills and creating impactful digital experiences through modern technologies.
          </p>
          <p>
            My passion for frontend development is not only reflected in my extensive experience but also in the
            enthusiasm and dedication I bring to each project.
          </p>

          <div className="skills">
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="progress-bar html-css"></div>
            </div>
            <div className="skill">
              <span>React JS</span>
              <div className="progress-bar react-js"></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress-bar javascript"></div>
            </div>
            <div className="skill">
              <span>Node JS</span>
              <div className="progress-bar node-js"></div>
            </div>
            <div className="skill">
              <span>SQL</span>
              <div className="progress-bar SQL"></div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <h3><span className="highlight-text">1+</span></h3>
            <p>Year of Experience</p>
          </div>
          <div className="stat-box">
            <h3><span className="highlight-text">3+</span></h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3><span className="highlight-text">1+</span></h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
