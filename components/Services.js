import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "./data";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#F6F7F9]">
      <div className="grid lg:grid-cols-[32%_1fr]">
        <div className="bg-gradient-to-br from-brand-dark via-brand to-brand-dark px-6 py-10 text-white sm:px-10 lg:py-12 lg:pl-[max(72px,calc((100vw-1296px)/2))] lg:pr-20 lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]">
          <p className="text-xs font-bold uppercase tracking-wide text-gold">Our Services</p>
          <h2 className="mt-2 text-[26px] font-extrabold leading-tight sm:text-[30px]">Complete Material Supply &amp; Support for Your Construction</h2>
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/90">From residential to commercial projects, we provide end-to-end material supply and support services to help you build with confidence.</p>
          <a href="#services" className="btn-gold mt-6">Our Services <ArrowRight size={16} /></a>
        </div>
        <div className="grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 xl:grid-cols-4 xl:pl-2 xl:pr-[max(32px,calc((100vw-1296px)/2))]">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="relative overflow-hidden rounded-xl bg-white p-3 shadow-card">
              <div className="relative h-[130px] overflow-hidden rounded-lg"><Image src={s.image} alt={s.title} fill sizes="(min-width:1280px) 18vw, (min-width:640px) 40vw, 100vw" className="object-cover" /></div>
              <h3 className="relative z-10 mt-3 text-[15px] font-bold leading-snug">{s.title}</h3>
              <p className="relative z-10 mt-1 max-w-[130px] text-[11px] leading-snug text-gray-500">{s.desc}</p>
              <span className="pointer-events-none absolute -bottom-2 right-3 text-6xl font-extrabold leading-none text-gray-100">0{i + 1}</span>
              <div className="h-8" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
