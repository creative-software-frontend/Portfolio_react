import { useEffect, useState } from "react";
import salesImg from "../assets/achievement/1.jpg";
import progImg from "../assets/achievement/2.jpg";
import timeImg from "../assets/achievement/3.jpg";

const photos = [

  {
    src: salesImg,
    alt: "Achievement 2",
    title: "My achievement",
    year: "20XX",
    org: "Organizer name",
    desc: "A short line about what you did and what it meant.",
    tags: ["Tag 1", "Tag 2"],
  },
  {
    src: progImg,
    alt: "Achievement 1",
    title: "Programming Contest Champion",
    year: "2016",
    org: "CSE Festival, Dept. of CSE",
    desc: "Won the programming contest with my team and received the champion trophy.",
    tags: ["Programming", "Champion"],
  },
  {
    src: timeImg,
    alt: "Achievement 3",
    title: "My new achievement",
    year: "20XX",
    org: "Organizer name",
    desc: "A short line about what you did and what it meant.",
    tags: ["Tag 1", "Tag 2"],
  },
];

const stats = [
  { value: "3+", label: "Awards" },
  { value: "2016", label: "First Win" },
  { value: "10+", label: "Contests" },
];

const SHOW_MS = 3000;
const FLIP_MS = 1200;
const STRIPS = 3;

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
      
      <div className="pb-stats">
        {stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="pb-wrap">
        <div className="pb-frame" role="group" aria-label="Achievements gallery">
          <div className="pb-book" style={{ "--n": STRIPS }}>
            <img className="pb-under" src={photos[next].src} alt="" draggable="false" />
            <div
              className={`pb-leaf ${flipping ? "flipping" : ""}`}
              role="img"
              aria-label={photos[current].alt}
            >
              <Strip k={0} src={photos[current].src} root />
            </div>
          </div>
        </div>

        <div className="pb-info" key={current}>
          <span className="pb-year">{photos[current].year}</span>
          <h3>{photos[current].title}</h3>
          <h4>{photos[current].org}</h4>
          <p>{photos[current].desc}</p>
          <div className="pb-tags">
            {photos[current].tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default Experience;