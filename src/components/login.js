import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import backgroundImage from '../assets/images/contentthird-background.jpg';
import logo from '../assets/images/hero-logo.png';
import './login.css';

export default function LoginSignupPage() {
  const navigate = useNavigate();

  return (
    <div
      className="login-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 🔹 NAVIGATION BAR */}
      <div className="login-navbar">
        <img src={logo} alt="Company Logo" className="login-nav-logo" />
        <div className="login-nav-buttons">
          <button onClick={() => navigate(-1)} className="login-nav-btn">⬅ Back</button>
          <button onClick={() => navigate('/')} className="login-nav-btn">🏠 Home</button>
        </div>
      </div>

      {/* 🔹 LOGIN CARD */}
      <div className="login-card">
        <div className="p-6">
          <h2 className="login-title">Hey there👋</h2>
          <p className="login-subtitle">Sign in to continue or create a new account</p>

          <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Login</button>
          </form>

          <div className="login-divider">OR</div>

          <div className="login-social">
            <button className="login-social-btn google">
              <FcGoogle size={20} /> Continue with Google
            </button>
            <button className="login-social-btn twitter">
              <FaTwitter size={18} /> Continue with Twitter
            </button>
            <button className="login-social-btn facebook">
              <FaFacebookF size={18} /> Continue with Facebook
            </button>
          </div>

          <p className="login-footer">
            Don't have an account?{' '}
            <span className="signup-link" onClick={() => navigate('/signup')}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
