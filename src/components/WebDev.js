import React from 'react';
import './WebDev.css';
import webdevGif from '../assets/Gifs/webdev.gif'; 
import { useEffect } from 'react';

const WebDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className="web-dev-page">
      {/* Hero Section */}
      <section className="hero-sec">
        <div className="hero-text">
          <h1>Web Development & Software Engineering</h1>
          <p>
            From next-gen startups to established enterprises, we offer comprehensive web development services that include website development, web design, digital marketing, and SEO. Our team of experienced web developers can help you create a website that meets your needs and exceeds your highest expectations.
          </p>
        </div>

        {/* Floating GIF on the right */}
        <div className="hero-floating-gif">
          {/* <img src={webdevGif} alt="Web Development Animation" /> */}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-used">
        <h2>Technologies & Tools We Use</h2>
        <p>We utilize the most modern and reliable technologies to build secure, scalable, and high-performance web solutions:</p>
        <ul>
        <li>
      <strong>Frontend:</strong> 
      <br />
      We create visually stunning and highly responsive interfaces using <strong>HTML5</strong> and <strong>CSS3</strong> for structure and styling, combined with powerful scripting via <strong>JavaScript</strong>. 
      Frameworks like <strong>React.js</strong>, <strong>Angular</strong>, and <strong>Vue.js</strong> allow us to build dynamic single-page applications (SPAs). We utilize UI libraries such as <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong> for rapid and consistent design across devices.
    </li>

    <li>
      <strong>Backend:</strong>
      <br />
      For the server-side, we leverage <strong>Node.js</strong> with <strong>Express.js</strong> for building lightweight, event-driven APIs, and use <strong>Django</strong> and <strong>Flask</strong> for scalable Python-based web backends. Our PHP projects use modern MVC frameworks like <strong>Laravel</strong>, and for startups and MVPs, we also use <strong>Ruby on Rails</strong> for quick deployment.
    </li>

    <li>
      <strong>Database:</strong>
      <br />
      We support both relational and non-relational databases depending on project needs. Our stack includes <strong>MongoDB</strong> for document-based NoSQL storage, <strong>MySQL</strong> and <strong>PostgreSQL</strong> for structured SQL-based data, and <strong>Firebase</strong> for real-time cloud-hosted backend services and authentication.
    </li>

    <li>
      <strong>Version Control:</strong>
      <br />
      We manage and track code changes using <strong>Git</strong>, with repositories hosted on <strong>GitHub</strong>, <strong>GitLab</strong>, or <strong>Bitbucket</strong>. This ensures efficient collaboration, CI/CD integrations, and traceable development workflows.
    </li>

    <li>
      <strong>Deployment & DevOps:</strong>
      <br />
      Our applications are deployed on reliable and scalable platforms such as <strong>Netlify</strong>, <strong>Vercel</strong>, <strong>Heroku</strong>, and <strong>AWS</strong>. We use <strong>Docker</strong> for containerization and environment consistency, and offer <strong>cPanel</strong> deployment for traditional hosting setups.
    </li>

    <li>
      <strong>CMS & E-Commerce:</strong>
      <br />
      We develop content-rich and easily manageable websites using <strong>WordPress</strong>, and build e-commerce platforms using <strong>Shopify</strong> and <strong>WooCommerce</strong>, with seamless integrations for payment gateways and inventory management.
    </li>

    <li>
      <strong>Others:</strong>
      <br />
      We build robust and scalable APIs using <strong>REST</strong> and <strong>GraphQL</strong>, enable real-time communication with <strong>WebSockets</strong>, and ensure secure user authentication with <strong>JWT (JSON Web Tokens)</strong>. We also integrate powerful tools for <strong>SEO</strong>, analytics, and marketing automation.
    </li>
        </ul>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="path_to_project_image.jpg" alt="Project Name" />
            <h3>Project Name</h3>
            <p>Brief description of the project highlighting key features and technologies used.</p>
          </div>
        </div>
      </section>

      {/* Critical Elements */}
      <section className="critical-elements">
        <h2>Elements of High-Performing, Custom Websites</h2>
        <ul>
  <li>
    <strong>High Search Visibility:</strong> 
    Our websites are meticulously optimized for search engines using best SEO practices including schema markup, meta tags, fast indexing, and mobile responsiveness. This helps your site rank higher in Google, Bing, and other search engines — making your business more discoverable by your target audience.
  </li>

  <li>
    <strong>Mobile-Friendly Design:</strong> 
    We develop fully responsive websites that adapt seamlessly to all screen sizes, including smartphones, tablets, and desktops. This ensures consistent user experience, reduced bounce rates, and improved engagement from mobile users who now make up the majority of web traffic.
  </li>

  <li>
    <strong>Secure Data Transmission:</strong> 
    Security is a top priority. We integrate SSL certificates, HTTPS protocols, data encryption, firewalls, and regular security audits to ensure your site is protected against threats, and your users' data is handled with the highest level of security and trust.
  </li>

  <li>
    <strong>Fast Loading Times:</strong> 
    Website speed plays a vital role in user satisfaction and SEO rankings. Our team uses performance optimization techniques such as code minification, lazy loading, CDN integration, and image compression to ensure lightning-fast loading on all devices.
  </li>

  <li>
    <strong>Clear Calls to Action (CTAs):</strong> 
    Every website we build includes strategically placed CTAs—like “Contact Us,” “Get a Quote,” or “Buy Now”—to encourage user interaction and drive conversions. These elements are designed with UX principles in mind to guide visitors naturally through your customer journey.
  </li>

  <li>
    <strong>Scalable Architecture:</strong> 
    Our web solutions are designed to grow with your business. Whether you're adding new pages, products, or features, our scalable back-end and modular front-end frameworks make expansion effortless and cost-effective.
  </li>

  <li>
    <strong>Analytics & Insights Integration:</strong> 
    We integrate tools like Google Analytics, Facebook Pixel, and custom dashboards so you can monitor traffic, track user behavior, and make data-driven decisions to improve engagement and ROI.
  </li>
</ul>

      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Let's Build the Future Together</h2>
        <p>Have a project in mind? We're just one call away. Let's connect and create something incredible.</p>
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
    </div>
  );
};

export default WebDevelopment;
