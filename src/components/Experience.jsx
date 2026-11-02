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

const SHOW_MS = 2000; 
const FLIP_MS = 1100; 

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
          <div className="pb-stage">
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