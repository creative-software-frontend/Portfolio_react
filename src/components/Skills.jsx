import { useState } from "react";

// Category configurations
const skillCategories = [
  { id: "client", label: "Client-Side", icon: "</>" },
  { id: "server", label: "Server-Side", icon: "🗄️" },
  { id: "tools", label: "Libraries & Tools", icon: "🛠️" },
  { id: "languages", label: "Programming Languages", icon: "💻" },
  { id: "soft", label: "Interpersonal", icon: "🤝" },
];

const skillsData = [
  // Client-Side
  { name: "React", category: "client", level: 90 },
  { name: "JavaScript", category: "client", level: 92 },
  { name: "TypeScript", category: "client", level: 85 },
  { name: "Next.js", category: "client", level: 88 },
  { name: "HTML", category: "client", level: 95 },
  { name: "CSS", category: "client", level: 92 },
  { name: "Tailwind CSS", category: "client", level: 90 },
  { name: "Bootstrap", category: "client", level: 85 },

  // Server-Side
  { name: "Node.js", category: "server", level: 85 },
  { name: "Express.js", category: "server", level: 88 },
  { name: "MongoDB", category: "server", level: 82 },
  { name: "MySQL", category: "server", level: 80 },
  { name: "REST API", category: "server", level: 90 },

  // Libraries & Tools
  { name: "React Query", category: "tools", level: 85 },
  { name: "Axios", category: "tools", level: 92 },
  { name: "Better-Auth", category: "tools", level: 80 },
  { name: "React Hook Form", category: "tools", level: 88 },
  { name: "Git", category: "tools", level: 90 },
  { name: "GitHub", category: "tools", level: 92 },
  { name: "Vercel", category: "tools", level: 90 },
  { name: "Render", category: "tools", level: 85 },

  // Programming Languages
  { name: "C", category: "languages", level: 78 },
  { name: "C++", category: "languages", level: 82 },
  { name: "Java", category: "languages", level: 75 },
  { name: "Python", category: "languages", level: 80 },

  // Interpersonal
  { name: "Communication", category: "soft", level: 92 },
  { name: "Teamwork", category: "soft", level: 95 },
  { name: "Problem Solving", category: "soft", level: 90 },
  { name: "Adaptability", category: "soft", level: 88 },
];

const INITIAL_SKILLS_COUNT = 4;

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar-container">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

function CategoryCard({ category, skills }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleSkills = isExpanded
    ? skills
    : skills.slice(0, INITIAL_SKILLS_COUNT);

  return (
    <div className="category-card">
      <div className="category-header">
        <div className="category-icon-badge">{category.icon}</div>
        <h3>{category.label}</h3>
      </div>

      <div className="category-skills-list">
        {visibleSkills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>

      {skills.length > INITIAL_SKILLS_COUNT && (
        <button
          type="button"
          className="see-more-btn"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "See Less ▲" : `See More (${skills.length - INITIAL_SKILLS_COUNT} more) ▼`}
        </button>
      )}
    </div>
  );
}

function Skills() {
  const [filter, setFilter] = useState("all");

  const displayedCategories =
    filter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === filter);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-ribbon">
          <span>EXPERTISE & SERVICES</span>
        </div>

        <div className="skills-header">
          <p>What I Bring to the Table</p>
          <h2>
            Technologies & <span>Proficiencies</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="skills-tabs">
          <button
            type="button"
            className={`skills-tab-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`skills-tab-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Card Categories Grid */}
        <div className="skills-cards-grid">
          {displayedCategories.map((category) => {
            const categorySkills = skillsData.filter(
              (s) => s.category === category.id
            );

            if (categorySkills.length === 0) return null;

            return (
              <CategoryCard
                key={category.id}
                category={category}
                skills={categorySkills}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;