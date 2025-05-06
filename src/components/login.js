import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/images/hero-logo.png';
import './login.css';

export default function LoginSignupPage() {
  const navigate = useNavigate();

  // 🔐 Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👁️ Toggle visibility

  // 🔐 Handle login logic
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('userName', result.user.name);
        navigate('/');
      } else {
        alert(result.msg || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-bg">
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

          {/* 🔐 Login Form */}
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="login-btn" type="submit">Login</button>
          </form>

          {/* OR Divider */}
          <div className="login-divider">OR</div>

          {/* 🔗 Social Login Buttons */}
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

          {/* Footer */}
          <p className="login-footer">
            Don't have an account?{' '}
            <span className="signup-link" onClick={() => navigate('/signup')}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
