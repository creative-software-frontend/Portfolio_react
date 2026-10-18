import { useState } from "react";

import ContactModal from "../components/ContactModal";
import beginnerAlgorithm from "../assets/beginners-algorithm.jpg";
import basicCProgramming from "../assets/basic-c-programming.jpg";

function Ebooks() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Books");

  const books = [
    {
      id: 1,
      title: "Beginner's Algorithm",
      description:
        "A beginner-friendly introduction to algorithms, logical thinking, problem-solving techniques, and essential algorithmic concepts.",
      year: "2023",
      category: "Algorithms",
      type: "eBook",
      cover: beginnerAlgorithm,
      level: "Beginner",
    },
    {
      id: 2,
      title: "Basic C Programming",
      description:
        "Learn programming fundamentals, variables, data types, operators, conditions, loops, functions, arrays, and problem solving.",
      year: "2020",
      category: "Programming",
      type: "eBook",
      cover: basicCProgramming,
      level: "Beginner",
    },
  ];

  const categories = ["All Books", "Programming", "Algorithms"];

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      activeCategory === "All Books" ||
      book.category === activeCategory;

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ebooks-page">
      <main>
        {/* Hero Section */}
        <section className="ebook-market-hero">
          <div className="ebook-market-hero-content">

            <span className="ebook-market-eyebrow">
              READ · LEARN · GROW
            </span>

            <h1>
              Ideas worth
              <br />
              <span>reading and sharing.</span>
            </h1>

            <p>
              Explore my collection of beginner-friendly books on
              programming and algorithms, created to make learning
              technical concepts easier.
            </p>

            <button
              type="button"
              className="ebook-market-hero-button"
              onClick={() =>
                document
                  .getElementById("ebook-catalog")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Books <span>→</span>
            </button>

            <div className="ebook-market-hero-note">
              <span>✦</span> Resources for curious minds and new learners
            </div>
          </div>

          <div className="ebook-market-hero-art">
            <div className="ebook-market-book book-back">
              <div className="ebook-market-book-spine"></div>
              <span>THINK</span>
              <strong>CREATE</strong>
              <small>LEARN SOMETHING NEW</small>
            </div>

            <div className="ebook-market-book book-front">
              <div className="ebook-market-book-top">THE LEARNING LIBRARY</div>
              <div className="ebook-market-book-symbol">{"{ }"}</div>
              <strong>Ideas into<br />Knowledge</strong>
              <span>PROGRAMMING · LOGIC · GROWTH</span>
            </div>

            <div className="ebook-market-floating ebook-market-float-top">
              <span>✧</span>
              <div>
                <strong>Keep learning</strong>
                <small>One page at a time</small>
              </div>
            </div>

            <div className="ebook-market-floating ebook-market-float-bottom">
              <span>✓</span>
              <div>
                <strong>Start with the basics</strong>
                <small>Made for beginners</small>
              </div>
            </div>

            <div className="ebook-market-orbit"></div>
          </div>
        </section>

        {/* Benefits */}
        <section className="ebook-market-benefits">
          <div>
            <span className="ebook-market-benefit-icon">▤</span>
            <div>
              <strong>Beginner-friendly content</strong>
              <p>Learn essential concepts clearly</p>
            </div>
          </div>

          <div>
            <span className="ebook-market-benefit-icon">⌘</span>
            <div>
              <strong>Technical subjects</strong>
              <p>Programming and algorithms</p>
            </div>
          </div>

          <div>
            <span className="ebook-market-benefit-icon">✧</span>
            <div>
              <strong>Learn at your own pace</strong>
              <p>Build your knowledge gradually</p>
            </div>
          </div>
        </section>

        {/* Book Catalog */}
        <section className="ebook-market-catalog" id="ebook-catalog">
          <div className="ebook-market-section-heading">
            <div>
              <span className="ebook-market-section-label">
                THE BOOK COLLECTION
              </span>
              <h2>Explore my eBooks</h2>
              <p>
                Find a book to support your next step in learning.
              </p>
            </div>

            <span className="ebook-market-count">
              {filteredBooks.length}{" "}
              {filteredBooks.length === 1 ? "book" : "books"}
            </span>
          </div>

          <div className="ebook-market-toolbar">
            <div className="ebook-market-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search books by title or topic..."
                aria-label="Search books"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}
            </div>

            <div className="ebook-market-categories">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
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

          {filteredBooks.length > 0 ? (
            <div className="ebook-market-grid">
              {filteredBooks.map((book) => (
                <article className="ebook-market-card" key={book.id}>
                  <div className="ebook-market-cover">
                    <img src={book.cover} alt={`${book.title} book cover`} />

                    <span className="ebook-market-level">
                      {book.level}
                    </span>

                    <span className="ebook-market-type">
                      {book.type}
                    </span>
                  </div>

                  <div className="ebook-market-info">
                    <div className="ebook-market-meta">
                      <span>{book.category}</span>
                      <span className="ebook-market-year">
                        Published {book.year}
                      </span>
                    </div>

                    <h3>{book.title}</h3>

                    <p>{book.description}</p>

                    <div className="ebook-market-card-footer">
                      <div>
                        <small>Explore the book</small>
                        <strong>Start reading</strong>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsContactOpen(true)}
                      >
                        Read Book <span>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="ebook-market-empty">
              <span>⌕</span>
              <h3>No books found</h3>
              <p>
                Try another title or choose a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Books");
                }}
              >
                Show all books
              </button>
            </div>
          )}
        </section>

        {/* Writing Statement */}
        <section className="ebook-market-cta">
          <div className="ebook-market-cta-symbol">“</div>

          <div className="ebook-market-cta-content">
            <span>BEYOND TECHNOLOGY</span>
            <h2>
              Every great idea starts
              <br />
              with a willingness to learn.
            </h2>
            <p>
              Writing is another way to share knowledge. Through these
              books, I aim to make technical learning more approachable
              for students and aspiring programmers.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
          >
            Get in Touch <span>→</span>
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

export default Ebooks;