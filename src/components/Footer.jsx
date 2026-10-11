import { Link, useNavigate, useLocation } from "react-router-dom";

const YOUTUBE_URL = "https://www.youtube.com/@your-channel";
const LINKEDIN_URL = "https://www.linkedin.com/in/zarin-tasnim-tsm15/";
const EMAIL = "zarintsm15@gmail.com";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Footer({ onTalkClick }) {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = (sectionId) => {
    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navSections = [
    ["home", "Home"],
    ["about", "About"],
    ["projects", "Projects"],
    ["experience", "Experience"],
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand & Bio */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Zarin Tasnim
            </Link>

            <p className="footer-tagline">
              Full Stack Developer passionate about building responsive,
              modern, and user-friendly web applications.
            </p>

            {/* Email as text */}
            <a href={`mailto:${EMAIL}`} className="footer-email">
              <MailIcon />
              {EMAIL}
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              {navSections.map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    className="footer-contact-link"
                    onClick={() => scrollToSection(id)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications & More */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <Link to="/ebooks">Ebook</Link>
              </li>
              <li>
                <Link to="/training">Training</Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={onTalkClick}
                  className="footer-contact-link"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>

          {/* Social: LinkedIn + YouTube icons only */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="YouTube"
                title="YouTube"
              >
                <YouTubeIcon />
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