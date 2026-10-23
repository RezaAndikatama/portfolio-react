import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ExperienceSection from "./components/Experience";
import Contact from "./components/Contact";
import { LanguageProvider } from "./context/LanguageContext";
import { KineticTypographyLoader } from "./components/LoadingAnimation";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  useEffect(() => {
    // 1 siklus kata = 3000ms. Untuk 3 kata butuh waktu sekitar 8-9 detik.
    // Fade out dimulai pada detik ke-8 saat kata "WELCOME" sedang tampil penuh.
    const timer1 = setTimeout(() => {
      setFadeSplash(true);
    }, 8000);

    const timer2 = setTimeout(() => {
      setShowSplash(false);
    }, 8700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-gray-50 text-gray-800 dark:bg-darkbg dark:text-gray-200 font-sans antialiased transition-colors duration-300 relative overflow-x-hidden min-h-screen">
        {/* Splash Screen Component */}
        {showSplash && (
          <div className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black transition-all duration-700 ease-in-out ${fadeSplash ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100"}`}>
            <KineticTypographyLoader />
          </div>
        )}

        {/* Ambient background glow elements */}
        <div className="fixed top-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[100px] opacity-60 pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] opacity-60 pointer-events-none -z-10"></div>

        <Navbar />

        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Skills />
          <ExperienceSection />
          <Contact />
        </main>

        <div className="px-6 pb-6 pt-0 bg-gray-100 dark:bg-[#030304] transition-colors duration-300">
          <footer className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-[#fb6a27] via-[#ff5100] to-[#fb6a27] py-6 px-4 shadow-lg">
            <p className="text-white text-sm text-center font-medium">Copyright &copy; 2026 Reza Andikatama. All Right Reserved</p>
          </footer>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
