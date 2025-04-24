import React from 'react';
import './About.css';
import backgroundImage from '../assets/images/contentthird-background.jpg';
import heroLogo from '../assets/images/hero-logo.png';

const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <img src={heroLogo} alt="Hero Logo" className="hero-logo" />
        
        <h1>About Mind Manthan Software Solutions</h1>
        <p>
          We are a next-generation IT company delivering transformative technology solutions for businesses across the globe.
        </p>
      </section>

      <section className="about-section">
        <h2> Empowering Businesses to Innovate and Thrive with World-Class Tech Solutions</h2>
        <p>
        At Mind Manthan Software Solutions, we are more than just a development company—we are your digital growth partner. We specialize in providing cutting-edge IT development and digital marketing services that are designed to transform your business, generate qualified leads, and maximize return on investment.

As a leading IT and digital marketing agency in India, our approach blends creativity, strategy, and advanced technology to deliver exceptional results. Whether you're a startup looking to build your online presence or an established enterprise aiming to scale, we have tailored solutions that drive measurable success.

Our comprehensive suite of services includes:

    🚀 Search Engine Marketing (SEM)

    📢 Pay-Per-Click (PPC) Campaigns

    📱 Social Media Marketing (SMM)

    🤝 Affiliate Marketing Programs

    🧠 Custom CRM/ERP Solutions

    🌐 Website & Application Development
    

We don’t just help businesses go digital—we help them lead the digital landscape. With a focus on ROI-driven results and sustained growth, our team ensures that every strategy is crafted to attract relevant audiences, boost visibility, and deliver long-term value.

Let’s work together to build, market, and scale your vision for the future.</p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Mind Manthan is a team of engineers, developers, and strategists passionate about building reliable, scalable, and user-centric digital products.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Website Design & Development</li>
          <li>Mobile App Development</li>
          <li>CRM & ERP Solutions</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Digital Marketing & Branding</li>
          <li>Custom Software & Cloud Solutions</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Client-focused development</li>
          <li>Modern, responsive designs</li>
          <li>Scalable, secure solutions</li>
          <li>Agile methodology with transparent process</li>
          <li>Timely delivery & dedicated support</li>
        </ul>
      </section>

      <section className="about-footer">
        <h3>Let’s Build the Future Together</h3>
        <p>
          Have a project in mind? We’re just one call away. Let’s connect and create something incredible.
        </p>
        <p><strong>Email:</strong> info.mindmanthan@gmail.com</p>
        <p><strong>Phone:</strong> +91 7011502461</p>
      </section>
    </div>
  );
};

export default About;
