"use client";
import { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { NAV, PRODUCTS, PHONE, PHONE_LINK, WHATSAPP } from "./data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 overflow-visible bg-white shadow-sm">
      {/* yellow corner stripe (top-right), continues into hero */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[8%] bg-gold [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)] xl:block" />
      <div className="container-x relative flex h-[76px] items-center justify-between gap-3 lg:h-[100px]">
        <a href="#home" className="shrink-0">
          <Image src="/images/logo.jpeg" alt="M/S Mahavira Traders" width={150} height={100} priority className="h-[64px] w-auto scale-[1.12] object-contain lg:h-[96px]" />
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n, i) => (
            <div key={n.href} className="group relative">
              <a href={n.href} className={`flex items-center gap-1 border-b-2 py-1 text-[15px] font-medium transition hover:text-brand ${i === 0 ? "border-brand text-brand" : "border-transparent text-dark"}`}>
                {n.label}{n.sub && <ChevronDown size={14} />}
              </a>
              {n.sub && (
                <div className="invisible absolute left-0 top-full w-48 rounded-lg border bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {PRODUCTS.map((p) => <a key={p.name} href="#products" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-brand">{p.name}</a>)}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="relative hidden items-center gap-5 md:flex">
          <a href={PHONE_LINK} className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white shadow"><Phone size={20} /></span>
            <span className="leading-tight"><span className="block text-xs text-gray-500">Call Us Now</span><span className="text-[17px] font-extrabold">{PHONE}</span></span>
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red"><MessageCircle size={17} /> WhatsApp Us</a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <a href={PHONE_LINK} aria-label="Call" className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Phone size={18} /></a>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-lg border lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {NAV.map((n) => (<a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2.5 font-medium hover:bg-gray-50">{n.label}</a>))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red mt-2 w-fit"><MessageCircle size={16} /> WhatsApp Us</a>
          </div>
        </div>
      )}
    </header>
  );
}
