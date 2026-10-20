import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL, WHATSAPP, NAV, PRODUCTS } from "./data";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-dark text-gray-300">
      <div className="container-x grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-0">
        <div className="lg:pr-10">
          <Image src="/images/logo.jpeg" alt="Mahavira Traders" width={160} height={107} className="h-[84px] w-auto rounded-lg bg-white object-contain" />
          <p className="mt-4 max-w-[300px] text-sm leading-relaxed">Your trusted partner for quality building materials and construction supply.</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, MessageCircle, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href={i === 1 ? WHATSAPP : "#"} aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-lg border border-gray-600 text-white transition hover:border-brand hover:bg-brand"><Icon size={16} /></a>
            ))}
          </div>
        </div>
        <div className="lg:border-l lg:border-gray-700 lg:pl-10"><h4 className="mb-4 text-[15px] font-bold text-white">Quick Links</h4><ul className="space-y-2.5 text-sm">{NAV.map((n) => <li key={n.href}><a href={n.href} className="transition hover:text-white">{n.label}</a></li>)}</ul></div>
        <div className="lg:border-l lg:border-gray-700 lg:pl-10"><h4 className="mb-4 text-[15px] font-bold text-white">Our Products</h4><ul className="space-y-2.5 text-sm">{PRODUCTS.map((p) => <li key={p.name}><a href="#products" className="transition hover:text-white">{p.name}</a></li>)}</ul></div>
        <div className="lg:border-l lg:border-gray-700 lg:pl-10">
          <h4 className="mb-4 text-[15px] font-bold text-white">Contact Us</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-center gap-3"><Phone size={16} className="text-white" /><a href={PHONE_LINK}>{PHONE}</a></li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-white" /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-white" />Bhubaneswar, Odisha</li>
          </ul>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red mt-5 px-6"><MessageCircle size={16} /> WhatsApp Us</a>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} M/S Mahavira Traders. All rights reserved.</div>
    </footer>
  );
}
