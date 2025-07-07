import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHandPointRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import profilePic from './assets/profile.jpg'; 

function App() {
  return (
    <div className="container">
      <div className="left">
        <img src={profilePic} alt="Profile" className="profile-pic large" />
        <section className="about-me">
          <h2>Eugen Bezedica</h2>
          <p>
            Hi! I'm Eugen, a passionate developer interested in IoT, data analytics, and building smart solutions. 
            I love working with web platforms, cloud solutions, and visualization tools to turn data into insights.
          </p>
        </section>
      </div>
      <div className="right">
        <section className="project">
          <h2>Latest Projects</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="bullet-icon" />
              <a 
                href="https://eggy-92.github.io/eugen-blog/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                A web app that tracks plant moisture using sensors, Kafka, and Power BI.
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="bullet-icon" />
              <a 
                href="https://github.com/Eggy-92/LIFESTYLE-ECOMMERCE-react" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                A React-based e-commerce app.
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="bullet-icon" />
              <a 
                href="https://github.com/Eggy-92/MYCARBLOGV2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Django-based web application for car enthusiasts to share and explore car-related projects and articles.
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="bullet-icon" />
              <a 
                href="https://github.com/Eggy-92/ecommerce-react-ts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Simple e-commerce application built with React, React Router, Context API, and Store API. 
              </a>
            </li>
          </ul>
        </section>
        <section className="CV">
          <h2>CV</h2>
          <div className="cv-links">
            <a href="/assets/cv-en.pdf" download target="_blank" rel="noopener noreferrer">English</a>
            <a href="/assets/cv-ro.pdf" download target="_blank" rel="noopener noreferrer">Romanian</a>
          </div>
        </section>
        <section className="contacts">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/bezedica/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/eugeniu__persic/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;