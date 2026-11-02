import { useEffect, useState } from "react";

const photos = [
  { src: "/src/assets/sales-and-marketing.png", alt: "Achievement 1" },
  { src: "/src/assets/software-engineering-career.png", alt: "Achievement 2" },
  { src: "/src/assets/time-management.png", alt: "Achievement 3" },
  { src: "/src/assets/UpdatedImage.png", alt: "Achievement 4" },
];

const SHOW_MS = 2000; // how long each photo stays
const FLIP_MS = 1100; // must match the CSS transition time

function Experience() {
  const n = photos.length;
  const [page, setPage] = useState(0); // 0..n (n = last photo has turned away)
  const [instant, setInstant] = useState(false);

  // auto-flip; after the last photo, silently reset to the first
  useEffect(() => {
    if (page < n) {
      const t = setTimeout(() => setPage(page + 1), SHOW_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setInstant(true);
      setPage(0);
    }, FLIP_MS + 50);
    return () => clearTimeout(t);
  }, [page, n]);

  // turn animations back on after the silent reset
  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setInstant(false))
    );
    return () => cancelAnimationFrame(id);
  }, [instant]);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-ribbon">
        <span>ACHIEVEMENTS</span>
      </div>

      <div className="pb-wrap">
        <div
          className={`pb-frame ${instant ? "instant" : ""}`}
          role="group"
          aria-label="Achievements gallery"
        >
          <div className="pb-stage">
            {/* underneath: shows the first photo when the last one turns away */}
            <div className="pb-under">
              <img src={photos[0].src} alt="" draggable="false" />
            </div>

            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className={`pb-leaf ${i < page ? "gone" : ""}`}
                style={{ zIndex: n - i + 1 }}
              >
                <div className="pb-front">
                  <img src={photo.src} alt={photo.alt} draggable="false" />
                </div>
                <div className="pb-back" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;