import React, { useEffect } from "react";
import "../styles/banner.css";
import Content from "./Content";

const Banner = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "var(--background-color)";
  }, []);

  return (
    <div className="banner-container">
      <div className="perspective-wrapper">
        <img
          src="https://res.cloudinary.com/dgfmmttsi/image/upload/v1740230537/WhatsApp_Image_2025-02-22_at_13.21.36_3ef5d78d_lv1ddy.jpg"
          alt="Feature"
          className="hero-image"
        />
      </div>

      <div className="content-wrapper">
        <span className="animated-title">
          <span className="letter-container">manish thakur</span>
        </span>
        <p className="animated-subtitle">
          Designer | Developer | Active Learner
        </p>
        <div className="subtitle">
        <Content/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
