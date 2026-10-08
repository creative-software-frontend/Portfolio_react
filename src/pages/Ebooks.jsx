import { useState } from "react";

// import Navbar from "../components/Navbar";
import ContactModal from "../components/ContactModal";
// import Footer from "../components/Footer";
import beginnerAlgorithm from "../assets/beginners-algorithm.jpg";
import basicCProgramming from "../assets/basic-c-programming.jpg";

function Ebooks() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const books = [
  {
    title: "Beginner's Algorithm",
    description:
      "A beginner-friendly introduction to algorithms, covering fundamental problem-solving techniques, logical thinking, and essential algorithmic concepts for students and new programmers.",
    year: "2023",
    category: "eBook",
    cover: beginnerAlgorithm,
  },
  {
    title: "Basic C Programming",
    description:
      "A simple introduction to C programming covering programming fundamentals, variables, data types, operators, conditional statements, loops, functions, arrays, and basic problem solving.",
    year: "2020",
    category: "eBook",
    cover: basicCProgramming,
  },
];

  return (
    <div className="ebooks-page">

      {/* Navbar */}
      {/* <Navbar
        onTalkClick={() => setIsContactOpen(true)} /> */}

      <main>

        <section className="ebooks-hero">

          <div className="ebooks-hero-content">

            <h1>
              My <span>eBooks</span>
            </h1>

            <p>
              A collection of books and written works created
              through my ideas, experiences and creativity.
            </p>

          </div>

        </section>


        {/* Books Section */}
        <section className="ebooks-section">

          <div className="ebooks-section-heading">

            <h2>
              Books I've <span>Written</span>
            </h2>

            <div className="ebooks-heading-line"></div>

          </div>


          <div className="ebooks-grid">

            {books.map((book, index) => (
              <article
                className="ebook-card"
                key={index}
              >

                {/* Book Cover */}
                <div className="ebook-cover">

                  <img
                    src={book.cover}
                    alt={book.title}
                  />

                </div>


                {/* Book Information */}
                <div className="ebook-info">

                  <span className="ebook-category">
                    {book.category}
                  </span>

                  <h3>
                    {book.title}
                  </h3>

                  <p>
                    {book.description}
                  </p>


                  <div className="ebook-card-bottom">

                    <span className="ebook-year">
                      {book.year}
                    </span>

                    <button
                      type="button"
                      className="ebook-read-button"
                    >
                      Read Book
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* Writing Statement */}
        <section className="ebooks-message">

          <div className="ebooks-message-inner">

            <span>
              BEYOND TECHNOLOGY
            </span>

            <h2>
              Writing is another way
              <br />
              <strong>to share an idea.</strong>
            </h2>

            <p>
              Alongside technology and development, I enjoy
              expressing ideas through writing and creative work.
              This space brings together my written publications
              and books.
            </p>

          </div>

        </section>
        {/* <Footer /> */}

      </main>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default Ebooks;