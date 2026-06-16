import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";
import Coverage from "@/components/sections/Coverage";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Hero />
        <Services />
        <Partners />
        <Coverage />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
