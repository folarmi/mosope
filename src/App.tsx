import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Gift, X } from "lucide-react";

// Molecules
import { FeatureCard } from "./components/molecules/FeatureCard";
import { Loader } from "./components/atoms/Loader";

// Organisms
import { Hero } from "./components/organisms/Hero";
import { ShadesOfYouSection } from "./components/organisms/ShadesOfYouSection";
import { SectionHeader } from "./components/molecules/SectionHeader";
import { GallerySection } from "./components/organisms/GallerySection";

export default function App() {
  const herName = "Mosopefoluwa";
  const yourName = "Folasayo";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time / wait for assets essentially
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds minimum for the "celebration" loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <div
        id="top"
        className="relative min-h-screen grain selection:bg-taupe-300 selection:text-white overflow-x-hidden"
      >
        {/* Background glow elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-taupe-100/60 blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-taupe-200/30 blur-[150px]" />
        </div>

        <Navigation
          herName={herName}
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
        />

        <main className="relative z-10">
          <Hero herName={herName} />

          <ShadesOfYouSection />

          <section id="gallery" className="py-24">
            <GallerySection />
          </section>

          {/* Memories / About Us */}
          <section
            id="memories"
            className="py-32 px-5 bg-white/40 border-y border-white/50 backdrop-blur-sm"
          >
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                title="Why We Work"
                subtitle="Friendship isn't just about time passed; it's about the quality of the moments. Here’s why I cherish what we have."
                centered
              />

              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Authenticity"
                  description="No masks. Just us."
                  delay={0.1}
                />
                <FeatureCard
                  title="Support"
                  description="In every season."
                  delay={0.2}
                />
                <FeatureCard
                  title="Growth"
                  description="We don't just exist; we evolve together."
                  delay={0.3}
                />
                <FeatureCard
                  title="Vibes"
                  description="From deep talks to yap sessions."
                  delay={0.4}
                />
                <FeatureCard
                  title="Safe Space"
                  description="A judgment-free zone, always."
                  delay={0.5}
                />
                <FeatureCard
                  title="Consistency"
                  description="Showing up, even when life gets loud."
                  delay={0.6}
                />
              </div>
            </div>
          </section>

          {/* Wish Section */}
          <section
            id="wish"
            className="py-32 px-5 max-w-4xl mx-auto text-center relative"
          >
            <div className="relative z-10 bg-white/60 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-white shadow-2xl shadow-taupe-200/50">
              <SectionHeader title={`Dear ${herName},`} subtitle="" centered />

              <div className="space-y-6 text-lg md:text-xl text-espresso-800 leading-relaxed font-light">
                <p>
                  I hope this year feels like <strong>ease</strong> and{" "}
                  <strong>alignment</strong>. Like doors opening without you
                  forcing them. Like joy that doesn’t ask you to shrink.
                </p>
                <p>
                  Thank you for being you — steady, kind, brilliant. Thank you
                  for letting me be part of your life. I’m proud of you. I’m
                  grateful for you. And I’m always in your corner.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-espresso-900/5">
                <p className="font-serif italic text-2xl text-taupe-500">
                  Happy Birthday, my girl. 🥂✨
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-espresso-900/40 mt-4">
                  From {yourName}
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 text-center text-espresso-900/30 text-sm">
            <p>
              © {new Date().getFullYear()} — Crafted with care for {herName}.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}

// Navigation Component (Molecule)
function Navigation({
  herName,
  isOpen,
  setIsOpen,
}: {
  herName: string;
  isOpen: boolean;
  setIsOpen: any;
}) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 border border-white/50 shadow-soft pointer-events-auto flex items-center gap-8 justify-between min-w-[300px] md:min-w-fit">
          <a
            href="#top"
            className="text-espresso-900 font-bold text-lg tracking-tight hover:text-taupe-400 transition-colors"
          >
            {herName}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-espresso-700">
            <a
              href="#shades"
              className="hover:text-espresso-900 transition-colors"
            >
              Shades Of You
            </a>
            <a
              href="#gallery"
              className="hover:text-espresso-900 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#memories"
              className="hover:text-espresso-900 transition-colors"
            >
              Memories
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#wish"
              className="hidden md:flex bg-espresso-900 text-white p-2 rounded-full hover:bg-espresso-800 transition-colors"
            >
              <Gift size={16} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-espresso-900"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-nude-100/95 backdrop-blur-xl flex items-center justify-center md:hidden"
          >
            <div
              className="flex flex-col gap-8 text-center text-2xl font-serif text-espresso-900"
              onClick={() => setIsOpen(false)}
            >
              <a href="#shades">Shades of You</a>
              <a href="#gallery">Gallery</a>
              <a href="#memories">Memories</a>
              <a href="#wish">Birthday Wish</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
