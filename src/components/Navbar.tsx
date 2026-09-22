import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Catatan: key "profile"/href "#about" diganti "services"/"#services",
  // karena section About sudah digantikan Services.
  const menuItems: { key: keyof typeof t; href: string }[] = [
    { key: "home", href: "#hero" },
    { key: "services", href: "#services" },
    { key: "portfolio", href: "#portfolio" },
    { key: "skills", href: "#skills" },
    { key: "experience", href: "#experience" },
    { key: "contact", href: "#contact" },
  ];

  // Scrollspy: pantau tiap section, tandai menu aktif sesuai section yang sedang terlihat di layar
  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linkClass = (href: string) => {
    const isActive = activeSection === href.replace("#", "");
    return `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? "text-primary bg-primary/10" : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-primary"}`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300">
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto glass-nav rounded-2xl px-6 py-3 transition-all duration-300 relative">
        <div className="flex items-center justify-between">
          {/* Logo — kiri */}
          <a href="#hero" className="text-xl font-bold text-gray-900 dark:text-white tracking-tight relative group flex-shrink-0">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>

          {/* Desktop Menu — tengah */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-2">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className={linkClass(item.href)}>
                    {t[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dark Mode + Bahasa — kanan (desktop saja) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button onClick={toggleLanguage} aria-label="Toggle language" className="relative flex items-center w-16 h-9 rounded-full bg-gray-200 dark:bg-white/10 p-1 transition-colors">
              <span className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white dark:bg-cardDark shadow-sm transition-transform duration-300 ${language === "en" ? "translate-x-7" : "translate-x-0"}`}></span>
              <span className={`relative z-10 w-1/2 text-center text-[10px] font-bold transition-colors ${language === "id" ? "text-primary" : "text-gray-500 dark:text-gray-400"}`}>ID</span>
              <span className={`relative z-10 w-1/2 text-center text-[10px] font-bold transition-colors ${language === "en" ? "text-primary" : "text-gray-500 dark:text-gray-400"}`}>EN</span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-all"
            >
              <i className={isDark ? "bx bx-sun text-lg" : "bx bx-moon text-lg"}></i>
            </button>
          </div>

          {/* Mobile: hanya tombol hamburger — dark mode & bahasa dipindah ke dalam dropdown */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white"
            >
              <i className={isMenuOpen ? "bx bx-x text-2xl" : "bx bx-menu text-2xl"}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown — menu + dark mode + bahasa */}
        {isMenuOpen && (
          <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-gray-200 dark:border-white/10 lg:hidden">
            {menuItems.map((item) => (
              <a key={item.key} href={item.href} onClick={() => setIsMenuOpen(false)} className={linkClass(item.href)}>
                {t[item.key]}
              </a>
            ))}

            {/* Dark Mode + Bahasa — dalam dropdown mobile */}
            <div className="flex items-center justify-between gap-3 mt-2 pt-4 border-t border-gray-200 dark:border-white/10">
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">{language === "id" ? "Pengaturan" : "Settings"}</span>
              <div className="flex items-center gap-3">
                <button onClick={toggleLanguage} aria-label="Toggle language" className="relative flex items-center w-16 h-9 rounded-full bg-gray-200 dark:bg-white/10 p-1 transition-colors">
                  <span className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white dark:bg-cardDark shadow-sm transition-transform duration-300 ${language === "en" ? "translate-x-7" : "translate-x-0"}`}></span>
                  <span className={`relative z-10 w-1/2 text-center text-[10px] font-bold transition-colors ${language === "id" ? "text-primary" : "text-gray-500 dark:text-gray-400"}`}>ID</span>
                  <span className={`relative z-10 w-1/2 text-center text-[10px] font-bold transition-colors ${language === "en" ? "text-primary" : "text-gray-500 dark:text-gray-400"}`}>EN</span>
                </button>

                <button onClick={toggleTheme} aria-label="Toggle dark mode" className="w-10 h-9 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white hover:text-primary transition-all">
                  <i className={isDark ? "bx bx-sun text-lg" : "bx bx-moon text-lg"}></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
