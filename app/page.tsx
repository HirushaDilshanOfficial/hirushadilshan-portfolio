import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-[#020817] min-h-screen text-slate-100 selection:bg-indigo-500/30">
      <Navbar />
      
      <div className="relative">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
