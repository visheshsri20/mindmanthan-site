import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What services does Mind Manthan provide?',
    answer:
      'Mind Manthan offers a wide range of services including custom web development, mobile app development, CRM and ERP solutions, and UI/UX design. Our team specializes in building scalable, secure, and performance-driven software tailored to your business goals. We also provide SaaS development, API integration, and software testing services. In addition, we support digital marketing strategies including SEO, PPC, and content marketing to help you grow online.',
  },
  {
    question: 'Do you offer support and maintenance?',
    answer:
      'Yes, we provide full support and maintenance even after the project is delivered. Our team ensures that your website or application remains updated, secure, and bug-free. We offer flexible support packages depending on your business requirements and technology stack. Whether it’s performance monitoring, upgrades, or quick bug fixes — we’re just a message away.',
  },
  {
    question: 'How do I request a consultation?',
    answer:
      'Requesting a consultation is easy and completely free. Simply head to our Contact section and fill out the form with your project details and preferred meeting times. You can also email us directly or call the provided phone number for faster scheduling. Once we receive your inquiry, a dedicated team member will get in touch with you within 24 hours.',
  },
  {
    question: 'Can I hire your team for long-term projects?',
    answer:
      'Absolutely! We specialize in forming long-term partnerships with startups, SMBs, and enterprises. Our dedicated team model allows you to scale your team as your project grows. You’ll get consistent communication, transparent timelines, and expert input throughout the lifecycle of the product. Whether it’s product evolution, MVP-to-scale, or ongoing upgrades — we’re your tech backbone.',
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
      
      <section className="about-footer">
    <h3>Let’s Build the Future Together</h3>
    <p>
      Have a project in mind? We’re just one call away. Let’s connect and create something incredible.
    </p>
    <p><strong>Email:</strong> info.mindmanthan@gmail.com</p>
    <p><strong>Phone:</strong> +91 7011502461</p>
  
    <form
      action="mailto:info.mindmanthan@gmail.com"
      method="POST"
      encType="text/plain"
      className="contact-form"
    >
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required placeholder="Your email" />
  
      <label htmlFor="message">Your Query:</label>
      <textarea name="message" id="message" rows="5" required placeholder="Write your query here..."></textarea>
  
      <button type="submit">Submit</button>
    </form>
  </section>
  </section>
 
  );
}

export default FAQ;
