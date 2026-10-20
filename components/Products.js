import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "./data";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Our Products</p><h2 className="h2">High-Quality <span className="text-brand">Construction Materials</span></h2></div>
          <a href="#products" className="btn-outline">View All Products <ArrowRight size={14} /></a>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((p, i) => (
            <article key={p.name} className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lg ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
              <div className="relative h-32 sm:h-[142px]"><Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 20vw, 50vw" className="object-cover" /></div>
              <div className="flex items-start justify-between gap-2 p-3.5">
                <div><h3 className="text-[15px] font-bold">{p.name}</h3><p className="mt-1 text-[11px] leading-snug text-gray-500">{p.desc}</p></div>
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand text-brand"><ArrowRight size={13} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
