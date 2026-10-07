function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-ribbon">
        <span>EXPERIENCE</span>
      </div>

      <div className="experience-content">
        <div className="experience-header">
          <p>Where I Am Growing Professionally</p>

          <h2>
            My <span>Professional Experience</span>
          </h2>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <span className="experience-status">CURRENTLY WORKING</span>

              <h3>Frontend Developer Intern</h3>

              <h4>Creative Software Bangladesh</h4>
            </div>

            <span className="experience-date">
              2026 — Present
            </span>
          </div>

          <div className="experience-divider"></div>

          <p className="experience-description">
            Currently working as a Frontend Developer Intern, gaining
            practical experience in building modern, responsive and
            user-friendly web interfaces.
          </p>

          <div className="experience-skills">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;