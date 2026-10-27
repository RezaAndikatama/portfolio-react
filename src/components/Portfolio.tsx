import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import { portfolios, type PortfolioItem } from "../data/portfolioData";

import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const paginationButtonClass =
  "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm shadow-black/5 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/70 disabled:pointer-events-none disabled:opacity-50 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:opacity-50 dark:border-white/10 dark:bg-cardDark dark:text-gray-200";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].portfolio;

  const prevLabel = language === "id" ? "Sebelumnya" : "Previous";
  const nextLabel = language === "id" ? "Berikutnya" : "Next";

  const openModal = (item: PortfolioItem) => {
    setSelectedProject(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const categories = ["All", "Web App", "UI/UX"];
  const filteredPortfolios = activeFilter === "All" ? portfolios : portfolios.filter((item) => item.category === activeFilter);

  return (
    <>
      <section id="portfolio" ref={ref} aria-labelledby="portfolio-title" className="py-20 px-6 bg-gray-50 dark:bg-[#030304] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-8 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="font-mono text-primary font-semibold tracking-wider mb-2">{t.label}</p>
            <h2 id="portfolio-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white mb-6">
              {t.heading}
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeFilter === category ? "bg-primary text-white shadow-md shadow-primary/30" : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <Swiper
            key={activeFilter}
            modules={[Navigation]}
            navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-4"
          >
            {filteredPortfolios.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                <article
                  className={`bg-white dark:bg-cardDark border border-gray-100 dark:border-white/5 rounded-2xl p-5 h-full flex flex-col shadow-sm hover:shadow-xl dark:shadow-none transition-all hover:-translate-y-1 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionProperty: "opacity, transform, box-shadow", transitionDuration: "700ms", transitionDelay: isInView ? `${index * 100}ms` : "0ms", transitionTimingFunction: "ease-out" }}
                >
                  <img src={item.img} alt={`Preview of ${item.title}`} className="w-full h-48 object-cover rounded-xl mb-5" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{item.desc}</p>

                  <button onClick={() => openModal(item)} className="inline-block text-center text-white bg-primary hover:bg-orange-600 rounded-full py-2 px-6 font-medium transition-colors w-full sm:w-auto">
                    {t.detailButton}
                  </button>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          {filteredPortfolios.length > 1 && (
            <nav role="navigation" aria-label="pagination" className="mx-auto mt-6 flex w-full justify-center">
              <ul className="flex w-full items-center justify-between gap-3">
                <li>
                  <button type="button" className={`btn-prev ${paginationButtonClass}`}>
                    <ChevronLeft className="-ml-1 mr-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                    {prevLabel}
                  </button>
                </li>
                <li>
                  <button type="button" className={`btn-next ${paginationButtonClass}`}>
                    {nextLabel}
                    <ChevronRight className="-mr-1 ml-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </section>

      {/* --- Modal Detail Project (Popup) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 animate-fadeIn" aria-modal="true" role="dialog" onClick={closeModal}>
          <div
            className="bg-white dark:bg-cardDark w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-200 dark:border-white/10 animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gray-50/50 dark:bg-black/20">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{selectedProject.title}</h3>
              <button onClick={closeModal} className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-white/10 text-gray-500 hover:text-white hover:bg-primary transition-colors">
                <i className="bx bx-x text-2xl"></i>
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden space-y-8">
              <div>
                <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="bx bx-file text-primary text-lg"></i> {t.modalDesc}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-100 dark:border-white/5">{selectedProject.desc}</p>
              </div>

              <div>
                <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="bx bx-target-lock text-primary text-lg"></i> CASE & PROBLEM
                </h5>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base bg-orange-50/50 dark:bg-primary/5 p-5 rounded-2xl border border-orange-100 dark:border-primary/10">{selectedProject.problem}</p>
              </div>

              <div>
                <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="bx bx-code-alt text-primary text-lg"></i> {t.modalTechStack}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="font-mono text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="bx bx-images text-primary text-lg"></i> {t.modalGallery}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.images.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 relative group cursor-pointer" onClick={() => setPreviewImage(img)}>
                      <img src={img} alt={`Dokumentasi ${selectedProject.title}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
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

      {/* --- Overlay Preview Gambar Fullscreen --- */}
      {previewImage && (
        <div className="fixed inset-0 z-[200000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn" onClick={() => setPreviewImage(null)}>
          <button className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white transition-colors z-10" onClick={() => setPreviewImage(null)}>
            <i className="bx bx-x text-3xl"></i>
          </button>
          <img src={previewImage} alt="Preview Fullscreen" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-[scaleIn_0.2s_ease-out]" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
