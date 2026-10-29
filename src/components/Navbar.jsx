import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import profilePhoto from "../assets/1 (3).png";

const GITHUB_URL = "https://github.com/dilouarbd";

const navItems = [
  { label: "Home", id: "home", icon: "home", color: "#D99B16" },
  { label: "About", id: "about", icon: "graduation", color: "#A855F7" },
  { label: "Expertise", id: "skills", icon: "briefcase", color: "#F59E0B" },
  { label: "Achievements", id: "experience", icon: "list", color: "#3B82F6" },
];

const pages = [
  { label: "Ebooks", path: "/ebooks", icon: "book", color: "#10B981" },
  { label: "Training", path: "/training", icon: "graduation", color: "#EC4899" },
];

const socialLinks = [
  { label: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/dilouarbd/" },
  { label: "Twitter", icon: "𝕏", url: "https://x.com/Dilouarbd" },
  { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/dilouarbd" },
  { label: "GitHub", icon: "github", url: GITHUB_URL },
  { label: "YouTube", icon: "▶", url: "https://www.youtube.com/dilouarbd" },
];

function NavIcon({ type, color }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v12h5v-7h4v7h5V9" /></>,
    graduation: <><path d="m2 9 10-6 10 6-10 6L2 9Z" /><path d="M6 12v5c4 3 8 3 12 0v-5" /><path d="M22 9v7" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4h8v3" /></>,
    list: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M8 4v16M3 9h18M3 14h18" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  };

  return <svg {...common}>{paths[type]}</svg>;
}

function SocialIcon({ type }) {
  if (type === "in") return <span className="social-letter linkedin-letter">in</span>;
  if (type === "𝕏") return <span className="social-letter">{type}</span>;
if (type === "instagram") {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

function Navbar({ onTalkClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id, label) => {
    closeMenu();
    setActiveNav(label);

    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="navbar main-navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => {
            closeMenu();
            setActiveNav("Home");
            if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={profilePhoto} alt="Dilouar Hossain" className="brand-photo" />
        </Link>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${pathname === "/" && activeNav === item.label ? "active" : ""}`}
              onClick={() => scrollToSection(item.id, item.label)}
            >
              <NavIcon type={item.icon} color={item.color} />
              <span>{item.label}</span>
            </button>
          ))}

          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              onClick={closeMenu}
              className={`nav-item ${pathname === page.path ? "active" : ""}`}
            >
              <NavIcon type={page.icon} color={page.color} />
              <span>{page.label}</span>
            </Link>
          ))}

          <button
            type="button"
            className="nav-item say-hello-item"
            onClick={() => {
              closeMenu();
              onTalkClick?.();
            }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4v16l16-8L4 4Z" />
            </svg>
            <span>Say Hello</span>
          </button>
        </div>

        <div className="navbar-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.label}
              title={social.label}
            >
              <SocialIcon type={social.icon} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;