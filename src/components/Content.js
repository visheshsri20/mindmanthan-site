import React, { useEffect, useRef, useState } from 'react';
import './Content.css';
import unity from '../assets/images/unity.png';
import reactLogo from '../assets/images/react.png';
import node from '../assets/images/node.png';
import php from '../assets/images/php.png';
import python from '../assets/images/python.png';
import java from '../assets/images/java.png';
import agenda from '../assets/images/Agenda.png';
import expertiseImg from '../assets/images/Expertise.png';
import whyImg from '../assets/images/Why.png';

const logos = [unity, reactLogo, node, php, python, java];

function Content() {
  const cardsRef = useRef([]);
  const [logoStartIndex, setLogoStartIndex] = useState(0);

  // Scroll-triggered animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Rotating logos animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoStartIndex(prev => (prev + 3) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [
    logos[logoStartIndex % logos.length],
    logos[(logoStartIndex + 1) % logos.length],
    logos[(logoStartIndex + 2) % logos.length],
  ];

  return (
    <div className="content">
      {/* Logo Showcase */}
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

      {/* Agenda Section */}
      <div className="agenda-container">
        <section className="card left" ref={el => (cardsRef.current[0] = el)}>
          <div className="card-content">
            <h2>Agenda @ Mind Manthan</h2>
            <p>
              At Mind Manthan IT Solutions, we specialize in delivering comprehensive web and software solutions tailored to meet the dynamic needs of businesses across industries.
              We offer a full spectrum of services ranging from custom website development, mobile application development, and e-commerce solutions to enterprise-grade software products.
              Our expertise spans across modern technologies such as Laravel, ReactJS, NodeJS, MongoDB, and PHP, ensuring highly scalable, secure, and performance-optimized solutions.
              We work closely with clients to understand their goals and deliver customized solutions that drive growth, improve operational efficiency, and enhance customer engagement.
              Whether you are a startup looking for a digital launchpad or an established enterprise seeking digital transformation, Mind Manthan is your trusted technology partner for end-to-end success.
            </p>
          </div>
        </section>

        <div className="agenda-image">
          <img src={agenda} alt="Mind Manthan Visual" className="draw-in" />
        </div>
      </div>

      {/* Our Expertise Section (Image on left) */}
      <div className="agenda-container">
        <div className="agenda-image">
          <img src={expertiseImg} alt="Expertise Visual" className="draw-in" />
        </div>

        <section className="expertise-card" ref={el => (cardsRef.current[1] = el)}>
          <div className="card-content">
            <h2>Our Expertise</h2>
            <ul>
              <li><strong>Web Development:</strong> Modern, responsive websites using ReactJS, NextJS, Laravel.</li>
              <li><strong>SEO Services:</strong> Boost organic traffic with advanced optimization techniques.</li>
              <li><strong>E-Commerce:</strong> Secure, scalable stores with seamless payment and inventory features.</li>
              <li><strong>CRM Development:</strong> Manage client relationships and workflows efficiently.</li>
              <li><strong>Mobile Apps:</strong> Cross-platform iOS and Android apps for performance and UX.</li>
              <li><strong>Software:</strong> ERP, automation, and tailored digital products.</li>
              <li><strong>Cloud:</strong> AWS, Azure, and GCP deployment, scaling, and maintenance.</li>
              <li><strong>UI/UX:</strong> Intuitive, visually appealing user interfaces.</li>
              <li><strong>Support:</strong> Continuous tech support, updates, and performance optimization.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Why Choose Us Section */}
      <div className="agenda-container">
        <section className="card left" ref={el => (cardsRef.current[2] = el)}>
          <div className="card-content">
            <h2>🌐 Why Choose Us?</h2>
            <p>
              With a team of passionate tech enthusiasts, we blend creativity, innovation, and cutting-edge technology to deliver digital solutions that drive real business impact.
              Our diverse expertise empowers us to turn complex ideas into scalable, user-friendly products aligned with your vision and goals.
            </p>
            <p>
              At Mind Manthan, we commit to quality, innovation, and transparent communication. Whether a startup or enterprise, we provide the tools and talent for your growth.
            </p>
            <p>
              Let’s collaborate to innovate and grow together! 🌟
            </p>
          </div>
        </section>

        <div className="agenda-image">
          <img src={whyImg} alt="Why Choose Us Visual" className="draw-in" />
        </div>
      </div>
    </div>
  );
}

export default Content;
