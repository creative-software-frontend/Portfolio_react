import zarinPhoto from "../assets/zarin-photo.png";
import linkedinCover from "../assets/ln-cover.jpg";

function LinkedInSidebar() {
  return (
    <aside className="linkedin-sidebar">
      <div className="linkedin-cover">
        <img src={linkedinCover} alt="LinkedIn Cover" />
      </div>

      <div className="linkedin-profile">
        <div className="linkedin-photo">
          <img src={zarinPhoto} alt="Zarin Tasnim" />
        </div>

        <h3>Zarin Tasnim</h3>

        <p className="linkedin-role">
          Information Technology Student & Frontend Developer
        </p>

        <p className="linkedin-location">
          📍 Dhaka, Bangladesh
        </p>

        <div className="linkedin-stats">
          <div>
            <strong>52</strong>
            <span>CONNECTIONS</span>
          </div>

          <div>
            <strong>53</strong>
            <span>FOLLOWERS</span>
          </div>

          <div>
            <strong>Web</strong>
            <span>Developer</span>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/zarin-tasnim-0a7a47354"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-follow"
        >
          <span className="linkedin-icon">in</span>
          Follow on LinkedIn
        </a>
      </div>

      <div className="linkedin-services">
        <h3>What I Do</h3>

        <div className="linkedin-service-card">
          <strong>Frontend Development</strong>
          <p>Building modern and responsive web interfaces.</p>
        </div>

        <div className="linkedin-service-card">
          <strong>React & Next.js</strong>
          <p>Creating user-friendly applications with modern tools.</p>
        </div>

        <div className="linkedin-service-card">
          <strong>UI Development</strong>
          <p>Turning ideas and designs into functional interfaces.</p>
        </div>

        <a
        href="https://www.linkedin.com/in/zarin-tasnim-0a7a47354"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-work-button"
      >
        Let's Connect
      </a>
      
      </div>

      
    </aside>
  );
}

export default LinkedInSidebar;