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
import noka1 from "../assets/noka1.png";
import noka2 from "../assets/noka2.png";
import noka3 from "../assets/noka3.png";
import wasirThumb from "../assets/wasitThumbnail.png";
import wasir1 from "../assets/Wasircore - Home Page.png";
import wasir2 from "../assets/Wasircore - Layanan.png";
import wasir3 from "../assets/Wasircore - About Us.png";
import wasir4 from "../assets/Wasircore - Blog Edukasi Kesehatan.png";
import wasir5 from "../assets/Wasircore - Contact Us.png";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

// 1. Tambahkan 'category' ke dalam interface
interface PortfolioItem {
  id: number;
  title: string;
  img: string;
  desc: string;
  techStack: string[];
  images: string[];
  category: string;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  // 2. Tambahkan state untuk filter aktif
  const [activeFilter, setActiveFilter] = useState<string>("All");

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

  // 3. Tambahkan data 'category' pada masing-masing item
  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      title: "Learning Management System",
      img: thumbnailLMS,
      desc: "Mengembangkan dan men-deploy platform E-Learning berbasis Moodle 5 di lingkungan terkontainerisasi. Proyek ini memecahkan masalah beban server pada aplikasi monolith dengan mendelegasikan tugas asinkron (sistem notifikasi email otomatis) ke microservice Node.js yang berdiri sendiri.",
      techStack: ["Moodle", "Docker", "Node.js", "Nginx"],
      images: [lms1, lms2],
      category: "DevOps",
    },
    {
      id: 2,
      title: "Sistem Operasional Bengkel Manufaktur",
      img: sistemOperasional,
      desc: "Sebuah sistem informasi berbasis web yang dirancang khusus untuk mendigitalisasi dan mengoptimalkan proses operasional manajemen PT Briliant Teknik Mandiri. Aplikasi ini dibangun dengan arsitektur modern berbasis container (Docker) untuk memastikan skalabilitas dan stabilitas di lingkungan production, serta didukung oleh pipeline otomatisasi untuk efisiensi pengembangan.",
      techStack: ["Laravel", "Docker", "MySQL", "CI/CD"],
      images: [cekStatus, dashboard, dokumentasiBTM, dokumentasiBTM2],
      category: "Web App",
    },
    {
      id: 3,
      title: "Banking App UI",
      img: ssUI,
      desc: "Sebuah konsep ulang pengalaman perbankan digital yang berfokus pada kemudahan pengguna, keamanan, dan pengelolaan finansial yang lebih personal. Proyek ini bertujuan mengubah antarmuka perbankan tradisional yang kaku menjadi lebih ramah, modern, dan intuitif, khususnya bagi milenial dan Gen Z.",
      techStack: ["Figma"],
      images: [ssUI, thumbnails],
      category: "UI/UX",
    },
    {
      id: 4,
      title: "Noka UI",
      img: noka1,
      desc: "Sebelumnya, calon jemaah sering kali kesulitan mendapatkan informasi perjalanan umrah yang kredibel dan detail karena keterbatasan platform digital yang usang serta tidak interaktif. Masalah ini diselesaikan melalui pengembangan landing page modern yang tidak hanya informatif, tetapi juga dilengkapi dengan navigasi interaktif, optimasi SEO tingkat tinggi untuk memperluas jangkauan, serta visualisasi yang mempermudah proses pengambilan keputusan jemaah secara aman dan nyaman..",
      techStack: ["Figma", "Tailwind CSS", "HTML"],
      images: [noka1, noka2, noka3],
      category: "UI/UX",
    },
    {
      id: 5,
      title: "Wasircore UI",
      img: wasirThumb,
      desc: "Menghadapi tantangan rendahnya kesadaran dan tingginya rasa cemas masyarakat dalam mencari pengobatan medis yang aman untuk penyakit sensitif seperti wasir, proyek ini merevolusi platform edukasi dan layanan kesehatan digital. Melalui pendekatan desain UI yang ramah, intuitif, dan bebas intimidasi, kami memecahkan masalah aksesibilitas informasi medis dengan menghadirkan visualisasi yang menenangkan, fitur konsultasi cepat, serta hierarki konten yang efektif guna membangun rasa percaya dan mempercepat konversi pasien.  ",
      techStack: ["Figma", "Tailwind CSS", "HTML"],
      images: [wasir1, wasir2, wasir3, wasir4, wasir5],
      category: "UI/UX",
    },
  ];

  // 4. Buat array kategori unik dari data portfolio
  const categories = ["All", "Web App", "UI/UX", "DevOps"];

  // 5. Filter data berdasarkan kategori yang dipilih
  const filteredPortfolios = activeFilter === "All" ? portfolios : portfolios.filter((item) => item.category === activeFilter);

  return (
    <>
      <section id="portfolio" ref={ref} aria-labelledby="portfolio-title" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-8 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="font-mono text-primary font-semibold tracking-wider mb-2">{t.label}</p>
            <h2 id="portfolio-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white mb-6">
              {t.heading}
            </h2>

            {/* Button Filter */}
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
            {/* Menggunakan data yang sudah di-filter (filteredPortfolios) */}
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">{item.desc}</p>
                  <button onClick={() => openModal(item)} className="inline-block text-center text-white bg-primary hover:bg-orange-600 rounded-full py-2 px-6 font-medium transition-colors">
                    {t.detailButton}
                  </button>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigasi Swiper disembunyikan jika hasil filter kurang dari atau sama dengan jumlah item per view di desktop (opsional) */}
          {filteredPortfolios.length > 1 && (
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
          )}
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
