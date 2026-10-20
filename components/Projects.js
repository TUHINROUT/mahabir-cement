import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { PROJECTS } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-10 sm:py-12">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Featured Projects</p><h2 className="h2">Building a Better Tomorrow</h2></div>
          <a href="#projects" className="btn-outline">View All Projects <ArrowRight size={14} /></a>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-[275fr_243fr_275fr]">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className="relative h-48 lg:h-[185px]"><Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" /></div>
              <div className="px-4 py-3"><h3 className="text-[15px] font-bold">{p.title}</h3><p className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-600"><MapPin size={14} className="text-brand" />{p.place}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
