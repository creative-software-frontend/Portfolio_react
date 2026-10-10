import { useState } from "react";

// Logo sources (no install needed)
const dev = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`;
const si = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "client", label: "Client-Side" },
  { id: "server", label: "Server-Side" },
  { id: "tools", label: "Libraries & Tools" },
  { id: "languages", label: "Programming Languages" },
  { id: "soft", label: "Interpersonal" },
];

// logo: image URL  |  emoji: used for skills with no brand logo
// If a logo fails to load (or is null) the tile falls back to the name as text.
const skillsData = [
  // Client-Side
  { name: "React", category: "client", logo: dev("react") },
  { name: "JavaScript", category: "client", logo: dev("javascript") },
  { name: "TypeScript", category: "client", logo: dev("typescript") },
  { name: "Next.js", category: "client", logo: dev("nextjs") },
  { name: "HTML", category: "client", logo: dev("html5") },
  { name: "CSS", category: "client", logo: dev("css3") },
  { name: "Tailwind CSS", category: "client", logo: dev("tailwindcss") },
  { name: "Bootstrap", category: "client", logo: dev("bootstrap") },

  // Server-Side
  { name: "Node.js", category: "server", logo: dev("nodejs") },
  { name: "Express.js", category: "server", logo: dev("express") },
  { name: "MongoDB", category: "server", logo: dev("mongodb") },
  { name: "MySQL", category: "server", logo: dev("mysql") },
  { name: "REST API", category: "server", logo: null },

  // Libraries & Tools
  { name: "React Query", category: "tools", logo: si("reactquery", "FF4154") },
  { name: "Axios", category: "tools", logo: si("axios", "5A29E4") },
  { name: "Better-Auth", category: "tools", logo: si("betterauth", "21214D") },
  { name: "React Hook Form", category: "tools", logo: si("reacthookform", "EC5990") },
  { name: "Git", category: "tools", logo: dev("git") },
  { name: "GitHub", category: "tools", logo: dev("github") },
  { name: "Vercel", category: "tools", logo: dev("vercel") },
  { name: "Render", category: "tools", logo: si("render", "46E3B7") },

  // Programming Languages (JavaScript is already shown under Client-Side)
  { name: "C", category: "languages", logo: dev("c") },
  { name: "C++", category: "languages", logo: dev("cplusplus") },
  { name: "Java", category: "languages", logo: dev("java") },
  { name: "Python", category: "languages", logo: dev("python") },

  // Interpersonal (no brand logos, so emoji icons)
  { name: "Communication", category: "soft", emoji: "💬" },
  { name: "Teamwork", category: "soft", emoji: "🤝" },
  { name: "Problem Solving", category: "soft", emoji: "🧩" },
  { name: "Adaptability", category: "soft", emoji: "🔄" },
];

function SkillTile({ skill }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="skill-card" data-name={skill.name} title={skill.name}>
      {skill.emoji ? (
        <span className="skill-emoji" role="img" aria-label={skill.name}>
          {skill.emoji}
        </span>
      ) : skill.logo && !failed ? (
        <img
          className="skill-logo"
          src={skill.logo}
          alt={skill.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        // fallback when there is no logo
        <span className="skill-fallback">{skill.name}</span>
      )}
    </div>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-ribbon">
          <span>MY SKILLS</span>
        </div>

        <div className="skills-header">
          <p>What I Bring to the Table</p>
          <h2>
            Technologies & <span>Proficiencies</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="skills-tabs">
          {skillCategories.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`skills-tab-btn ${
                activeCategory === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Logo grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillTile key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;