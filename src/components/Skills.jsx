import { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "client", label: "Client-Side" },
    { id: "server", label: "Server-Side" },
    { id: "tools", label: "Libraries & Tools" },
    { id: "languages", label: "Programming Languages" },
    { id: "soft", label: "Interpersonal" },
  ];

  const skillsData = [
    // Client-Side
    { name: "React", category: "client" },
    { name: "JavaScript", category: "client" },
    { name: "TypeScript", category: "client" },
    { name: "Next.js", category: "client" },
    { name: "HTML", category: "client" },
    { name: "CSS", category: "client" },
    { name: "Tailwind CSS", category: "client" },
    { name: "Bootstrap", category: "client" },

    // Server-Side
    { name: "Node.js", category: "server" },
    { name: "Express.js", category: "server" },
    { name: "MongoDB", category: "server" },
    { name: "MySQL", category: "server" },
    { name: "REST API", category: "server" },

    // Libraries & Tools
    { name: "React Query", category: "tools" },
    { name: "Axios", category: "tools" },
    { name: "Better-Auth", category: "tools" },
    { name: "React Hook Form", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Vercel", category: "tools" },
    { name: "Render", category: "tools" },

    // Programming Languages
    { name: "JavaScript (ES6+)", category: "languages" },
    { name: "C", category: "languages" },
    { name: "C++", category: "languages" },
    { name: "Java", category: "languages" },
    { name: "Python", category: "languages" },

    // Interpersonal Skills
    { name: "Communication", category: "soft" },
    { name: "Teamwork", category: "soft" },
    { name: "Problem Solving", category: "soft" },
    { name: "Adaptability", category: "soft" },
  ];

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

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;