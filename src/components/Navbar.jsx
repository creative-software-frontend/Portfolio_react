import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const sections = [
  ["home", "Home"],
  ["about", "About"],
  ["journey", "Journey"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
];

function Navbar({ onTalkClick }) {
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPublicationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsPublicationsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeAll();

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
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeAll}>
          Zarin Tasnim
        </Link>

        {/* Links (the "open" class shows them on mobile) */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {sections.map(([id, label]) => (
            <button key={id} type="button" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}

          {/* Publications */}
          <div
            className={`nav-item-dropdown ${isPublicationsOpen ? "active" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => setIsPublicationsOpen(true)}
            onMouseLeave={() => setIsPublicationsOpen(false)}
          >
            <button
              type="button"
              className="dropdown-toggle"
              onClick={() => setIsPublicationsOpen((prev) => !prev)}
              aria-expanded={isPublicationsOpen}
            >
              Publications
              <span className="dropdown-arrow">▾</span>
            </button>

            <div className="dropdown-menu">
              <Link to="/ebooks" onClick={closeAll}>
                Ebook
              </Link>
              <Link to="/training" onClick={closeAll}>
                Training
              </Link>
            </div>
          </div>
        </div>

        {/* Let's Talk */}
        <button
          type="button"
          className="nav-button"
          onClick={() => {
            closeAll();
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
    </nav>
  );
}

export default Navbar;