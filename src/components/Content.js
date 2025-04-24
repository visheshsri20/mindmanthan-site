import React, { useEffect, useRef, useState } from 'react';
import './Content.css';
import unity from '../assets/images/unity.png';
import reactLogo from '../assets/images/react.png';
import node from '../assets/images/node.png';
import php from '../assets/images/php.png';
import python from '../assets/images/python.png';
import java from '../assets/images/java.png';

const logos = [unity, reactLogo, node, php, python, java];

function Content() {
  const cardsRef = useRef([]);
  const [logoStartIndex, setLogoStartIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1,
    });

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoStartIndex(prev => (prev + 3) % logos.length);
    }, 2500); // Change group every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [
    logos[logoStartIndex % logos.length],
    logos[(logoStartIndex + 1) % logos.length],
    logos[(logoStartIndex + 2) % logos.length],
  ];

  return (
    <div className="content">
      <section className="tech-logo-showcase">
        <h2>Web Development & Software Engineering</h2>
        <p>From next-gen startups to established enterprises.</p>
        <div className="logo-row">
          {visibleLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Tech Logo ${index}`}
              className="tech-logo"
            />
          ))}
        </div>
      </section>

      <section className="card left" ref={el => (cardsRef.current[0] = el)}>
        <div className="card-content">
          <h2>🚀 Welcome to Mind Manthan Software Solutions Pvt. Ltd.</h2>
          <p>At Mind Manthan, we specialize in delivering complete web and software solutions...</p>
        </div>
      </section>

      <section className="card right" ref={el => (cardsRef.current[1] = el)}>
        <div className="card-content">
          <h3>🔹 Our Expertise</h3>
          <ul>
            <li><strong>Web Development:</strong> Modern, responsive websites.</li>
            <li><strong>SEO:</strong> Boost your online visibility.</li>
            <li><strong>E-Commerce:</strong> Power your online store.</li>
            <li><strong>CRM Development:</strong> Enhance customer relationships.</li>
            <li><strong>Mobile Apps:</strong> Apps for iOS & Android.</li>
          </ul>
        </div>
      </section>

      <section className="card left" ref={el => (cardsRef.current[2] = el)}>
        <div className="card-content">
          <h3>🌐 Why Choose Us?</h3>
          <p>With a team of passionate tech enthusiasts, we blend creativity and technology...</p>
          <p>Let’s collaborate to create, innovate, and grow! 🌟</p>
        </div>
      </section>
    </div>
  );
}

export default Content;
