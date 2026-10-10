import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const GITHUB_URL = "https://github.com/ZarinTasnim75";

const sections = [
  ["home", "Home"],
  ["about", "About"],
  ["projects", "Projects"],
  ["experience", "Experience"],
];

const pages = [
  ["/ebooks", "Ebook"],
  ["/training", "Training"],
];

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Navbar({ onTalkClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    closeMenu();

    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Name as logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          Zarin Tasnim
        </Link>

        {/* Links ("open" class shows them on mobile) */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {/* Landing page sections */}
          {sections.map(([id, label]) => (
            <button key={id} type="button" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}

          {/* Separate pages */}
          {pages.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-page-link ${isActive ? "active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right side actions */}
        <div className="nav-actions">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github"
            aria-label="GitHub profile"
          >
            <GithubIcon />
          </a>

          <button
            type="button"
            className="nav-button"
            onClick={() => {
              closeMenu();
              onTalkClick();
            }}
          >
            Let's Talk
          </button>

          {/* Hamburger (visible only under 900px via CSS) */}
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;