import zarinPhoto from "../assets/zarin-photo.png";

function Hero({ onTalkClick }) {
return ( <section id="home" className="hero"> <div className="hero-content"> <div className="hero-badge"> <span></span>
Information Technology Student · Frontend Developer </div>

    <h1>
      Zarin <span>Tasnim</span>
    </h1>

    <p className="hero-description">
      I build modern, responsive and user-friendly web experiences
      while exploring technology, creativity and new ideas.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        View My Work
      </a>

      <button
        type="button"
        className="secondary-button"
        onClick={onTalkClick}
      >
        Contact Me
      </button>
    </div>
  </div>

  <div className="hero-image-wrapper">
    <div className="hero-image">
      <img src={zarinPhoto} alt="Zarin Tasnim" />
    </div>

    <div className="hero-decoration"></div>
  </div>
</section>

);
}

export default Hero;