import React from 'react';
import './Footer.css';
import logo from '../assets/images/hero-logo.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-left">
          <img src={logo} alt="Mind Manthan Logo" className="footer-logo" />
          <p className="footer-phone">📞 +91 7011502461</p>
          <p className="footer-email">📧 info.mindmanthan@gmail.com</p>
          <p className="footer-address">
            📍 Plot No-45, 3rd Floor, Sidharthi Enclave,<br />
            Mohan Garden, Dwarka Mor,<br />
            New Delhi - 110059, India
          </p>
          <p className="footer-copy">© 2024 Mind Manthan, All Rights Reserved</p>
        </div>

        {/* Footer Links Section */}
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Web Development</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Mobile Development</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Application Development</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">UX/UI Design</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Technology Architecture</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Software/IT Staffing</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">DevOps Services</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Quality Assurance Testing</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">MVP Development</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">SaaS Development</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">API Development</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Project Management</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Skills</h4>
            <ul>
              {['Java', 'JavaScript', 'Next.js', 'Node.js', 'React.js', 'HTML5', 'PHP', 'Python', 'C#/.NET', 'Webflow', 'iOS', 'Android', 'AWS', 'Wordpress', 'SQL', 'SQL Server'].map((skill, i) => (
                <li key={i}><a href="#" target="_blank" rel="noopener noreferrer">{skill}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Technology</h4>
            <ul>
              {['Artificial Intelligence', 'Cybersecurity', 'Robotic Process Automation', 'Blockchain (DLT)', 'Extended Reality (AR/VR)', 'ERP', 'CRM', 'Online Storage', 'Big Data', 'Business Intelligence', 'Internet of Things (IOT)'].map((tech, i) => (
                <li key={i}><a href="#" target="_blank" rel="noopener noreferrer">{tech}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Industries</h4>
            <ul>
              {['Enterprise', 'Government', 'Education', 'Small Business', 'Marketing', 'Finance', 'Healthcare', 'Agriculture', 'eCommerce'].map((industry, i) => (
                <li key={i}><a href="#" target="_blank" rel="noopener noreferrer">{industry}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
