import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import sistemOperasional from "../assets/sistemoperasional.png";
import cekStatus from "../assets/cekstatus.png";
import dashboard from "../assets/dashboard.png";
import dokumentasiBTM from "../assets/dokBTM.jpeg";
import dokumentasiBTM2 from "../assets/dokBTM2.jpeg";
import thumbnails from "../assets/thumbnail.png";
import ssUI from "../assets/uiux.png";
import thumbnailLMS from "../assets/homelms.png";
import lms1 from "../assets/lms1.png";
import lms2 from "../assets/lms2.png";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

interface PortfolioItem {
  id: number;
  title: string;
  img: string;
  desc: string;
  techStack: string[];
  images: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].portfolio;

  const openModal = (item: PortfolioItem) => {
    setSelectedProject(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  // Catatan: title & desc project masih hardcode Bahasa Indonesia (belum ada versi EN di data ini)
  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      title: "Learning Management System",
      img: thumbnailLMS,
      desc: "Mengembangkan dan men-deploy platform E-Learning berbasis Moodle 5 di lingkungan terkontainerisasi. Proyek ini memecahkan masalah beban server pada aplikasi monolith dengan mendelegasikan tugas asinkron (sistem notifikasi email otomatis) ke microservice Node.js yang berdiri sendiri.",
      techStack: ["Moodle", "Docker", "Node.js", "Nginx"],
      images: [lms1, lms2],
    },
    {
      id: 2,
      title: "Sistem Operasional Bengkel Manufaktur",
      img: sistemOperasional,
      desc: "Sebuah sistem informasi berbasis web yang dirancang khusus untuk mendigitalisasi dan mengoptimalkan proses operasional manajemen PT Briliant Teknik Mandiri. Aplikasi ini dibangun dengan arsitektur modern berbasis container (Docker) untuk memastikan skalabilitas dan stabilitas di lingkungan production, serta didukung oleh pipeline otomatisasi untuk efisiensi pengembangan.",
      techStack: ["Laravel", "Docker", "MySQL", "CI/CD"],
      images: [cekStatus, dashboard, dokumentasiBTM, dokumentasiBTM2],
    },
    {
      id: 3,
      title: "UI/UX Banking Apps",
      img: ssUI,
      desc: "Sebuah konsep ulang pengalaman perbankan digital yang berfokus pada kemudahan pengguna, keamanan, dan pengelolaan finansial yang lebih personal. Proyek ini bertujuan mengubah antarmuka perbankan tradisional yang kaku menjadi lebih ramah, modern, dan intuitif, khususnya bagi milenial dan Gen Z.",
      techStack: ["Figma"],
      images: [ssUI, thumbnails],
    },
    {
      id: 4,
      title: "Company Profile Web",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=600&q=80",
      desc: "Website profil perusahaan modern dengan animasi interaktif dan optimasi SEO tingkat tinggi.",
      techStack: ["Next JS", "Tailwind CSS", "TypeScript"],
      images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?fit=crop&w=800&q=80"],
    },
  ];

  return (
    <>
      <section id="portfolio" ref={ref} aria-labelledby="portfolio-title" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header — fade + slide dari bawah */}
          <div className={`mb-10 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="font-mono text-primary font-semibold tracking-wider mb-2">{t.label}</p>
            <h2 id="portfolio-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white">
              {t.heading}
            </h2>
          </div>

          <Swiper
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
            {portfolios.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                {/* Card — fade + slide dari bawah, muncul stagger berdasarkan urutan slide */}
                <article
                  className={`bg-white dark:bg-cardDark border border-gray-100 dark:border-white/5 rounded-2xl p-5 h-full flex flex-col shadow-sm hover:shadow-xl dark:shadow-none transition-all hover:-translate-y-1 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionProperty: "opacity, transform, box-shadow", transitionDuration: "700ms", transitionDelay: isInView ? `${index * 100}ms` : "0ms", transitionTimingFunction: "ease-out" }}
                >
                  <img src={item.img} alt={`Preview of ${item.title}`} className="w-full h-48 object-cover rounded-xl mb-5" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">{item.desc}</p>
                  <button onClick={() => openModal(item)} className="inline-block text-center text-white bg-primary hover:bg-orange-600 rounded-full py-2 px-6 font-medium transition-colors">
                    {t.detailButton}
                  </button>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              aria-label="Previous slide"
              className="btn-prev w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
            >
              <i className="bx bx-left-arrow-alt text-xl"></i>
            </button>
            <button
              aria-label="Next slide"
              className="btn-next w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
            >
              <i className="bx bx-right-arrow-alt text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      {/* --- Modal Detail Project --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 animate-fadeIn" aria-modal="true" role="dialog" onClick={closeModal}>
          <div
            className="bg-white dark:bg-cardDark w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-200 dark:border-white/10 animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gray-50/50 dark:bg-black/20">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{selectedProject.title}</h3>
              <button onClick={closeModal} className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-white/10 text-gray-500 hover:text-white hover:bg-primary transition-colors">
                <i className="bx bx-x text-2xl"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8">
              {/* Deskripsi */}
              <div>
                <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="bx bx-file text-primary text-lg"></i> {t.modalDesc}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-100 dark:border-white/5">{selectedProject.desc}</p>
              </div>

              {/* Tech Stack */}
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

              {/* Galeri */}
              <div>
                <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="bx bx-images text-primary text-lg"></i> {t.modalGallery}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.images.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 relative group cursor-pointer">
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
    </>
  );
}
