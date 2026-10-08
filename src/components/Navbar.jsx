import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar({ onTalkClick }) {
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsPublicationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll to landing page sections
  const scrollToSection = (sectionId) => {
    setIsPublicationsOpen(false);

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
        <Link
          to="/"
          className="logo"
          onClick={() => setIsPublicationsOpen(false)}
        >
          Zarin Tasnim
        </Link>

        <div className="nav-links">

          {/* Landing Page Sections */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("journey")}
          >
            Journey
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>

          {/* Publications */}
          <div
            className={`nav-item-dropdown ${
              isPublicationsOpen ? "active" : ""
            }`}
            ref={dropdownRef}
            onMouseEnter={() => setIsPublicationsOpen(true)}
            onMouseLeave={() => setIsPublicationsOpen(false)}
          >
            <button
              type="button"
              className="dropdown-toggle"
              onClick={() =>
                setIsPublicationsOpen((prev) => !prev)
              }
              aria-expanded={isPublicationsOpen}
            >
              Publications
              <span className="dropdown-arrow">▾</span>
            </button>

            <div className="dropdown-menu">

              {/* Separate Ebook Page */}
              <Link
                to="/ebooks"
                onClick={() => setIsPublicationsOpen(false)}
              >
                Ebook
              </Link>

              {/* Separate Training Page */}
              <Link
                to="/training"
                onClick={() => setIsPublicationsOpen(false)}
              >
                Training
              </Link>

            </div>
          </div>
        </div>

        {/* Let's Talk */}
        <button
          type="button"
          className="nav-button"
          onClick={onTalkClick}
        >
          Let's Talk
        </button>

      </div>
    </nav>
  );
}

export default Navbar;