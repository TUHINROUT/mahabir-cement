import Image from "next/image";
import { GALLERY } from "./data";

export default function Gallery() {
  return (
    <section id="plots" className="pb-12 sm:pb-16">
      <div className="container-x">
        <p className="eyebrow">Site Gallery</p>
        <h2 className="h2">Plot &amp; Layout Development</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((src, i) => (
            <div key={src} className="relative h-40 overflow-hidden rounded-xl sm:h-48"><Image src={src} alt={`Plot development site ${i + 1}`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
