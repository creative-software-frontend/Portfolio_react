function Journey() {
  return (
    <section id="journey" className="journey-section">
      <div className="journey-ribbon">
        <span>MY JOURNEY</span>
      </div>

      <div className="journey-header">
        <p>Where I Started & Where I Am Going</p>

        <h2>
          My journey through <span>technology</span>
        </h2>
      </div>

      <div className="journey-timeline">

        <div className="journey-item">
          <div className="journey-dot"></div>

          <div className="journey-card">
            <span className="journey-year">2023 — Present</span>

            <h3>Undergraduate in Information Technology</h3>

            <h4>Jahangirnagar University</h4>

            <p>
              Started my undergraduate journey in Information Technology,
              building a strong foundation in programming, problem solving,
              computer science and technology.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot"></div>

          <div className="journey-card">
            <span className="journey-year">December 2025</span>

            <h3>Started Learning Full Stack Development</h3>

            <h4>Web Development Journey</h4>

            <p>
              Started focusing on full stack web development and began
              working with technologies such as React, Next.js, TypeScript,
              Node.js, Express.js and MongoDB.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot"></div>

          <div className="journey-card">
            <span className="journey-year">October 2026 — Present</span>

            <h3>Frontend Developer</h3>

            <h4>Creative Software</h4>

            <p>
              Currently working as a Frontend Developer, applying my
              development skills to build modern, responsive and
              user-friendly web experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Journey;