import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './ContentSecond.css';

const services = [
  {
    
      title: "Website Development",
      description: `Custom Web Design and Development, E-commerce Solutions, CMS Development, Web Application Development, PWAs, SPAs, Mobile-Responsive`,
      more: `At Mind Manthan, we specialize in building modern, high-performance websites that don’t just look stunning — they work seamlessly across all devices. Our development approach blends creativity, strategy, and technology to craft custom digital experiences tailored to your brand and goals.
    
    From visually engaging UI/UX designs to robust backend architecture, we engineer everything using the latest frameworks like React, Angular, and Next.js. Whether it's an interactive single-page application (SPA), a dynamic web portal, or a secure e-commerce platform, we ensure your site is fast, scalable, mobile-friendly, and SEO-optimized.
    
    We integrate CMS systems like WordPress, Strapi, or headless architectures to give you content flexibility and control. Progressive Web Apps (PWAs), real-time integrations, and cloud deployment are part of our core offerings — helping your business stand out and perform at scale in today’s digital ecosystem.`,
    
    
  },
  {
    title: "Marketing",
    description: `SEO Optimization, Link Building, Technical SEO, Local SEO, Content Creation, PPC, Social Media Marketing`,
    more: `Our digital marketing solutions are designed to drive measurable growth and lasting brand impact. At Mind Manthan, we combine creativity with performance-driven strategies to increase your visibility, attract qualified leads, and convert them into loyal customers.
  
  Our SEO experts implement both on-page and technical SEO tactics to boost your search rankings across Google and Bing. We design tailored link-building campaigns, optimize your local presence, and ensure your website architecture is search engine friendly from the ground up.
  
  Beyond SEO, we create compelling content strategies, manage high-ROI Pay-Per-Click (PPC) advertising, and run engaging social media campaigns across platforms like Instagram, LinkedIn, and YouTube. Each campaign is backed by deep analytics and A/B testing, ensuring maximum return on investment.
  
  Whether you're launching a new product, expanding to new markets, or simply looking to improve conversions, our integrated marketing team ensures your message reaches the right audience — at the right time — through the right channel.`,
  
  },
  {
    title: "Custom Software Development",
    description: `CRM Solutions, ERP Systems, SaaS Development, API Integrations, Custom Modules & Plugins`,
    more: `From ideation to deployment, we develop scalable, secure, and high-performing software solutions tailored to your unique business challenges. At Mind Manthan, our custom software services are engineered to streamline operations, enhance productivity, and deliver measurable results.
  
  Whether you need an enterprise-grade ERP system, a bespoke CRM platform, or a fully cloud-based SaaS product, our team ensures a seamless development lifecycle — from business analysis and system architecture to coding, testing, and deployment.
  
  We specialize in creating modular, API-first applications with intuitive interfaces and real-time data capabilities. Leveraging modern tech stacks and cloud platforms (AWS, Azure, GCP), we ensure your solution is not only robust but future-proof.
  
  Our agile development process, combined with continuous feedback loops, guarantees alignment with your evolving goals. Integration with third-party tools, data migration, and automation are all part of our end-to-end service, helping you digitize, optimize, and lead your industry with confidence.`,
  }
  ,
  {
    title: "Telesales CRM Solutions",
    description: `Call Center Integration, Lead Tracking, Sales Automation, Analytics, Workflow Tools`,
    more: `Empower your sales team with intelligent CRM solutions built specifically for high-volume telesales operations. At Mind Manthan, we design and deploy custom CRM systems that streamline your outreach process, enhance lead management, and drive real-time decision-making.
  
  Our solutions integrate seamlessly with your call center infrastructure, enabling features like auto-dialers, call recording, follow-up scheduling, and multi-channel communication (voice, SMS, WhatsApp, email). Sales reps benefit from smart lead scoring, automated task reminders, and unified dashboards that reduce manual work and maximize conversions.
  
  We embed powerful analytics and performance monitoring tools to give managers deep visibility into KPIs like call efficiency, sales pipeline status, and agent productivity. With customizable workflows and automation, your team spends less time on admin and more time closing deals.
  
  Whether you're scaling a startup sales team or optimizing an enterprise contact center, our CRM systems are designed to improve speed, accuracy, and accountability — helping you turn conversations into customers at scale.`,
  }
  ,
];

function ContentSecond() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="content-second">
      <div className="services-container">
        {expandedIndex === null ? (
          services.map((service, index) => (
            <div className="service-card" key={index}>
              <TypeAnimation
                sequence={[service.title, 1000]}
                wrapper="h3"
                className="service-title"
                speed={50}
                repeat={0}
                cursor={false}
              />
              <p>{service.description}</p>
              <button className="read-more" onClick={() => toggleExpand(index)}>
                ➕ Read More
              </button>
            </div>
          ))
        ) : (
          <div className="expanded-card">
            <h3 className="service-title">{services[expandedIndex].title}</h3>
            <p>{services[expandedIndex].description}</p>
            <p className="more-description">{services[expandedIndex].more}</p>
            <button className="read-more" onClick={() => toggleExpand(null)}>
              ➖ Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContentSecond;
