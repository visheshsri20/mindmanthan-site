import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './ContentSecond.css';

const services = [
  {
    title: "Website Development",
    description: `Custom Web Design and Development, E-commerce Solutions, CMS Development, Web Application Development, PWAs, SPAs, Mobile-Responsive`,
    // icon: "💻",
  },
  {
    title: "Marketing",
    description: `SEO Optimization, Link Building, Technical SEO, Local SEO, Content Creation, PPC, Social Media Marketing`,
    // icon: "📈",
  },
  {
    title: "Custom Software Development",
    description: `CRM Solutions, ERP Systems, SaaS Development, API Integrations, Custom Modules & Plugins`,
    // icon: "⚙️",
  },
  {
    title: "Telesales CRM Solutions",
    description: `Call Center Integration, Lead Tracking, Sales Automation, Analytics, Workflow Tools`,
    // icon: "🧠",
  },
];

function ContentSecond() {
  return (
    <section className="content-second">
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <TypeAnimation
              sequence={[service.title, 1000]}
              wrapper="h3"
              className="service-title"
              speed={50}
              repeat={0}
              cursor={false}
            />
            <p>{service.description}</p>
            <a href="#readmore" className="read-more">➕ Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentSecond;
