import { useState } from "react";
import ContactModal from "../components/ContactModal";
import beginnerAlgo from "../assets/beginners-algorithm_training.jpg";
import basicCProg from "../assets/basic-c-programming_training.jpg";

function Training() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const trainings = [
    {
      id: 1,
      title: "Basic C Programming",
      description:
        "Learn programming fundamentals, variables, loops, functions, arrays and problem solving.",
      year: "2020",
      category: "Programming",
      image: basicCProg,
      level: "Beginner",
      lessons: "Beginner friendly",
      price: "Free",
      rating: "4.9",
    },
    {
      id: 2,
      title: "Beginner's Algorithm",
      description:
        "Build logical thinking and learn essential algorithms and problem-solving techniques.",
      year: "2026",
      category: "Algorithms",
      image: beginnerAlgo,
      level: "Beginner",
      lessons: "Beginner friendly",
      price: "Free",
      rating: "4.8",
    },
  ];

  const categories = ["All Courses", "Programming", "Algorithms"];

  const filteredTrainings = trainings.filter((training) => {
    const matchesCategory =
      activeCategory === "All Courses" ||
      training.category === activeCategory;

    const matchesSearch =
      training.title.toLowerCase().includes(search.toLowerCase()) ||
      training.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="training-page">
      <main>
        <section className="market-hero">
          <div className="market-hero-content">

            <span className="market-eyebrow">
              LEARN SOMETHING NEW
            </span>

            <h1>
              Build skills
              <br />
              <span>Shape your future.</span>
            </h1>

            <p>
              Explore beginner-friendly programming and algorithm
              training designed to help you learn step by step.
            </p>

            <button
              className="market-hero-button"
              onClick={() =>
                document
                  .getElementById("course-catalog")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Courses <span>→</span>
            </button>
          </div>

          <div className="market-hero-art">
            <div className="market-floating-card market-card-top">
              <span className="market-floating-icon">✦</span>
              <div>
                <strong>Learn by doing</strong>
                <small>Build your foundation</small>
              </div>
            </div>

            <div className="market-hero-illustration">
              <div className="market-code-window">
                <div className="market-window-dots">
                  <i></i><i></i><i></i>
                </div>
                <span className="market-code-muted">01</span>
                <code>int main() {"{"}</code>
                <code className="market-code-indent">
                  printf("Hello!");
                </code>
                <code>{"}"}</code>
                <div className="market-code-bottom">
                  <span>●</span> Ready to learn
                </div>
              </div>
              <div className="market-orbit market-orbit-one"></div>
              <div className="market-orbit market-orbit-two"></div>
              <span className="market-decoration market-star">✳</span>
              <span className="market-decoration market-plus">+</span>
            </div>

            <div className="market-floating-card market-card-bottom">
              <span className="market-check-icon">✓</span>
              <div>
                <strong>Start with the basics</strong>
                <small>Progress at your own pace</small>
              </div>
            </div>
          </div>
        </section>

        <section className="market-benefits">
          <div>
            <span className="market-benefit-icon">⌘</span>
            <div>
              <strong>Beginner friendly</strong>
              <p>Start with the fundamentals</p>
            </div>
          </div>
          <div>
            <span className="market-benefit-icon">◷</span>
            <div>
              <strong>Learn at your pace</strong>
              <p>Build skills step by step</p>
            </div>
          </div>
          <div>
            <span className="market-benefit-icon">◇</span>
            <div>
              <strong>Practical knowledge</strong>
              <p>Focus on real understanding</p>
            </div>
          </div>
        </section>

        <section className="market-catalog" id="course-catalog">
          <div className="market-section-heading">
            <div>
              <span className="market-section-label">
                YOUR LEARNING JOURNEY
              </span>
              <h2>Explore training programs</h2>
              <p>
                Find the right place to start and grow your technical skills.
              </p>
            </div>

            <span className="market-course-count">
              {filteredTrainings.length}{" "}
              {filteredTrainings.length === 1 ? "course" : "courses"}
            </span>
          </div>

          <div className="market-toolbar">
            <div className="market-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search courses"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="market-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category ? "active" : ""
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredTrainings.length > 0 ? (
            <div className="market-course-grid">
              {filteredTrainings.map((training) => (
                <article className="market-course-card" key={training.id}>
                  <div className="market-course-image">
                    <img src={training.image} alt={training.title} />
                    <span className="market-level">
                      {training.level}
                    </span>
                    <button
                      type="button"
                      className="market-save-button"
                      aria-label={`Contact about ${training.title}`}
                      onClick={() => setIsContactOpen(true)}
                    >
                      ♡
                    </button>
                  </div>

                  <div className="market-course-info">
                    <div className="market-course-meta">
                      <span>{training.category}</span>
                      <span className="market-rating">
                        ★ {training.rating}
                      </span>
                    </div>

                    <h3>{training.title}</h3>
                    <p className="market-course-description">
                      {training.description}
                    </p>

                    <div className="market-course-details">
                      <span>◷ {training.lessons}</span>
                      <span>Updated {training.year}</span>
                    </div>

                    <div className="market-course-footer">
                      <div>
                        <small>Course access</small>
                        <strong className="market-price">
                          {training.price}
                        </strong>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsContactOpen(true)}
                      >
                        View Training <span>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="market-empty-state">
              <span>⌕</span>
              <h3>No courses found</h3>
              <p>Try another search term or select a different category.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Courses");
                }}
              >
                Show all courses
              </button>
            </div>
          )}
        </section>

        <section className="market-cta">
          <div>
            <span>HAVE A QUESTION?</span>
            <h2>Ready to start learning?</h2>
            <p>
              Get in touch to learn more about the training programs
              and find a suitable starting point.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
          >
            Contact Me <span>→</span>
          </button>
        </section>
      </main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default Training;