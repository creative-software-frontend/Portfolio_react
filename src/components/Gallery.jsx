import { useEffect } from "react";

const modules = import.meta.glob("../assets/photo/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({
    src,
    name: path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]+/g, " "),
  }));

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="gallery-page">
      <div className="gallery-bar">
        <h1>Gallery</h1>
        <span>{images.length} items</span>
      </div>

      {images.length === 0 ? (
        <p className="gallery-empty">
          No photos yet. Add images to <code>src/assets/gallery</code>.
        </p>
      ) : (
        <div className="gallery-grid">
          {images.map((img) => (
            <figure className="gallery-item" key={img.src} tabIndex={0}>
              <div className="gallery-thumb">
                <img src={img.src} alt={img.name} loading="lazy" draggable="false" />
              </div>
              <figcaption>{img.name}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;