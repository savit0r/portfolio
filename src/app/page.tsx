import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Products from "@/components/Products";
import Blogs from "@/components/Blogs";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="bg-l-bg dark:bg-d-bg bg-notebook-grid min-h-screen transition-colors duration-300 font-sans selection:bg-l-text selection:text-l-surface dark:selection:bg-d-text dark:selection:text-d-surface">
      <CustomCursor />
      <Navbar />
      <div className="w-full flex justify-center mt-32">
        <main className="w-full max-w-3xl px-4 pb-20 flex flex-col gap-4">
          <Hero />
          <About />
          <Projects />
          <Products />
          <Blogs />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
