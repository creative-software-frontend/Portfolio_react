function Footer({ onTalkClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Brand & Bio */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              Zarin Tasnim
            </a>
            <p className="footer-tagline">
              Full Stack Developer passionate about building responsive, modern, 
              and user-friendly web applications.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* Publications & More */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#ebook">Ebook</a></li>
              <li><a href="#training">Training</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><button type="button" onClick={onTalkClick} className="footer-contact-link">Contact Me</button></li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:zarintsm15@gmail.com" 
                className="social-btn" 
                aria-label="Email"
              >
                Email
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} Zarin Tasnim. All rights reserved.</p>
          <p className="footer-location">Based in Dhaka, Bangladesh</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;