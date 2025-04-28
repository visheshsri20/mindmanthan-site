// src/components/Body.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Body.css';
import { useEffect } from 'react';

function Body() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="main-content">
      <section className="hero-section">
        <TypeAnimation
          sequence={[
            'Welcome to Mind Manthan',
            1000, // Wait time
          ]}
          wrapper="h1"
          cursor={true}
          repeat={0}
          className="hero-title"
        />
        
        <p className="hero-subtitle">
          We design, develop & deploy across the tech stack, maximizing your software development project team with expert technical talent. Get in touch regarding your next software or web development project!
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Contact Us</button>
          <button className="secondary-btn">Learn More ➜</button>
        </div>
      </section>
    </main>
  );
}

export default Body;
