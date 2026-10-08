import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ onTalkClick }) {
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Zarin Tasnim
        </Link>

        <div className="nav-links">

          {/* Home */}
          <Link to="/#home">
            Home
          </Link>

          {/* About */}
          <Link to="/#about">
            About
          </Link>

          {/* Journey */}
          <Link to="/#journey">
            Journey
          </Link>

          {/* Skills */}
          <Link to="/#skills">
            Skills
          </Link>

          {/* Projects */}
          <Link to="/#projects">
            Projects
          </Link>

          {/* Experience */}
          <Link to="/#experience">
            Experience
          </Link>

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

              {/* eBook */}
              <Link
                to="/ebooks"
                onClick={() => setIsPublicationsOpen(false)}
              >
                Ebook
              </Link>

              {/* Training */}
              <Link
                to="/#training"
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