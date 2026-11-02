import { useEffect, useState } from "react";
import salesImg from "../assets/sales-and-marketing.png";
import careerImg from "../assets/software-engineering-career.png";
import timeImg from "../assets/time-management.png";
import updatedImg from "../assets/UpdatedImage.png";

const photos = [
  { src: salesImg, alt: "Achievement 1" },
  { src: careerImg, alt: "Achievement 2" },
  { src: timeImg, alt: "Achievement 3" },
  { src: updatedImg, alt: "Achievement 4" },
];

const SHOW_MS = 3000;
const FLIP_MS = 1200; 
const STRIPS = 1;    

function Strip({ k, src, root }) {
  if (k >= STRIPS) return null;
  const pos = `${(k / (STRIPS - 1)) * 100}% 0`;
  return (
    <div className={root ? "pb-strip pb-leaf-root" : "pb-strip"}>
      <div
        className="pb-face pb-front"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: pos }}
      />
      <div className="pb-face pb-back" />
      <Strip k={k + 1} src={src} />
    </div>
  );
}

function Experience() {
  const n = photos.length;
  const [page, setPage] = useState(0);
  const [instant, setInstant] = useState(false);

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
          <div className="pb-book" style={{ "--n": STRIPS }}>
            <img className="pb-under" src={photos[0].src} alt="" draggable="false" />

            {photos.map((photo, i) => (
              <div
                key={i}
                className={`pb-leaf ${i < page ? "gone" : ""}`}
                style={{ zIndex: n - i + 1 }}
                role="img"
                aria-label={photo.alt}
              >
                <Strip k={0} src={photo.src} root />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;