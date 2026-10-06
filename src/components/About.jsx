function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-ribbon">
        <span>ABOUT ME</span>
      </div>

      <div className="about-content">
        <div className="about-heading">
          <p className="about-small-title">Who am I?</p>

          <h2>
            An IT Student <span>Building With Technology</span>
          </h2>
        </div>

        <div className="about-text">
          <p>
            I am an Information Technology student at Jahangirnagar University
            with a strong interest in frontend development and modern web
            technologies.
          </p>

          <p>
            I enjoy turning ideas into clean, responsive and user-friendly
            websites. I work mainly with React, Next.js, TypeScript and
            Tailwind CSS, while also exploring backend development and
            full-stack technologies.
          </p>

          <p>
            Alongside technology, I am interested in learning, leadership and
            creative activities. My goal is to keep improving my skills and
            build technology that is useful, accessible and meaningful.
          </p>
        </div>
      </div>

      <div className="about-highlights">
        <div className="about-highlight">
          <strong>7</strong>
          <span>Full Stack Projects</span>
        </div>

        <div className="about-highlight">
          <strong>Real Life</strong>
          <span>Problem Solving</span>
        </div>

        <div className="about-highlight">
          <strong>IT</strong>
          <span>Student</span>
        </div>

        <div className="about-highlight">
          <strong>Web</strong>
          <span>Developer</span>
        </div>
      </div>
    </section>
  );
}

export default About;