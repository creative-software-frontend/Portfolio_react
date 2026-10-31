import { useEffect, useRef, useState } from "react";

// Put your images in /public/achievements/ and list them here.
const photos = [
  { src: "/src/assets/achievement/sales-and-marketing.png", alt: "Achievement 1" },
  { src: "/src/assets/achievement/software-engineering-career.png", alt: "Achievement 2" },
  { src: "/src/assets/achievement/time-management.png", alt: "Achievement 3" },
  { src: "/src/assets/achievement/UpdatedImage.png", alt: "Achievement 4" },
];

const FLIP_MS = 1100; // keep equal to --flip-time in the CSS

function Arrow({ dir }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

function Experience() {
  const n = photos.length;
  const [page, setPage] = useState(0);      // 0..n  (n = last photo has turned away)
  const [instant, setInstant] = useState(false);
  const touchX = useRef(null);

  const current = page % n;

  const next = () => setPage((p) => (p >= n ? p : p + 1));
  const prev = () => setPage((p) => (p === 0 ? 0 : p - 1));

  // After the last photo has turned, silently reset to the first page
  useEffect(() => {
    if (page !== n) return;
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

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-ribbon">
        <span>ACHIEVEMENTS</span>
      </div>

      <div className="pb-wrap">
        <div
          className={`pb-frame ${instant ? "instant" : ""}`}
          tabIndex={0}
          role="group"
          aria-label="Achievements gallery"
          onKeyDown={onKeyDown}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
          onClick={next}
        >
          {/* sits underneath: shows the first photo when the last one turns away */}
          <div className="pb-under">
            <img src={photos[0].src} alt="" draggable="false" />
          </div>

          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`pb-leaf ${i < page ? "gone" : ""}`}
              style={{ zIndex: n - i + 1 }}
              aria-hidden={i !== current}
            >
              <div className="pb-front">
                <img src={photo.src} alt={photo.alt} loading="lazy" draggable="false" />
              </div>
              <div className="pb-back" />
            </div>
          ))}
        </div>

        <div className="pb-controls">
          <button type="button" onClick={prev} disabled={page === 0} aria-label="Previous photo">
            <Arrow dir="left" />
          </button>

          <div className="pb-dots">
            {photos.map((p, i) => (
              <span key={p.src} className={i === current ? "on" : ""} />
            ))}
          </div>

          <button type="button" onClick={next} aria-label="Next photo">
            <Arrow dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;