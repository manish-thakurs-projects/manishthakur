import React from "react";
import "../styles/Footer.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <section className="footer">
      <div className="footer-row">
        {/* Info Section */}
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Compressions</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Collection</a></li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><a href="#">Free Designs</a></li>
            <li><a href="#">Latest Designs</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Popular Designs</a></li>
            <li><a href="#">Art Skills</a></li>
            <li><a href="#">New Uploads</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Icons */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose of news, updates,
            helpful tips, and exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
        <div className="top"  onClick={scrollToTop}>

<span className="back-to-top">
  <FaArrowUp/>
</span>
</div>
</>
  );
};

export default Footer;
