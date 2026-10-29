import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function About() {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" ref={ref} aria-labelledby="about-title" className="py-20 md:py-28 px-6 bg-white dark:bg-darkbg border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className={`mb-12 md:mb-16 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-primary font-semibold text-xs sm:text-sm tracking-wider mb-2">{t.label}</p>
          <h2 id="about-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white">
            {t.headingPart1} <span className="text-primary">{t.headingPart2}</span>
          </h2>
        </div>

        {/* Content Layout: Grid Minimalis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Kolom Kiri: Narasi Profil (7 Kolom) */}
          <div className={`lg:col-span-7 space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg transition-all duration-700 delay-150 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:mr-1">{t.bioParagraph1}</p>
            <p>{t.bioParagraph2}</p>
          </div>

          {/* Kolom Kanan: Detail Informasi / Quick Facts (5 Kolom) */}
          <div
            className={`lg:col-span-5 bg-gray-50 dark:bg-cardDark p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/10 transition-all duration-700 delay-300 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">/// Quick Info</h3>
            <dl className="space-y-4">
              {t.details.map((item, index) => (
                <div key={index} className="flex flex-col border-b border-gray-200/60 dark:border-white/5 pb-3 last:border-0 last:pb-0">
                  <dt className="font-mono text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">{item.label}</dt>
                  <dd className="font-sans font-medium text-sm md:text-base text-gray-900 dark:text-white mt-0.5">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
