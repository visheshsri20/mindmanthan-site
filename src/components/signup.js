import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import backgroundImage from '../assets/images/contentthird-background.jpg';
import logo from '../assets/images/hero-logo.png';
import './signup.css';

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <div
      className="signup-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="signup-navbar">
        <img src={logo} alt="Company Logo" className="signup-nav-logo" />
        <div className="signup-nav-buttons">
          <button onClick={() => navigate(-1)} className="signup-nav-btn">⬅ Back</button>
          <button onClick={() => navigate('/')} className="signup-nav-btn">🏠 Home</button>
        </div>
      </div>

      <div className="signup-card">
        <h2 className="signup-title">Create Account 👤</h2>
        <p className="signup-subtitle">Sign up to get started with Mind Manthan</p>

        <form className="signup-form">
          <input type="text" placeholder="First Name *" required />
          <input type="text" placeholder="Middle Name (Optional)" />
          <input type="text" placeholder="Surname *" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Create Password" required />
          <button className="signup-btn">Register</button>
        </form>

        <div className="signup-divider">OR</div>

        <div className="signup-social">
          <button className="signup-social-btn google">
            <FcGoogle size={20} /> Sign up with Google
          </button>
          <button className="signup-social-btn twitter">
            <FaTwitter size={18} /> Sign up with Twitter
          </button>
          <button className="signup-social-btn facebook">
            <FaFacebookF size={18} /> Sign up with Facebook
          </button>
        </div>

        <p className="signup-footer">
          Already have an account? <span className="signup-link" onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
}
