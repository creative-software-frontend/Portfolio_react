import { useState } from "react";


import ContactModal from "../components/ContactModal";
import beginnerAlgo from "../assets/beginners-algorithm_training.jpg";
import basicCProg from "../assets/basic-c-programming_training.jpg";

function Training() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const trainings = [
    {
      title: "Basic C Programming",
      description:
        "A beginner-friendly training program covering the fundamentals of C programming, including variables, data types, operators, conditions, loops, functions, arrays, and basic problem solving.",
      year: "2020",
      category: "Programming",
      image: basicCProg,
    },
    {
      title: "Beginner's Algorithm",
      description:
        "An introductory training program focused on algorithmic thinking, problem solving, logical reasoning, and fundamental algorithms for students and beginner programmers.",
      year: "2026",
      category: "Algorithms",
      image: beginnerAlgo,
    },
  ];

  return (
    <div className="training-page">

      <main>
        {/* Hero Section */}
        <section className="training-hero">
          <div className="training-hero-content">
            <span className="training-label">
              MY TRAINING
            </span>

            <h1>
              Training & <span>Learning</span>
            </h1>

            <p>
              Practical training programs designed to help
              students build programming knowledge, problem-solving
              skills and confidence.
            </p>
          </div>
        </section>

        {/* Training Section */}
        <section className="training-section">
          <div className="training-section-heading">
            <p>LEARN & GROW</p>

            <h2>
              My <span>Training Programs</span>
            </h2>

            <div className="training-heading-line"></div>
          </div>

          <div className="training-grid">
            {trainings.map((training, index) => (
              <article
                className="training-card"
                key={index}
              >
                <div className="training-image">
                  <img
                    src={training.image}
                    alt={training.title}
                  />
                </div>

                <div className="training-info">
                  <span className="training-category">
                    {training.category}
                  </span>

                  <h3>{training.title}</h3>

                  <p>{training.description}</p>

                  <div className="training-card-bottom">
                    <span className="training-year">
                      {training.year}
                    </span>

                    <button
                      type="button"
                      className="training-button"
                    >
                      View Training
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Message Section */}
        <section className="training-message">
          <div className="training-message-inner">
            <span>SHARE KNOWLEDGE</span>

            <h2>
              Learning becomes more
              <br />
              <strong>meaningful when shared.</strong>
            </h2>

            <p>
              These training programs are designed to make
              technical concepts easier to understand and help
              beginners develop a strong foundation in programming
              and problem solving.
            </p>
          </div>
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