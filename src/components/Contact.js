import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/ajax/info.mindmanthan@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Service: formData.service,
          Query: formData.query
        })
      });

      const data = await response.json();
      if (data.success === "true") {
        alert('Your query has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', service: '', query: '' });
      } else {
        alert('Failed to send. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>
            Thanks for your interest in Mind Manthan. Fill in the form below and we’ll connect you with the right person.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="service"
            list="services"
            placeholder="Service You're Interested In"
            value={formData.service}
            onChange={handleChange}
            required
          />
          <datalist id="services">
            <option value="Web Development" />
            <option value="Mobile App Development" />
            <option value="UI/UX Design" />
            <option value="Digital Marketing" />
            <option value="SEO Optimization" />
            <option value="Software Consulting" />
            <option value="Other" />
          </datalist>

          <textarea
            name="query"
            placeholder="Your Query"
            rows="6"
            value={formData.query}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Send a Message</button>
        </form>
      </div>

      {/* Additional Support Section */}
      <div className="contact-info-box">
        <h2>Additional Support Channels</h2>
        <p><span className="contact-icon">📞</span> +91 7011502461</p>
        <p><span className="contact-icon">📧</span> info.mindmanthan@gmail.com</p>
        <p>
          <span className="contact-icon">📍</span>
          Plot No-45, 3rd Floor, Sidharthi Enclave,<br />
          Mohan Garden, Dwarka Mor,<br />
          New Delhi – 110059, India
        </p>
      </div>
    </>
  );
}

export default Contact;
