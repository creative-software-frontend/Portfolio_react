import { useState, useEffect } from "react";
import profilePhoto from "../assets/photo.png";

const roles = [
  "Web Designer",
  "Frontend Developer",
  "Software Engineer",
  "ICT Specialist",
];

function Hero({ onTalkClick }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true);
      }, 300); // duration matching text transition
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 >
          <span className="hero-title"> Mohammad </span> 
          <span className="hero-name">Dilouar Hossain</span>
        </h1>

        <div className="typing-container">
          <span className="typing-static">— I am a </span>
          <span className={`typing-dynamic ${fade ? "fade-in" : "fade-out"}`}>
            {roles[roleIndex]}
          </span>
        </div>

        <p className="hero-description">
          🚀 Turning ideas into <strong>Stunning Websites</strong> 💻
          <br />
          <span className="sub-description">
            | Available for projects and collaborations 🌟
          </span>
        </p>

        <div className="hero-buttons">
          <button
            type="button"
            className="primary-button say-hello-btn"
            onClick={onTalkClick}
          >
            Say Hello <span className="btn-icon">✈</span>
          </button>

          <a href="/cv.pdf" download className="secondary-button download-cv-btn">
            Download CV <span className="btn-icon">⤓</span>
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="circular-image-container">
          <img src={profilePhoto} alt="Mohammad Dilouar Hossain" className="circular-photo" />

          {/* Floating Badges */}
          <div className="badge badge-top-right">
            <span className="badge-icon">✓</span>
            <div className="badge-text">
              <strong>125+</strong>
              <small>PROBLEM SOLVED</small>
            </div>
          </div>

          <div className="badge badge-left">
            <span className="badge-icon">💼</span>
            <div className="badge-text">
              <strong>B.Sc. CSE</strong>
              <small>EDUCATION</small>
            </div>
          </div>

          <div className="badge badge-bottom-right">
            <span className="badge-icon">🚀</span>
            <div className="badge-text">
              <strong>7+</strong>
              <small>PROJECTS COMPLETED</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;