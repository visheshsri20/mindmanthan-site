import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import { useEffect } from 'react';
import logo from '../assets/images/hero-logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="MindManthan Logo" className="logo-img" />
        </Link>

        {/* Nav Links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => navigate('/about')}>About</button>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <Link to="/services/web-development">Web Development</Link>
              <Link to="/services/app-development">App Development</Link>
              <Link to="/services/seo-marketing">SEO & Marketing</Link>
              <Link to="/services/crm-erp">CRM / ERP Solutions</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Skills</button>
            <div className="dropdown-content">
              <a href="#java">Java</a>
              <a href="#javascript">JavaScript</a>
              <a href="#reactjs">ReactJS</a>
              <a href="#android">Android</a>
              <a href="#php">PHP</a>
              <a href="#laravel">Laravel</a>
              <a href="#sql">SQL</a>
              <a href="#nodejs">Node.js</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Technology</button>
            <div className="dropdown-content">
              <a href="#ai">Artificial Intelligence</a>
              <a href="#crm">CRM</a>
              <a href="#erp">ERP</a>
              <a href="#storage">Online Storage</a>
              <a href="#bigdata">Big Data</a>
              <a href="#business">Business Management</a>
              <a href="#iot">Internet of Things (IoT)</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Industry</button>
            <div className="dropdown-content">
              <a href="#enterprise">Enterprise</a>
              <a href="#government">Government</a>
              <a href="#education">Education</a>
              <a href="#smallbusiness">Small Business</a>
              <a href="#marketing">Marketing</a>
              <a href="#finance">Finance</a>
              <a href="#healthcare">Health Care</a>
              <a href="#ecommerce">Ecommerce</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#ourwork">Our Work</a>
          </div>
        </nav>

        {/* Login / Signup */}
        <div className="auth-buttons">
          <button className="auth-btn login" onClick={() => navigate('/login')}>Login</button>
          <button className="auth-btn signup" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>

        {/* Burger Icon for Mobile */}
        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
