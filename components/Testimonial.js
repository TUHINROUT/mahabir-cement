"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { TESTIMONIALS, WHATSAPP } from "./data";

export default function Testimonial() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d) => setI((i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  return (
    <section id="testimonials" className="py-10 sm:py-12">
      <div className="container-x grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow">What Our Customers Say</p>
          <h2 className="h2">Trusted by <span className="text-brand">Builders &amp; Homeowners</span></h2>
          <div className="mt-6 flex flex-col items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-card sm:flex-row sm:items-center sm:gap-5">
            <div className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-brand text-2xl font-bold text-white ring-4 ring-red-50">{t.name[0]}</div>
            <div className="flex-1">
              <div className="flex gap-3">
                <span className="font-[family-name:var(--font-head)] text-5xl font-extrabold leading-[0.8] text-brand">“</span>
                <p className="text-[13px] leading-relaxed text-gray-700">{t.text}</p>
              </div>
              <p className="mt-3 pl-9 text-sm font-bold">{t.name}</p>
              <p className="pl-9 text-xs text-gray-500">{t.role}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => go(-1)} aria-label="Previous" className="grid h-8 w-8 place-items-center rounded-full border border-gray-300 text-brand hover:bg-brand hover:text-white"><ArrowLeft size={15} /></button>
              <button onClick={() => go(1)} aria-label="Next" className="grid h-8 w-8 place-items-center rounded-full border border-gray-300 text-brand hover:bg-brand hover:text-white"><ArrowRight size={15} /></button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-dark via-brand to-brand-dark p-8 text-white lg:pl-12">
          <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-40 bg-black/10 [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)] lg:block" />
          <h3 className="relative text-2xl font-extrabold leading-snug lg:text-[26px]">Get the Best Construction<br className="hidden lg:block" /> Materials for Your Next Project</h3>
          <p className="relative mt-2 text-sm text-white/90">Quality. Reliability. Stronger Relationships.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold relative mt-5 w-fit"><FileText size={16} /> Get a Quote Now <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
