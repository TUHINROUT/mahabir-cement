import { Gem, Truck, IndianRupee, Headset, Smile, Building2, Handshake, MapPin } from "lucide-react";

const FEATURES = [
  { icon: Gem, a: "Premium", b: "Quality Products" },
  { icon: Truck, a: "On-Time", b: "Delivery" },
  { icon: IndianRupee, a: "Best Market", b: "Prices" },
  { icon: Headset, a: "Experienced", b: "Support Team" },
];
const STATS = [
  { icon: Smile, n: "500+", l: "Happy Customers" },
  { icon: Building2, n: "50+", l: "Projects Supplied" },
  { icon: Handshake, n: "10+", l: "Years of Experience" },
  { icon: MapPin, n: "Wide", l: "Service Network" },
];

export default function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-24 py-10 sm:py-12">
      <div className="container-x grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr_1fr]">
        <div>
          <p className="eyebrow">Why Choose Mahavira Traders</p>
          <h2 className="h2 lg:text-[36px]">Your Reliable Partner in <span className="text-brand">Construction</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {FEATURES.map(({ icon: Icon, a, b }) => (
            <div key={a} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-4">
              <Icon className="shrink-0 text-brand" size={34} strokeWidth={1.5} />
              <div className="text-[11px] leading-tight text-gray-600"><b className="block text-[13px] text-dark">{a}</b>{b}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 rounded-xl bg-cream p-5 shadow-sm">
          {STATS.map(({ icon: Icon, n, l }) => (
            <div key={l} className="flex items-center gap-2.5">
              <Icon className="shrink-0 text-brand" size={32} strokeWidth={1.6} />
              <div className="leading-tight"><b className="block text-lg font-extrabold">{n}</b><span className="text-[10px] text-gray-600">{l}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
