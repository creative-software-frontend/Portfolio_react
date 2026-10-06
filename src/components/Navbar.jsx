import { useState, useRef, useEffect } from "react";

function Navbar({ onTalkClick }) {
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if user clicks anywhere outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPublicationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          Zarin Tasnim
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>

          {/* Publications Dropdown */}
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
              Publications <span className="dropdown-arrow">▾</span>
            </button>

            <div className="dropdown-menu">
              <a href="#ebook" onClick={() => setIsPublicationsOpen(false)}>
                Ebook
              </a>
              <a href="#training" onClick={() => setIsPublicationsOpen(false)}>
                Training
              </a>
            </div>
          </div>
        </div>

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