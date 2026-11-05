import { useEffect, useState } from "react";

const modules = import.meta.glob("../assets/photo/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// key = the file name without extension (1.jpg -> "1")
const details = {
  1: { title: "09-12-2015", place: "Hotel Sonargaon, Dhaka" },
  2: { title: "06-10-2017", place: "Thakurgaon" },
  3: { title: "01-10-2017", place: "Brahmanbaria" },
  4: { title: "12-06-2017", place: "BCFCC, Agargaon, Dhaka" },
  5: { title: "06-12-2017", place: "BCFCC, Agargaon, Dhaka" },
  6: { title: "08-12-2017", place: "BCFCC, Agargaon, Dhaka" },
  7: { title: "16-12-2017", place: "Faramgate Dhaka" },
  8: { title: "22-09-2017", place: "Dhaka" },
  9: { title: "19-05-2019", place: "Dhaka" },
  10: { title: "17-11-2017", place: "Jaflong, Sylhet" },
  11: { title: "07-11-2020", place: "Dhaka" },
  12: { title: "24-10-2020", place: "Dhaka" },
  13: { title: "20-11-2019", place: "Dhaka" },
  14: { title: "06-02-2020", place: "Chattogram" },
  15: { title: "14-01-2021", place: "Patanga, Chattogram" },
  16: { title: "14-01-2021", place: "Saint Martin, Coxbazar" },
  17: { title: "05-08-20207", place: "Sylhet" },
  

};

const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => {
    const id = path.split("/").pop().replace(/\.[^.]+$/, "");
    const d = details[id] || {};
    return { src, id, title: d.title || `Photo ${id}`, place: d.place || "" };
  });

// brush-stroke quotation mark 
function Quote({ className }) {
  return (
    <svg className={`gallery-quote ${className}`} viewBox="0 0 80 56" aria-hidden="true">
      <path
        filter="url(#brush)"
        d="M2 54V30C2 13 12 3 30 1V12C21 14 17 20 17 28H30V54ZM44 54V30C44 13 54 3 72 1V12C63 14 59 20 59 28H72V54Z"
      />
    </svg>
  );
}

function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="gallery-page">
      {/* rough "brush" edge for the quotation marks */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="brush" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="4" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5" />
        </filter>
      </svg>

      <div className="gallery-bar">
        <h1>Gallery</h1>
        <span>{images.length} items</span>
      </div>

      {images.length === 0 ? (
        <p className="gallery-empty">
          No photos yet. Add images to <code>src/assets/photo</code>.
        </p>
      ) : (
        <div className="gallery-grid">
          {images.map((img) => {
            const state =
              active === null ? "" : active === img.id ? "is-active" : "is-dim";
            return (
              <figure
                key={img.id}
                className={`gallery-item ${state}`}
                tabIndex={0}
                onMouseEnter={() => setActive(img.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(img.id)}
                onBlur={() => setActive(null)}
              >
                <Quote className="q-open" />
                <Quote className="q-close" />

                <div className="gallery-thumb">
                  <img src={img.src} alt={img.title} loading="lazy" draggable="false" />
                </div>

                <figcaption>
                  <strong>{img.title}</strong>
                  {img.place && <span>📍 {img.place}</span>}
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Gallery;