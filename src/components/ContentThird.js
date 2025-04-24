import React, { useEffect, useRef, useState } from 'react';
import './ContentThird.css';
import bgGif from '../assets/Gifs/contentthird-bg.gif';
import reason1 from '../assets/images/reason1.png';
import reason2 from '../assets/images/reason2.png';
import reason3 from '../assets/images/reason3.png';
import CountUp from 'react-countup';
import heroLogo from '../assets/images/hero-logo.png'; 

function ContentThird() {
  const cardsRef = useRef([]);
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === statsRef.current && entry.isIntersecting) {
            setStartCount(true);
          }

          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });

      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="content-third">
      

      {/* 🔹 Main Intro Section */}
      <div className="content-wrapper">
        <div className="content-text">
          <h5 className="section-subtitle">WHO WE ARE</h5>
          <h2 className="section-title">
            Highly Tailored IT Design, <br />
            Management, Support Services <br />
            & Professional Digital Marketing Services
          </h2>
          <p className="section-description">
            We offer a unique IT development & Digital Marketing Agency in India that can quickly grow your company and generate leads. We provide modern technologically based internet marketing services including SEM, affiliate marketing, PPC, SMM, and many more. These services have been created to increase ROI with much further investment while providing a relevant client base.
          </p>
        </div>

        <div className="content-image">
          <div className="image-stack">
            <div className="image large-gif">
              <img src={bgGif} alt="Team background" />
            </div>
          </div>
        </div>
      </div>

      {/* 💡 Reason to Choose Us Section */}
      <div className="reason-section">
        <p className="reason-subtitle">REASON TO CHOOSE US</p>
        <h2 className="reason-title">We provide truly prominent IT solutions.</h2>

        <div className="reason-grid">
          {[reason1, reason2, reason3].map((img, index) => (
            <div
              className="reason-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img
                src={img}
                alt={
                  index === 0
                    ? 'Information Management'
                    : index === 1
                    ? 'Database Security'
                    : 'Digital Marketing'
                }
              />
              <div className="card-text">
                {index === 0 && 'Information management system'}
                {index === 1 && 'Information Database Security'}
                {index === 2 && 'Digital Marketing & Web Media'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 Client Stats Section */}
      <div className="client-stats-section" ref={statsRef}>
        <div className="client-heading">
          <h2 className="client-title">
            Our Web Development <span className="highlight">Clients</span>
          </h2>
          <p className="client-subtitle">
            Our custom dev services are trusted software companies, small businesses,
            and Fortune 500 companies alike.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="count">
              <CountUp start={0} end={210} duration={2} delay={0} enableScrollSpy scrollSpyOnce {...(startCount ? {} : { end: 0 })} />
            </div>
            <h3>Website Development</h3>
            <p>
              Our web development team builds dozens of websites monthly,
              integrating the right technology stack with cross platform applications
              for the best possible user experience to your web apps.
            </p>
          </div>

          <div className="stat-card">
            <div className="count">
              <CountUp start={0} end={156} duration={2} delay={0.3} enableScrollSpy scrollSpyOnce {...(startCount ? {} : { end: 0 })} />
            </div>
            <h3>Mobile App Development</h3>
            <p>
              Over 150 custom developed, including one mobile app (with 3M+ downloads)
              for Android & iOS
            </p>
          </div>

          <div className="stat-card">
            <div className="count">
              <CountUp start={0} end={24} duration={2} delay={0.5} enableScrollSpy scrollSpyOnce {...(startCount ? {} : { end: 0 })} />
            </div>
            <h3>Custom Platform Development</h3>
            <p>
              Custom developed corporate and customer-facing platform projects,
              including custom integrated analytics for analyzing site usage
              for big data consulting.
            </p>
          </div>
        </div>
      </div>
      {/* 🔥 Hero Section */}
      <div className="hero">
        <img src={heroLogo} alt="Hero Logo" className="hero-logo" />
        <h1>
          A Custom Software Development <br />
          Company Engineering
        </h1>
        <h2 className="highlight">Innovation</h2>
      </div>
    </section>
  );
}

export default ContentThird;
