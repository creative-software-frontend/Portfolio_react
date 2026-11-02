import { useEffect, useState } from "react";
import salesImg from "../assets/achievement/1 (4).jpeg";
import careerImg from "../assets/achievement/3.jpg";
import timeImg from "../assets/achievement/FB_IMG_1509003226633.jpg";

const photos = [
  { src: salesImg, alt: "Achievement 1" },
  { src: careerImg, alt: "Achievement 2" },
  { src: timeImg, alt: "Achievement 3" },
];

const SHOW_MS = 3000; // how long each photo stays
const FLIP_MS = 1200; // must match the 1.2s in the CSS
const STRIPS = 3;    // 1 = flat flip, 8-12 = curved page

function Strip({ k, src, root }) {
  if (k >= STRIPS) return null;
  return (
    <div className={root ? "pb-strip pb-leaf-root" : "pb-strip"}>
      <div className="pb-face pb-front">
        <img src={src} alt="" draggable="false" style={{ left: `${-k * 100}%` }} />
      </div>
      <div className="pb-face pb-back" />
      <Strip k={k + 1} src={src} />
    </div>
  );
}

function Experience() {
  const n = photos.length;
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const next = (current + 1) % n;

  // hold the current photo, then start the flip
  useEffect(() => {
    const t = setTimeout(() => setFlipping(true), SHOW_MS);
    return () => clearTimeout(t);
  }, [current]);

  // when the flip ends, move to the next photo and put the page back flat
  useEffect(() => {
    if (!flipping) return;
    const t = setTimeout(() => {
      setCurrent((c) => (c + 1) % n);
      setFlipping(false);
    }, FLIP_MS);
    return () => clearTimeout(t);
  }, [flipping, n]);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-ribbon">
        <span>ACHIEVEMENTS</span>
      </div>

      <div className="pb-wrap">
        <div className="pb-frame" role="group" aria-label="Achievements gallery">
          <div className="pb-book" style={{ "--n": STRIPS }}>
            {/* underneath: the next photo */}
            <img className="pb-under" src={photos[next].src} alt="" draggable="false" />

            {/* the page that turns away: the current photo */}
            <div
              className={`pb-leaf ${flipping ? "flipping" : ""}`}
              role="img"
              aria-label={photos[current].alt}
            >
              <Strip k={0} src={photos[current].src} root />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;