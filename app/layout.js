import "./globals.css";
import { Poppins, Inter, Caveat } from "next/font/google";

const head = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-head" });
const script = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-script" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Mahavira Traders – Cement, Chips, Sand, TMT Rods & Fly Ash Bricks",
  description: "Premium building materials supplier in Bhubaneswar, Odisha. Cement, stone chips, sand, TMT steel rods and fly ash bricks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${head.variable} ${body.variable} ${script.variable}`}>{children}</body>
    </html>
  );
}
