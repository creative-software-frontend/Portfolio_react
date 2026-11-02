import  { useState } from "react";

const skillsData = [
  {
    name: "Digital Marketing & Strategy",
    level: 90,
    tag: "ডিজিট্যাল মার্কেটিং: কৌশল, ব্র্যান্ডিং ও ক্যাম্পেইন পরিকল্পনা।"
  },
  {
    name: "Entrepreneurship & Business Development",
    level: 90,
    tag: "নতুন উদ্যোগ, ব্যবসায়িক মডেল ও দীর্ঘমেয়াদি পরিকল্পনা।"
  },
  {
    name: "Training & Skill Development",
    level: 85,
    tag: "ডিজিটাল মার্কেটিং প্রশিক্ষণ ও দক্ষতা উন্নয়ন।"
  },
  {
    name: "AI-Powered Marketing & Automation",
    level: 85,
    tag: "AI টুল ব্যবহার করে কনটেন্ট, মার্কেটিং ও কাজের অটোমেশন।"
  },
  {
    name: "Business Strategy & Project Planning",
    level: 85,
    tag: "ব্যবসায়িক কৌশল ও প্রজেক্ট পরিকল্পনা।"
  },
  {
    name: "Leadership & Team Management",
    level: 85,
    tag: "টিম সমন্বয়, নেতৃত্ব ও ব্যবস্থাপনা।"
  },
  {
    name: "Software Solutions & Project Management",
    level: 80,
    tag: "সফটওয়্যার প্রকল্পের চাহিদা নির্ধারণ ও সমাধান পরিকল্পনা।"
  },
  {
    name: "Web Development",
    level: 75,
    tag: "ওয়েব প্রকল্পের পরিকল্পনা, ফিচার নির্ধারণ ও ডেভেলপমেন্ট টিমের সঙ্গে সমন্বয়।"
  },
  {
    name: "Branding & Creative Content",
    level: 80,
    tag: "ব্র্যান্ড পরিচিতি, প্রচারণার কনটেন্ট ও ডিজিটাল যোগাযোগ।"
  },
  {
    name: "Business Operations & Management",
    level: 80,
    tag: "ব্যবসায়িক কার্যক্রম, কর্মপ্রবাহ ও ব্যবস্থাপনার সমন্বয়।"
  },
  {
    name: "Supply Chain & Logistics",
    level: 70,
    tag: "সাপ্লাইয়ার নেটওয়ার্ক, পণ্য সংগ্রহ, বিতরণ ও লজিস্টিকস পরিকল্পনা।"
  },
  {
    name: "Investment & Business Planning",
    level: 65,
    tag: "ব্যবসায়িক বিনিয়োগের পরিকল্পনা, সম্ভাবনা মূল্যায়ন ও পার্টনারশিপ।"
  }
];

const INITIAL_SKILLS_COUNT = 4;

function SkillBar({ name, level, tag }) {
  return (
    <div className="skill-bar-container" style={{ marginBottom: "24px" }}>
      {/* 1. Headline */}
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      
      {/* 2. Bar */}
      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill"
          style={{ width: `${level}%` }}
        ></div>
      </div>

      {/* 3. Tag */}
      {tag && <p className="skill-tag" style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "6px" }}>{tag}</p>}
    </div>
  );
}

function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleSkills = isExpanded
    ? skillsData
    : skillsData.slice(0, INITIAL_SKILLS_COUNT);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-ribbon">
          <span>EXPERTISE & SERVICES</span>
        </div>

        <div className="skills-header">
          <p>Proposed Skill Levels</p>
          <h2>
            Technologies & <span>Proficiencies</span>
          </h2>
        </div>

        {/* Skills List Container */}
        <div className="skills-list-wrapper" style={{ marginTop: "30px" }}>
          {visibleSkills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              tag={skill.tag}
            />
          ))}

          {skillsData.length > INITIAL_SKILLS_COUNT && (
            <button
              type="button"
              className="see-more-btn"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "See Less ▲" : `See More (${skillsData.length - INITIAL_SKILLS_COUNT} more) ▼`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;