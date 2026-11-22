import CityMarquee from "@/components/CityMarquee";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Journey from "@/sections/Journey";
import Industries from "@/sections/Industries";
import License from "@/sections/License";
import Trips from "@/sections/Trips";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CityMarquee />
      <Services />
      <Journey />
      <Industries />
      <License />
      <Trips />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
