import { skillsData } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

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

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" ref={ref} aria-labelledby="skills-title" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 bg-gray-100 dark:bg-[#030304] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header — fade + slide dari bawah */}
        <div className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-primary font-semibold text-xs sm:text-sm tracking-wider mb-2">My Specialization</p>
          <h2 id="skills-title" className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white">
            Programming <span className="text-primary">Skills</span>
          </h2>
        </div>

        {/* Grid responsif: 3 kolom di layar kecil, bertambah seiring lebar layar agar label tidak bertabrakan */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-3 gap-y-6 sm:gap-5">
          {skillsData.map((skill, index) => {
            const isFigma = skill.name === "Figma";

            return (
              <div
                key={skill.id}
                className={`flex flex-col items-center gap-2 px-1 transition-all duration-500 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isInView ? `${index * 40}ms` : "0ms" }}
              >
                <div className="group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(255,107,53,0.5)]">
                  {isFigma ? (
                    <>
                      {/* Figma: SVG asli, oranye via filter di default, natural saat hover */}
                      <FigmaIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 absolute transition-opacity duration-300 group-hover:opacity-0" style={{ filter: ORANGE_FILTER }} />
                      <FigmaIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </>
                  ) : (
                    <>
                      {/* Icon Devicon lain: currentColor bekerja normal */}
                      <i className={`${skill.icon} text-2xl sm:text-3xl md:text-4xl text-primary absolute transition-opacity duration-300 group-hover:opacity-0`}></i>
                      <i className={`${skill.icon} colored text-2xl sm:text-3xl md:text-4xl absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></i>
                    </>
                  )}
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] md:text-xs text-gray-600 dark:text-gray-400 text-center leading-tight whitespace-nowrap">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
