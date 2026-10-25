import { Contact } from "@/src/components/Contact";
import { Currently } from "@/src/components/Currently";
import { Hero } from "@/src/components/Hero";
import { Introduction } from "@/src/components/Introduction";
import { Navbar } from "@/src/components/Navbar";
import { Projects } from "@/src/components/Projects";
import { Experience } from "@/src/components/Experience";
import { Research } from "@/src/components/Research";
import { Achievements } from "@/src/components/Achievements";

export default function Home() {
  return (
    <div className="site-shell min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Experience />
        <Projects />
        <Research />
        <Currently />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
