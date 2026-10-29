import { useState } from 'react';

function Journey() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="journey" className="journey-section">
      <div className="journey-ribbon">
        <span>PROFESSIONAL JOURNEY</span>
      </div>

      <div className="journey-header">
        <p>Where I Started & Where I Am Going</p>

        <h2>
          My journey through <span>technology</span>
        </h2>
      </div>

      <div className={`journey-timeline-wrapper ${isExpanded ? 'expanded' : ''}`}>
        <div className="journey-timeline">

          <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-card">
              <span className="journey-year">Aug 2026 - Present</span>

              <h2>Chairman</h2>

              <h3>Golden Life Business Platform</h3>

              <p>
                Golden Life is a purpose-driven socio-economic initiative designed to empower youth through entrepreneurship, technology, and ethical business practices. It operates as a holistic ecosystem that combines a social movement with a practical digital business platform—creating real opportunities for sustainable income and long-term growth.
              <br /> 
            At its core, Golden Life focuses on Youth Economic Empowerment by enabling individuals and institutions to start, manage, and scale real businesses using modern digital tools. Rather than promoting commission-based or speculative models, Golden Life emphasizes transparency, skill development, and value-driven enterprise.
              </p>
            </div>
          </div>
        <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-card">
              <span className="journey-year">September 2025  — Present</span>

              <h2>Business Consultant</h2>

              <h3>0°  - Digital Marketing Venture</h3>

              <p>
              Development • Marketing • Investment • Supply Chain <br /><br />

        Digital Marketing Venture is focused on creating business opportunities through digital innovation, technology, strategic marketing, investment initiatives, and supply chain solutions.
      <br />
      Our vision is to help entrepreneurs, startups, and established businesses grow through modern digital strategies, professional web development, creative branding, and technology-driven business solutions.

    By integrating digital marketing with web development, investment planning, and supply chain management, we aim to build a connected business ecosystem that supports innovation, operational efficiency, and sustainable growth
              </p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-card">
              <span className="journey-year">January 2020 — Present</span>

              <h2>Principal Trainer</h2>

              <h3>Future Lab Institute</h3>

              <p>
                Future Lab Institute was established with a vision to empower individuals through technology-focused training, practical learning, and modern skill development.
                The institute aims to bridge the gap between knowledge and practical application by encouraging continuous learning, innovation, creativity, and professional growth.
               <br /> My vision for Future Lab Institute is to create learning opportunities that help individuals strengthen their capabilities, explore new possibilities, and build a more promising future through technology and education.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-card">
              <span className="journey-year">November 2015 — Present</span>

              <h2>Founder & CEO</h2>

              <h3>Creative Software Bangladesh</h3>

              <p>
               Creative Software represents an important beginning in my professional journey in technology, software development, and digital innovation.
                <br />My vision is to transform creative ideas into practical digital solutions that help businesses improve efficiency, simplify operations, and embrace modern technology. Through software development, digital transformation, and innovative IT services, Creative Software focuses on solving real-world problems and creating new opportunities for businesses and individuals.
             </p>
            </div>
          </div>

        </div>

        {!isExpanded && <div className="journey-fade-overlay"></div>}
      </div>

      <div className="journey-action">
        <button 
          className="journey-see-more-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  );
}

export default Journey;