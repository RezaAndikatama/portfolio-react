import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function About() {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" ref={ref} aria-labelledby="about-title" className="py-20 md:py-28 px-6 bg-white dark:bg-darkbg transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-primary font-semibold text-xs sm:text-sm tracking-wider mb-2">{t.label}</p>
          <h2 id="about-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white">
            {t.heading}
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center transition-all duration-700 delay-200 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="bg-gray-50 dark:bg-cardDark p-6 rounded-3xl border border-gray-100 dark:border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl">
                <i className="bx bx-graduation"></i>
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400">{t.educationLabel}</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.educationDegree}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl">
                <i className="bx bx-map"></i>
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400">{t.locationLabel}</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.locationCity}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base">
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
  