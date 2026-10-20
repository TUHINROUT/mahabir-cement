import Image from "next/image";
import { ArrowRight, FileText, ShieldCheck, Truck, IndianRupee, Users } from "lucide-react";
import { WHATSAPP } from "./data";

const BADGES = [
  { icon: ShieldCheck, a: "Premium", b: "Quality Materials" },
  { icon: Truck, a: "Timely", b: "Delivery" },
  { icon: IndianRupee, a: "Competitive", b: "Pricing" },
  { icon: Users, a: "Trusted", b: "by Builders" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* full-width photo */}
      <Image src="/images/hero.jpg" alt="Construction materials at a building site" fill priority sizes="100vw" className="object-cover object-[75%_center]" />
      {/* white fade behind the text */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:from-white lg:via-white/80 lg:via-[38%] lg:to-transparent lg:to-[62%]" />

      {/* red + gold diagonal on the right */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute inset-y-0 right-0 w-[24%] bg-brand/90 [clip-path:polygon(60%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[24%] bg-gold [clip-path:polygon(60%_0,64%_0,4%_100%,0_100%)]" />
      </div>
      <p className="pointer-events-none absolute right-[3%] top-[12%] z-10 hidden -rotate-[14deg] font-[family-name:var(--font-script)] text-3xl leading-[1.05] text-white xl:block 2xl:text-4xl">
        Building<br />Homes<br /><span className="text-gold">Building</span><br />Trust
      </p>

      <div className="container-x relative z-10 flex min-h-[500px] flex-col justify-center py-12 lg:min-h-[543px]">
        <div className="max-w-[560px]">
          <p className="eyebrow">Quality building materials for a stronger tomorrow</p>
          <h1 className="mt-3 text-[40px] font-extrabold leading-[1.05] sm:text-5xl lg:text-[56px]">
            Build Strong.<br />Build with <span className="text-brand">Mahavira.</span>
          </h1>
          <p className="mt-4 max-w-[470px] text-sm leading-relaxed text-gray-800 sm:text-[15px]">
            Your trusted partner for premium quality building materials and construction supply. Cement, Chips, Sand, Rod, Fly Ash Bricks – everything you need for a stronger and better tomorrow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="btn-red px-6">View Our Products <ArrowRight size={16} /></a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold px-6"><FileText size={17} /> Get a Quote</a>
          </div>
        </div>
        <div className="mt-8 grid max-w-[640px] grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          {BADGES.map(({ icon: Icon, a, b }) => (
            <div key={a} className="flex items-center gap-2.5">
              <Icon className="shrink-0 text-brand" size={30} />
              <span className="text-[11px] font-semibold leading-tight text-dark">{a}<br />{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
