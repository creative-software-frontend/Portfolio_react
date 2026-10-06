function Navbar({ onTalkClick }) {
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
          <a href="#contact">Contact</a>
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