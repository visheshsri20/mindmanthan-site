// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Main Sections for Home Page
import Body from './components/Body';
import Content from './components/Content';
import ContentSecond from './components/ContentSecond';
import ContentThird from './components/ContentThird';
import FAQ from './components/FAQ';

// Pages
import About from './components/About';
import Contact from './components/Contact';
import WebDevelopment from './components/WebDev';
import LoginSignupPage from './components/login';
import SignupPage from './components/signup';

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Body />
              <Content />
              <ContentSecond />
              <ContentThird />
              <FAQ />
              <Footer />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Web Development Services Page */}
        <Route
          path="/services/web-development"
          element={
            <>
              <Header />
              <WebDevelopment />
              <Footer />
            </>
          }
        />

        {/* Authentication Pages */}
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </Router>
  );
}

export default App;
