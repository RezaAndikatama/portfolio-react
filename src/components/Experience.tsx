import { useState } from "react";
import { experienceData, type Experience } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].experience;

  const openModal = (exp: Experience) => {
    setSelectedExp(exp);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedExp(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* --- Bagian Working Period --- */}
      <section id="experience" ref={ref} aria-labelledby="experience-title" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header — fade + slide dari bawah */}
          <div className={`text-center mb-16 md:mb-20 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="font-mono text-primary font-semibold text-xs md:text-sm uppercase tracking-widest">{t.label}</span>
            <h2 id="experience-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white mt-3 tracking-tight">
              {t.heading}
            </h2>
          </div>

          {/* Experience List — layout editorial, garis pemisah tipis, tanpa card box */}
          <div className="divide-y divide-gray-200 dark:divide-white/10 border-t border-b border-gray-200 dark:border-white/10">
            {experienceData.map((exp, index) => (
              <article
                key={exp.id}
                className={`group py-8 md:py-10 flex flex-col md:flex-row gap-5 md:gap-8 items-start transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: isInView ? `${index * 120}ms` : "0ms" }}
              >
                {/* Logo perusahaan */}
                <div className="bg-gray-50 dark:bg-white/5 p-2.5 rounded-lg flex-shrink-0 border border-gray-100 dark:border-white/5">
                  <img src={exp.logo} alt={`${exp.company} Logo`} className="w-10 h-10 object-contain rounded-md" />
                </div>

                {/* Konten */}
                <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                      <span className="font-mono text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">{exp.date}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 text-sm">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden="true"></span>
                      <span className="font-mono text-gray-500 dark:text-gray-400 text-xs">{exp.type}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => openModal(exp)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 group/btn flex-shrink-0"
                  >
                    <span>{t.detailButton}</span>
                    <i className="bx bx-right-arrow-alt text-lg transition-transform group-hover/btn:translate-x-1"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- Bagian Modal Pop-Up --- */}
      {selectedExp && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 animate-fadeIn" aria-modal="true" role="dialog" onClick={closeModal}>
          <div
            className="bg-white dark:bg-cardDark w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-200 dark:border-white/10 animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gray-50/50 dark:bg-black/20">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{selectedExp.role}</h3>
              <button onClick={closeModal} className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-white/10 text-gray-500 hover:text-white hover:bg-primary transition-colors">
                <i className="bx bx-x text-2xl"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8">
              {/* Info Perusahaan */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-2xl border border-gray-100 dark:border-white/5 flex-shrink-0">
                  <img src={selectedExp.logo} alt="Company Logo" className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">{selectedExp.company}</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{selectedExp.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden="true"></span>
                    <span className="font-mono text-xs text-gray-600 dark:text-gray-400">{selectedExp.type}</span>
                  </div>
                </div>
              </div>

              {/* Deskripsi */}
              <div>
                <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="bx bx-briefcase text-primary text-lg"></i> {t.modalDesc}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-100 dark:border-white/5">{selectedExp.desc}</p>
              </div>

              {/* Galeri */}
              <div>
                <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="bx bx-images text-primary text-lg"></i> {t.modalGallery}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedExp.images.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 relative group cursor-pointer">
                      <img src={img} alt="Dokumentasi Pekerjaan" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <i className="bx bx-search-alt-2 text-white text-3xl"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
