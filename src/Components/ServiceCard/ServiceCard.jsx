import React from 'react';
import './ServiceCard.css';

const services = [
  {
    title: 'Frontend Development',
    icon: '🖥️',
    description: 'Building responsive and interactive user interfaces using React.js, HTML, CSS, JavaScript, and Bootstrap.',
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    description: 'Creating robust REST APIs using Node.js, Express.js, and handling business logic and authentication securely.',
  },
  {
    title: 'Database Management',
    icon: '🗄️',
    description: 'Designing and managing databases using SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) technologies.',
  },
  {
    title: 'Deployment & DevOps',
    icon: '🚀',
    description: 'Deploying web applications on platforms like Vercel, Netlify, or using Docker and cloud services like AWS.',
  },
];

export default function Services() {
  return (
    <div className="services-section">
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
