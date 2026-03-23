import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery from Dr Utkarsha Aesthetics featuring clinic highlights and public personalities who visited the centre."
};

export default function GalleryPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Gallery</p>
          <h1>Clinic Gallery</h1>
          <p>Original gallery visuals sourced from the current live clinic website.</p>
        </div>
        <div className="masonry">
          {gallery.map((item) => (
            <article className="masonry-card" key={item.src}>
              <Image src={item.src} alt={item.title} width={800} height={620} loading="lazy" />
              <div>
                <h2>{item.title}</h2>
                {item.subtitle ? <p>{item.subtitle}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
