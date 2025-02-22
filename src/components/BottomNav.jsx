import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/bottomnav.css";
import { FaGear } from "react-icons/fa6";
import { FaFolder, FaHome, FaInfo, FaRocketchat } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const BottomNav = () => {
  const [showSettings, setShowSettings] = useState(false);
  const settingsRef = useRef(null);

  // Close settings when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bottom-nav">
      <div className="nav">
        <div className="primary-nav">
          <div className="links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              title="Home"
            >
              <i className="icon">
                <span className="label">
                  <FaHome />
                </span>
                <span className="name">HOME</span>
              </i>
            </NavLink>

            <NavLink
              to="/chat"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              title="Chat"
            >
              <i className="icon">
                <span className="label">
                  <FaRocketchat />
                </span>
                <span className="name">CHAT</span>
              </i>
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              title="Portfolio"
            >
              <i className="icon">
                <span className="label">
                  <FaFolder />
                </span>
                <span className="name">PORTFOLIO</span>
              </i>
            </NavLink>

            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              title="Team"
            >
              <i className="icon">
                <span className="label">
                  <IoPeopleSharp />
                </span>
                <span className="name">TEAM</span>
              </i>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              title="About"
            >
              <i className="icon">
                <span className="label">
                  <FaInfo />
                </span>
                <span className="name">ABOUT</span>
              </i>
            </NavLink>

            <div
              className="nav-item settings-trigger"
              onClick={() => setShowSettings(!showSettings)}
              title="Settings"
            >
              <i className="icon">
                <span
                  className={`label gear-icon ${showSettings ? "rotate" : ""}`}
                >
                  <FaGear />
                </span>
                <span className="name">SETTINGS</span>
              </i>
            </div>
          </div>
        </div>

        <div
          className={`secondary-nav ${showSettings ? "active" : ""}`}
          ref={settingsRef}
        >
          <div className="settings-header">
            Settings
            <button
              className="close-btn"
              onClick={() => setShowSettings(false)}
              title="Close Settings"
            >
              &times;
            </button>
          </div>
          <div className="settings-content">
            <div className="setting-item">
              <span>Theme</span>
              <ThemeToggle />
            </div>
            <div className="setting-item">
              <span>Join for exclusive content</span>
              <Link to="/join" className="profile">
                <div>
                  <CgProfile />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
