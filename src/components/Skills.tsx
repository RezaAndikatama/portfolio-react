import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

function FigmaIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 38 57" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5S38 23.253 38 28.5 33.747 38 28.5 38 19 33.747 19 28.5z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5S0 52.747 0 47.5z" fill="#0ACF83" />
      <path d="M19 0v19h9.5C33.747 19 38 14.747 38 9.5S33.747 0 28.5 0H19z" fill="#FF7262" />
      <path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fill="#A259FF" />
    </svg>
  );
}

const ORANGE_FILTER = "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(101%) contrast(101%)";

const WAVE_INTERVAL = 4000;
const WAVE_STAGGER = 0.06;
const WIPE_DURATION = 0.9;
const WIPE_TIMES = [0, 0.4, 1] as number[];

const SKILL_CATEGORIES = [
  {
    role: "Web Developer",
    skills: [
      { id: "html", name: "HTML5", icon: "devicon-html5-plain" },
      { id: "css", name: "CSS3", icon: "devicon-css3-plain" },
      { id: "js", name: "JavaScript", icon: "devicon-javascript-plain" },
      { id: "php", name: "PHP", icon: "devicon-php-plain" },
      { id: "react", name: "React", icon: "devicon-react-original" },
      { id: "tailwind", name: "Tailwind", icon: "devicon-tailwindcss-plain" },
      { id: "bootstrap", name: "Bootstrap", icon: "devicon-bootstrap-plain" },
      { id: "laravel", name: "Laravel", icon: "devicon-laravel-plain" },
      { id: "mysql", name: "MySQL", icon: "devicon-mysql-plain" },
      { id: "github", name: "GitHub", icon: "bx bxl-github" },
      { id: "docker", name: "Docker", icon: "bx bxl-docker" },
    ],
  },
  {
    role: "UI/UX Design",
    skills: [
      { id: "figma", name: "Figma", icon: "figma" }, // Figma menggunakan SVG kustom
    ],
  },
  {
    role: "QA Manual",
    skills: [
      { id: "postman", name: "Postman", icon: "bx bx-server" }, // Contoh boxicon
      { id: "manual", name: "Manual Test", icon: "bx bx-check-shield" }, // Contoh boxicon
    ],
  },
];

export default function Skills() {
  const { ref, isInView } = useInView();
  const [waving, setWaving] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].skills;

  useEffect(() => {
    const id = setInterval(() => setWaving(true), WAVE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  // Hitung total semua skill agar animasi wave tahu kapan item terakhir selesai
  const totalSkills = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  let globalIndex = 0; // Index global untuk jeda animasi (stagger)

  return (
    <section id="skills" ref={ref} aria-labelledby="skills-title" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 bg-gray-100 dark:bg-[#030304] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Dinamis */}
        <div className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-primary font-semibold text-xs sm:text-sm tracking-wider mb-2">{t.label}</p>
          <h2 id="skills-title" className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white">
            {t.headingPart1} <span className="text-primary">{t.headingPart2}</span>
          </h2>
        </div>

        {/* Grid Pengelompokan Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div
              key={category.role}
              className={`bg-white dark:bg-cardDark/50 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/5 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: isInView ? `${catIndex * 150}ms` : "0ms" }}
            >
              {/* Judul Kategori (Role) */}
              <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-white/10 pb-3">{category.role}</h3>

              {/* Container Icon dalam Kategori */}
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => {
                  const currentIndex = globalIndex++; // Index terus bertambah melewati batas kategori
                  const isFigma = skill.name === "Figma";
                  const isLast = currentIndex === totalSkills - 1;

                  return (
                    <div key={skill.id} className="flex flex-col items-center gap-2 px-1 transition-all duration-500 ease-out">
                      <div className="group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(255,107,53,0.5)]">
                        <motion.div
                          animate={
                            waving
                              ? {
                                  clipPath: ["inset(0 0% 0 0)", "inset(0 100% 0 0)", "inset(0 0% 0 0)"],
                                  filter: ["blur(0px)", "blur(6px)", "blur(0px)"],
                                  opacity: [1, 0.3, 1],
                                }
                              : { clipPath: "inset(0 0% 0 0)", filter: "blur(0px)", opacity: 1 }
                          }
                          transition={
                            waving
                              ? {
                                  clipPath: { duration: WIPE_DURATION, times: WIPE_TIMES, ease: ["easeIn", [0.16, 1, 0.3, 1]], delay: currentIndex * WAVE_STAGGER },
                                  filter: { duration: WIPE_DURATION * 0.9, times: WIPE_TIMES, ease: "easeInOut", delay: currentIndex * WAVE_STAGGER },
                                  opacity: { duration: WIPE_DURATION * 0.85, times: WIPE_TIMES, ease: "easeInOut", delay: currentIndex * WAVE_STAGGER },
                                }
                              : { duration: 0.3, ease: "easeOut" }
                          }
                          onAnimationComplete={() => {
                            // Matikan gelombang ketika item BENAR-BENAR terakhir telah selesai beranimasi
                            if (waving && isLast) setWaving(false);
                          }}
                          className="relative flex items-center justify-center w-full h-full"
                        >
                          {isFigma ? (
                            <>
                              <FigmaIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 absolute transition-opacity duration-300 group-hover:opacity-0" style={{ filter: ORANGE_FILTER }} />
                              <FigmaIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </>
                          ) : (
                            <>
                              <i className={`${skill.icon} text-2xl sm:text-3xl md:text-4xl text-primary absolute transition-opacity duration-300 group-hover:opacity-0`}></i>
                              <i className={`${skill.icon} colored text-2xl sm:text-3xl md:text-4xl absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></i>
                            </>
                          )}
                        </motion.div>
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] md:text-xs text-gray-600 dark:text-gray-400 text-center leading-tight whitespace-nowrap">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
