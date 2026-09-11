import profileImg from "../assets/profile4.jpg";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function About() {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" ref={ref} aria-labelledby="about-title" className="py-20 px-6 bg-white dark:bg-darkbg transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Konten teks — fade + slide dari kiri */}
        <div className={`w-full md:w-1/2 order-2 md:order-1 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <p className="font-mono text-primary font-semibold tracking-wider mb-2">{t.label}</p>
          <h2 id="about-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white mb-6">
            {t.heading}
          </h2>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            <p>
              {t.paragraph1Before} <span className="text-primary font-semibold">Reza Andikatama</span>
              {t.paragraph1After}
            </p>
            <p>{t.paragraph2}</p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-white/10 text-center bg-gray-50 dark:bg-cardDark p-4 rounded-xl border border-gray-100 dark:border-white/5">
            <div className="px-2">
              <h3 className="text-2xl font-bold text-primary mb-1">4+</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t.statExperience}</p>
            </div>
            <div className="px-2">
              <h3 className="text-2xl font-bold text-primary mb-1">4+</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t.statProjects}</p>
            </div>
            <div className="px-2">
              <h3 className="text-2xl font-bold text-primary mb-1">5+</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t.statTechStack}</p>
            </div>
          </div>
        </div>

        {/* --- Image Content (Modern UI) --- fade + slide dari kanan, delay sedikit agar muncul setelah teks */}
        <div className={`w-full md:w-5/12 order-1 md:order-2 flex justify-center transition-all duration-700 ease-out delay-150 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="relative group w-64 h-80 md:w-80 md:h-96 cursor-pointer">
            {/* 1. Animated Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>

            {/* 2. Main Card Frame (Glassmorphism & Scale) */}
            <div className="relative h-full w-full bg-white dark:bg-cardDark rounded-2xl p-2 border border-gray-200 dark:border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
              {/* 3. Image with Grayscale to Color Transition */}
              <img src={profileImg} alt="Portrait of Reza Andikatama" className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500" />

              {/* Overlay Tipis (Memberikan kedalaman warna saat di-hover) */}
              <div className="absolute inset-x-2 bottom-2 h-1/2 bg-gradient-to-t from-black/50 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            {/* 4. Floating Status Badge */}
            <div className="absolute -bottom-5 left-1/2 bg-white dark:bg-cardDark py-2 px-5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-white/10 flex items-center gap-2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:-translate-x-1/2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200 whitespace-nowrap">{t.openToWork}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
