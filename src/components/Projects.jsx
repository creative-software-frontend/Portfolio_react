function Projects() {
  const projectsData = [
    {
      id: "studypilot",
      title: "StudyPilot",
      subtitle: "AI-Powered Learning Platform",
      description:
        "Built an interactive learning platform with Google Gemini integration, featuring context-aware chat with history, follow-up suggestions, Better Auth, JWT, Google OAuth, and responsive dashboards.",
      techStack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "TanStack Query",
        "Better Auth",
        "JWT",
        "Google Gemini API",
        "Recharts",
      ],
      githubClient: "https://github.com/ZarinTasnim75/Studypilot-client",
      githubServer: "https://github.com/ZarinTasnim75/Studypilot-server",
      liveDemo: "studypilot-client-orpin.vercel.app",
    },
    {
      id: "arthub",
      title: "ArtHub",
      subtitle: "Online Artwork Marketplace",
      description:
        "Developed a role-based artwork marketplace for artists and buyers. Integrated Stripe payments, ImgBB API, Better Auth, and JWT with search, filtering, sorting, pagination, and protected dashboards.",
      techStack: [
        "Next.js 16",
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Better Auth",
        "JWT",
        "Stripe",
        "ImgBB API",
      ],
      githubClient: "https://github.com/ZarinTasnim75/ArtHub",
      githubServer: "https://github.com/ZarinTasnim75/ArtHub-server",
      liveDemo: "arthub-server-omega.vercel.app",
    },
    {
      id: "mediflow",
      title: "MediFlow",
      subtitle: "Hospital Management System",
      description:
        "Designed a hospital management system with role-based access, doctor search, filtering, sorting, appointment booking, and responsive dashboards with protected routes and optimized API usage.",
      techStack: [
        "Next.js 16",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "JWT",
        "Bcrypt",
      ],
      githubClient: "https://github.com/ZarinTasnim75/MediFlow",
      githubServer: "https://github.com/ZarinTasnim75/MediFlow-Server",
      liveDemo: "medi-flow-five-mu.vercel.app",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-ribbon">
          <span>MY WORK</span>
        </div>

        <div className="projects-header">
          <p>Featured Projects & Applications</p>
          <h2>
            Things I Have <span>Built</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-subtitle">{project.subtitle}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn live-btn"
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  GitHub (Client)
                </a>
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  GitHub (Server)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;