
import { useState } from "react";
import ContactModal from "../components/ContactModal";
import communicationSkills from "../assets/communication-skills.png";
import digitalMarketingAI from "../assets/digital-marketing-ai.png";
import limitlessSuccess from "../assets/limitless-success.png";
import timeManagement from "../assets/time-management.png";
import softwareCareer from "../assets/software-engineering-career.png";
import salesMarketing from "../assets/sales-and-marketing.png";

const books = [
  {
    id: 1,
    title: "AI in Digital Marketing",
    description: "A guide to digital marketing with AI, featuring a focus on digital innovation and marketing.",
    category: "Digital Marketing",
    cover: digitalMarketingAI,
    language: "English",
  },
  {
    id: 2,
    title: "Communication Skills",
    description: "Explore effective communication for professional and personal life, with a focus on vision, action, and abundance.",
    category: "Personal Development",
    cover: communicationSkills,
    language: "English",
  },
  {
    id: 3,
    title: "Limitless Success",
    description: "A personal development book centered on vision, action, abundance, and success.",
    category: "Personal Development",
    cover: limitlessSuccess,
    language: "English",
  },
  {
    id: 4,
    title: "Time Management Blueprint",
    description: "A guide to prioritizing, executing tasks, and building better time-management habits.",
    category: "Personal Development",
    cover: timeManagement,
    language: "English",
  },
  {
    id: 5,
    title: "সফটওয়্যার ইঞ্জিনিয়ার হিসেবে আপনার ক্যারিয়ার",
    description: "A career guide for aspiring software engineers, focused on skills, growth, and a software engineering career roadmap.",
    category: "Career",
    cover: softwareCareer,
    language: "বাংলা",
  },
  {
    id: 6,
     title: "সেলস এন্ড মার্কেটিং",
  description:
    "বিক্রয় কৌশল, মার্কেটিংয়ের মৌলিক ধারণা, গ্রাহকের চাহিদা বোঝা এবং কার্যকর মার্কেটিং পরিকল্পনা সম্পর্কে জানুন।",
  category: "Digital Marketing",
  cover: salesMarketing,
  language: "বাংলা",
  },
];

const categories = [
  "All Books",
  "Digital Marketing",
  "Personal Development",
  "Career",
];

function Ebooks() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Books");

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      activeCategory === "All Books" || book.category === activeCategory;

    const matchesSearch =
      `${book.title} ${book.description} ${book.category} ${book.language}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ebooks-page bookstore-page">
      <main>
        <section className="bookstore-hero">
          <div className="bookstore-hero-content">
            <span className="bookstore-eyebrow">THE BOOK COLLECTION</span>
            <h1>Find your next <span>great read.</span></h1>
            <p>
              Explore books on programming, digital marketing,
              communication, personal development, and career growth.
            </p>
            <button
              type="button"
              className="bookstore-primary-button"
              onClick={() =>
                document.getElementById("bookstore-catalog")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Browse Books <span>→</span>
            </button>
            <div className="bookstore-hero-note">
              <span>✦</span> Read · Learn · Grow
            </div>
          </div>

          <div className="bookstore-hero-books">
            {books.slice(0, 3).map((book) => (
              <div className="bookstore-hero-cover" key={book.id}>
                <img src={book.cover} alt={book.title} />
              </div>
            ))}
          </div>
        </section>

        <section className="bookstore-catalog" id="bookstore-catalog">
          <div className="bookstore-heading">
            <div>
              <span className="bookstore-section-label">OUR COLLECTION</span>
              <h2>Explore all books</h2>
              <p>Find a topic that interests you.</p>
            </div>
            <span className="bookstore-total">
              {filteredBooks.length} books
            </span>
          </div>

          <div className="bookstore-toolbar">
            <div className="bookstore-search">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search by book title or topic..."
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

            <div className="bookstore-categories">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="bookstore-grid">
              {filteredBooks.map((book) => (
                <article className="bookstore-card" key={book.id}>
                  <div className="bookstore-cover">
                    <img src={book.cover} alt={`${book.title} cover`} />
                    <span className="bookstore-language">{book.language}</span>
                  </div>

                  <div className="bookstore-card-content">
                    <span className="bookstore-book-category">
                      {book.category}
                    </span>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <div className="bookstore-card-footer">
                      <span className="bookstore-book-type">eBook / Book</span>
                      <button
                        type="button"
                        onClick={() => setIsContactOpen(true)}
                      >
                        Inquire <span>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bookstore-empty">
              <h3>No books found</h3>
              <p>Try another search term or category.</p>
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

        <section className="bookstore-cta">
          <div>
            <span className="bookstore-section-label">HAVE A QUESTION?</span>
            <h2>Interested in a book?</h2>
            <p>Get in touch to ask about the available books.</p>
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

export default Ebooks;