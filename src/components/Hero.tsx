import React from "react";
import profileImg from "../assets/formal-transparant.png";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Hero() {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="hero" ref={ref} className="relative w-full overflow-hidden bg-gray-50 dark:bg-[#0b0b0b] transition-colors duration-500 md:min-h-screen md:min-h-[100dvh]">
      <div className="relative z-30 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 md:min-h-screen md:min-h-[100dvh] flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-5 sm:gap-8 md:gap-6 lg:gap-10 pt-28 sm:pt-32 md:pt-24 pb-14 md:py-0">
        {/* === KIRI: Badge & Heading === fade + slide dari bawah, tampil pertama */}
        <div className={`w-full md:w-[48%] lg:w-[45%] flex flex-col items-start gap-4 sm:gap-6 md:gap-8 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-2.5 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-colors shadow-sm">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#FF6B35]" />
            </span>
            {/* Label kecil pakai font-mono, konsisten dengan gaya "01 — PROFIL" */}
            <span className="font-mono text-[9px] sm:text-[11px] md:text-xs text-gray-700 dark:text-gray-300 font-bold tracking-[0.15em] sm:tracking-[0.2em]">{t.badge}</span>
          </div>

          {/* Heading utama pakai font-serif (Newsreader), semibold */}
          <h1 className="font-serif text-[9vw] leading-[1.15] sm:text-4xl md:text-4xl lg:text-5xl xl:text-[52px] sm:leading-[1.3] font-semibold text-gray-900 dark:text-white tracking-tight transition-colors">
            {t.headingLine1} <br className="hidden sm:block" /> {t.headingLine2} <br />
            {/* Subjudul pakai font-serif italic, mengikuti gaya "Software Developer" pada referensi */}
            <span className="font-serif italic text-base sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 block font-normal text-gray-900 dark:text-white">{t.subheading}</span>
          </h1>
        </div>

        {/* === KANAN: Bio & CTA Button === fade + slide dari bawah, delay agar tampil setelah heading */}
        <div className={`w-full md:w-[40%] lg:w-[35%] flex flex-col items-start gap-5 sm:gap-8 transition-all duration-700 ease-out delay-150 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm transition-colors">{t.bio}</p>

          <a href="#portfolio" className="group flex items-center gap-3 sm:gap-4 bg-[#FF6B35] hover:bg-[#e85a25] rounded-full p-1.5 pr-5 sm:p-2 sm:pr-8 w-max transition-all duration-300 shadow-lg shadow-[#FF6B35]/20">
            <div className="bg-white text-[#FF6B35] w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
            <span className="font-mono text-white font-bold text-xs sm:text-base">{t.cta}</span>
          </a>
        </div>
      </div>

      {/* Gambar profil — disembunyikan total di mobile (hidden), baru muncul dari md ke atas
          sebagai layer belakang (absolute) di belakang teks. Fade + slide dari bawah, delay paling akhir. */}
      <div
        className={`hidden md:flex md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto md:h-[75vh] lg:h-[92vh] xl:h-[100vh] md:z-10 md:pointer-events-none justify-center items-end transition-all duration-1000 ease-out delay-300 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Glow oranye bulat di belakang foto, seperti shadow lembut menyebar */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[65%] rounded-full bg-[#FF6B35] opacity-20 dark:opacity-25 blur-[80px] z-0" />

        <img src={profileImg} alt="Reza Andikatama" loading="eager" draggable={false} className="relative z-10 w-auto h-full object-contain object-bottom drop-shadow-2xl" />
      </div>

      <div className="hidden md:block absolute bottom-0 left-0 w-full h-32 lg:h-44 xl:h-56 bg-gradient-to-t from-gray-50 dark:from-[#0b0b0b] to-transparent z-20 pointer-events-none transition-colors duration-500" />
    </section>
  );
}
