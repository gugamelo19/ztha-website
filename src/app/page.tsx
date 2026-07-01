import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Partners from "@/components/sections/Partners";
import Coverage from "@/components/sections/Coverage";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="servicos"><Services /></div>
        <Stats />
        <div id="parceiros"><Partners /></div>
        <div id="cobertura"><Coverage /></div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
