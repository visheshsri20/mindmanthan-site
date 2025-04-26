import React, { useEffect } from 'react';
import './About.css';
import backgroundImage from '../assets/images/contentthird-background.jpg';
import heroLogo from '../assets/images/hero-logo.png';

const About = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <img src={heroLogo} alt="Hero Logo" className="hero-logo" />
        
        <h1>About Mind Manthan Software Solutions</h1>
        <p>
          We are a next-generation IT company delivering transformative technology solutions for businesses across the globe.
        </p>
      </section>

      <section className="about-section">
        <h2> Empowering Businesses to Innovate and Thrive with World-Class Tech Solutions</h2>
        <p>
        At Mind Manthan Software Solutions, we are more than just a development company—we are your digital growth partner. We specialize in providing cutting-edge IT development and digital marketing services that are designed to transform your business, generate qualified leads, and maximize return on investment.

        As a leading IT and digital marketing agency in India, our approach blends creativity, strategy, and advanced technology to deliver exceptional results. Whether you're a startup looking to build your online presence or an established enterprise aiming to scale, we have tailored solutions that drive measurable success.

        Our comprehensive suite of services includes:

        <ul>
  <li> Search Engine Marketing (SEM)</li>
  <li> Pay-Per-Click (PPC) Campaigns</li>
  <li>Social Media Marketing (SMM)</li>
  <li>Affiliate Marketing Programs</li>
  <li>Custom CRM/ERP Solutions</li>
  <li>Website & Application Development</li>
</ul>
        We don’t just help businesses go digital—we help them lead the digital landscape. With a focus on ROI-driven results and sustained growth, our team ensures that every strategy is crafted to attract relevant audiences, boost visibility, and deliver long-term value.

        Let’s work together to build, market, and scale your vision for the future.</p>
      </section>

      <section className="about-section1">
        <h2>Who We Are</h2>
        <p>
        Mind Manthan is a dynamic team of engineers, software developers, UI/UX designers, and digital strategists united by a shared passion for technology and innovation. With a commitment to excellence, we specialize in delivering reliable, scalable, and user-centric digital products that empower businesses to thrive in the digital age. Our multidisciplinary expertise allows us to approach every project with precision, agility, and creativity, ensuring tailored solutions that align with our clients' unique objectives. At Mind Manthan, we don't just build software—we architect digital ecosystems designed for performance, growth, and long-term value.</p>
      </section>

      <section className="about-section2">
  <h2 className="section-title">What We Offer</h2>
  <p className="section-intro">
    At Mind Manthan Software Solutions, we deliver innovative, scalable, and secure technology services tailored to meet the evolving demands of modern businesses. Our offerings are designed to boost digital presence, optimize operations, and drive long-term success for startups, SMEs, and large enterprises alike.
  </p>

  <ul className="offer-list">
    <li> <strong>Website Design & Development:</strong> From dynamic business sites to custom portals, we create responsive, SEO-friendly websites tailored to your brand identity.</li>

    <li> <strong>Mobile App Development:</strong> We design feature-rich Android and iOS apps with seamless UI/UX, native or cross-platform, ensuring performance and reliability.</li>

    <li> <strong>CRM & ERP Solutions:</strong> Automate and streamline your business processes with our tailored CRM and ERP systems, developed to enhance productivity and customer satisfaction.</li>

    <li> <strong>Search Engine Optimization (SEO):</strong> Our comprehensive SEO strategies increase your online visibility, attract qualified traffic, and improve search engine rankings.</li>

    <li> <strong>Digital Marketing & Branding:</strong> We craft compelling digital campaigns across social media, email, and search engines to help your business connect, engage, and convert.</li>

    <li> <strong>Custom Software & Cloud Solutions:</strong> Whether it's cloud-based applications or enterprise software, we build scalable, secure systems that align with your strategic goals.</li>
  </ul>

  <p className="section-footer">
    Whether you are launching a new digital product or looking to revamp your existing infrastructure, Mind Manthan is your reliable technology partner. Let us transform your ideas into high-impact digital solutions.
  </p>
</section>


<section className="about-section3">
  <h2>Why Choose Us?</h2>
  <ul className="why-choose-list">
    <li>
      <strong>Client-Focused Development:</strong> 
      <br />
      We tailor every solution to your business goals, ensuring a collaborative approach that puts your vision at the center of every decision we make.
    </li>

    <li>
      <strong>Modern, Responsive Designs:</strong> 
      <br />
      Our UI/UX designs are sleek, interactive, and optimized across all devices — providing seamless experiences on desktop, tablet, and mobile.
    </li>

    <li>
      <strong>Scalable, Secure Solutions:</strong> 
      <br />
      Whether you're a startup or an enterprise, we develop systems that grow with your business and adhere to the latest security standards and protocols.
    </li>

    <li>
      <strong>Agile Methodology with Transparent Process:</strong> 
      <br />
      We follow agile best practices and keep you in the loop at every stage — with frequent updates, real-time collaboration, and full process transparency.
    </li>

    <li>
       <strong>Timely Delivery & Dedicated Support:</strong> 
      <br />
      Deadlines matter. We commit to delivering your project on schedule with post-launch maintenance, performance monitoring, and priority support.
    </li>
  </ul>
</section>


<section className="about-footer">
  <h3>Let’s Build the Future Together</h3>
  <p>
    Have a project in mind? We’re just one call away. Let’s connect and create something incredible.
  </p>
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

export default About;
