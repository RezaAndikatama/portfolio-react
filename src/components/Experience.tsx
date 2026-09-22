import { useState } from "react";
import { experienceData, type Experience } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

// Helper gabung className kondisional — pengganti `cn` dari shadcn/lib-utils,
// karena project ini tidak pakai path alias "@/lib/utils".
function cx(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [activeId, setActiveId] = useState<string>(experienceData[0]?.id ?? "");
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
        <div className="max-w-5xl mx-auto">
          {/* Section Header — fade + slide dari bawah */}
          <div className={`text-center mb-16 md:mb-20 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="font-mono text-primary font-semibold text-xs md:text-sm uppercase tracking-widest">{t.label}</span>
            <h2 id="experience-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white mt-3 tracking-tight">
              {t.heading}
            </h2>
          </div>

          {/* Elastic Accordion Gallery — panel melebar saat di-hover/klik, mengadaptasi konsep elastic-gallery */}
          <div className={`flex h-[420px] sm:h-[460px] md:h-[520px] w-full flex-col gap-2 md:flex-row md:gap-4 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {experienceData.map((exp, index) => {
              const isActive = activeId === exp.id;
              return (
                <div
                  key={exp.id}
                  onMouseEnter={() => setActiveId(exp.id)}
                  onClick={() => setActiveId(exp.id)} // dukungan sentuh di mobile
                  className={cx(
                    "group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-900",
                    "transition-[flex,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isActive ? "flex-[4]" : "flex-[1]",
                    isActive ? "brightness-100" : "brightness-[.6] hover:brightness-90",
                  )}
                >
                  {/* Layer latar: gradient gelap + logo raksasa transparan sebagai elemen dekoratif
                      (pengganti foto asli, karena data pengalaman hanya punya logo, bukan foto full-bleed) */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950" />
                    <img src={exp.logo} alt="" aria-hidden="true" className={cx("absolute inset-0 m-auto h-1/2 w-1/2 object-contain opacity-10 transition-transform duration-1000", isActive ? "scale-100" : "scale-110")} />
                    <div className={cx("absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500", isActive ? "opacity-100" : "opacity-70")} />
                  </div>

                  {/* Konten */}
                  <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-4 md:p-8">
                    {/* Konten aktif: role, badge, deskripsi singkat, tombol Detail */}
                    <div className={cx("flex flex-col gap-2 transition-all duration-500", isActive ? "translate-y-0 opacity-100 delay-200" : "translate-y-12 opacity-0")}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/30 bg-white/10 px-2 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-white backdrop-blur-md md:px-3 md:text-xs">{exp.type}</span>
                        <span className="rounded-full border border-primary/40 bg-primary/20 px-2 py-1 text-[10px] font-mono font-medium text-white backdrop-blur-md md:px-3 md:text-xs">{exp.date}</span>
                      </div>

                      <h3 className="font-serif text-xl font-semibold leading-tight text-white md:text-3xl">{exp.role}</h3>
                      <p className="text-xs font-medium text-white/70 md:text-sm">{exp.company}</p>

                      <p className="hidden md:block text-xs text-white/60 leading-relaxed line-clamp-2 max-w-md mt-1">{exp.desc}</p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(exp);
                        }}
                        className="mt-2 flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-primary transition-colors md:mt-4 md:text-sm"
                      >
                        {t.detailButton}
                        <i className="bx bx-right-arrow-alt text-base -rotate-45"></i>
                      </button>
                    </div>

                    {/* Konten tidak aktif: nama perusahaan vertikal (desktop) / nomor urut (mobile) */}
                    <div className={cx("absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 transition-all duration-500", isActive ? "opacity-0 scale-50" : "opacity-100 delay-300")}>
                      <span className="hidden whitespace-nowrap text-sm font-bold uppercase tracking-widest text-white [writing-mode:vertical-rl] md:block">{exp.company}</span>
                      <span className="block text-xs font-bold text-white md:hidden">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
