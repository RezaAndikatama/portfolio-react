import type { ReactNode } from "react";
import { Code2, PenTool, Cloud } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

// Icon lucide-react untuk tiap layanan, urut sesuai items di translations.ts
const SERVICE_ICONS = [Code2, PenTool, Cloud];

// Kotak ikon bermotif grid + mask radial — elemen dekoratif khas dari referensi "features-2".
// Diadaptasi tanpa shadcn (tidak pakai <Card>), murni div + Tailwind seperti bagian lain di project ini.
function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden className="relative mx-auto size-16 md:size-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
      <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:12px_12px] opacity-10" />
      <div className="bg-gray-50 dark:bg-cardDark absolute inset-0 m-auto flex size-10 md:size-12 items-center justify-center border-t border-l border-gray-300 dark:border-white/20">{children}</div>
    </div>
  );
}

export default function Services() {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" ref={ref} aria-labelledby="services-title" className="py-20 md:py-28 px-6 bg-white dark:bg-darkbg transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header — fade + slide dari bawah */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-primary font-semibold tracking-wider mb-2">{t.label}</p>
          <h2 id="services-title" className="font-serif text-3xl md:text-4xl font-semibold uppercase text-gray-900 dark:text-white">
            {t.heading}
          </h2>
        </div>

        {/* Grid 3 kolom, tiap card berisi CardDecorator + judul + deskripsi, semua rata tengah (mengikuti gaya referensi) */}
        <div className="mx-auto grid max-w-sm gap-6 *:text-center md:max-w-full md:grid-cols-3">
          {t.items.map((item, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <div
                key={item.title}
                className={`group bg-gray-50 dark:bg-cardDark rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: isInView ? `${index * 120}ms` : "0ms", transitionDuration: "700ms", transitionTimingFunction: "ease-out" }}
              >
                <CardDecorator>
                  <Icon className="size-5 md:size-6 text-primary" aria-hidden />
                </CardDecorator>

                <h3 className="font-serif mt-6 text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
