import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Content from './components/Content';
import ContentSecond from './components/ContentSecond';
import ContentThird from './components/ContentThird';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import LoginSignupPage from './components/login';
import SignupPage from './components/signup';
import About from './components/About';
import WebDevelopment from './components/WebDev';

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Route */}
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

        {/* Web Development Service Page */}
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

        {/* Login & Signup */}
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </Router>
  );
}

export default App;
