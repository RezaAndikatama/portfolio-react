import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Contact() {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" ref={ref} aria-labelledby="contact-title" className="py-20 px-6 bg-gray-100 dark:bg-[#030304] transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Info kontak — fade + slide dari kiri */}
        <div className={`w-full md:w-1/2 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <p className="font-mono text-primary font-semibold tracking-wider mb-2">{t.label}</p>
          <h2 id="contact-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white mb-8">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{t.paragraph}</p>

          <address className="space-y-4 not-italic">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <i className="bx bx-map-pin"></i>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Central Jakarta</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <i className="bx bx-phone-call"></i>
              </div>
              <a href="tel:+6285718297162" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors">
                +62 851-7823-6304
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <i className="bx bx-envelope"></i>
              </div>
              <a href="mailto:rezaandikatama20@gmail.com" className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors">
                rezaandikatama20@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                <i className="bx bx-globe"></i>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Indonesia</p>
            </div>
          </address>
        </div>

        {/* Form — fade + slide dari kanan, delay agar muncul setelah info kontak */}
        <div className={`w-full md:w-1/2 transition-all duration-700 ease-out delay-150 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white dark:bg-cardDark p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none">
            <div className="mb-4">
              <input
                type="text"
                placeholder={t.formName}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 transition-colors"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder={t.formEmail}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 transition-colors"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows={4}
                placeholder={t.formMessage}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 transition-colors resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-primary/30">
              {t.formSubmit}
            </button>

            <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
              <a
                href="https://github.com/RezaAndikatama"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-primary/10 border border-primary/30 text-primary flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rezandikatama/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-primary/10 border border-primary/30 text-primary flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-primary/10 border border-primary/30 text-primary flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all shadow-sm">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
