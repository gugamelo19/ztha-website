import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        {/* Próximas seções serão adicionadas aqui:
            <Services />
            <Coverage />
            <Partners />
            <CTA />
        */}
      </main>
    </>
  );
}
