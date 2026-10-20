import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <WhyChoose />
        <Projects />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
