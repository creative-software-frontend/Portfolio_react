import { useState } from "react";

// Logo sources (no install needed)
const dev = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`;
const si = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;

// Only the well-known technologies, shown as icons
const TECH = {
  nextjs: { name: "Next.js", logo: dev("nextjs") },
  react: { name: "React", logo: dev("react") },
  typescript: { name: "TypeScript", logo: dev("typescript") },
  tailwind: { name: "Tailwind CSS", logo: dev("tailwindcss") },
  node: { name: "Node.js", logo: dev("nodejs") },
  mongodb: { name: "MongoDB", logo: dev("mongodb") },
  stripe: { name: "Stripe", logo: si("stripe", "635BFF") },
  gemini: { name: "Google Gemini", logo: si("googlegemini", "8E75B2") },
};

function TechIcon({ tech }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // plain text fallback (no badge) if a logo can't load
    return <span className="tech-fallback">{tech.name}</span>;
  }

  return (
    <img
      className="tech-icon"
      src={tech.logo}
      alt={tech.name}
      title={tech.name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

// Small inline icons for the link row (use currentColor so CSS controls them)
const iconProps = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const LiveIcon = () => (
  <svg {...iconProps}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const ClientIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);

const ServerIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="7" rx="2" />
    <rect x="3" y="14" width="18" height="7" rx="2" />
    <path d="M7 6.5h.01M7 17.5h.01" />
  </svg>
);

function Projects() {
  const projectsData = [
    {
      id: "studypilot",
      title: "StudyPilot",
      subtitle: "AI-Powered Learning Platform",
      description:
        "Built an interactive learning platform with Google Gemini integration, featuring context-aware chat with history, follow-up suggestions, Better Auth, JWT, Google OAuth, and responsive dashboards.",
      tech: ["nextjs", "typescript", "node", "mongodb", "gemini"],
      githubClient: "https://github.com/ZarinTasnim75/Studypilot-client",
      githubServer: "https://github.com/ZarinTasnim75/Studypilot-server",
      liveDemo: "https://studypilot-client-orpin.vercel.app",
    },
    {
      id: "arthub",
      title: "ArtHub",
      subtitle: "Online Artwork Marketplace",
      description:
        "Developed a role-based artwork marketplace for artists and buyers. Integrated Stripe payments, ImgBB API, Better Auth, and JWT with search, filtering, sorting, pagination, and protected dashboards.",
      tech: ["nextjs", "tailwind", "node", "mongodb", "stripe"],
      githubClient: "https://github.com/ZarinTasnim75/ArtHub",
      githubServer: "https://github.com/ZarinTasnim75/ArtHub-server",
      liveDemo: "https://arthub-server-omega.vercel.app",
    },
    {
      id: "mediflow",
      title: "MediFlow",
      subtitle: "Hospital Management System",
      description:
        "Designed a hospital management system with role-based access, doctor search, filtering, sorting, appointment booking, and responsive dashboards with protected routes and optimized API usage.",
      tech: ["nextjs", "typescript", "tailwind", "node", "mongodb"],
      githubClient: "https://github.com/ZarinTasnim75/MediFlow",
      githubServer: "https://github.com/ZarinTasnim75/MediFlow-Server",
      liveDemo: "https://medi-flow-five-mu.vercel.app",
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

              {/* Icons only: no background, no border */}
              <div className="project-tech-stack">
                {project.tech.map((key) => (
                  <TechIcon key={key} tech={TECH[key]} />
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <LiveIcon />
                  Live
                </a>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="GitHub – Client"
                >
                  <ClientIcon />
                  Client
                </a>
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="GitHub – Server"
                >
                  <ServerIcon />
                  Server
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