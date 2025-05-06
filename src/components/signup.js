import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/hero-logo.png';
import './signup.css';

export default function SignupPage() {
  const navigate = useNavigate();

  // 🔒 Handle signup form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // 🎯 Collect user input from form fields
    const userData = {
      firstName: form[0].value.trim(),
      middleName: form[1].value.trim(),
      surname: form[2].value.trim(),
      email: form[3].value.trim(),
      password: form[4].value.trim(),
    };

    try {
      // 📡 Send user data to backend API endpoint for signup
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST', // HTTP method: create new user
        headers: { 'Content-Type': 'application/json' }, // Sending JSON
        body: JSON.stringify(userData), // Convert user object to JSON
      });

      const result = await response.json(); // 📦 Parse backend response

      // ✅ If backend returns success
      if (response.ok) {
        alert('Signup successful!');
        navigate('/login'); // Redirect to login
      } else {
        // ❌ Show backend error message if signup failed
        alert(result.msg || 'Signup failed!');
      }
    } catch (error) {
      // ❗ Catch unexpected errors (e.g., network)
      console.error('Signup error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signup-bg">
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

        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name *" required />
          <input type="text" placeholder="Middle Name (Optional)" />
          <input type="text" placeholder="Surname *" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Create Password" required />
          <button type="submit" className="signup-btn">Register</button>
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
          Already have an account?{' '}
          <span className="signup-link" onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
}
