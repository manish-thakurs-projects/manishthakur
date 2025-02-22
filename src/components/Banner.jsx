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
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
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
