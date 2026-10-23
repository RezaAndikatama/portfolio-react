import { useEffect, useRef } from "react";

export const KineticTypographyLoader = () => {
  const loaderTextRef = useRef<HTMLHeadingElement>(null);

  // Anda bisa mengganti kata-katanya di sini!
  const words = ["HALLO", "LOADING", "WELCOME"];

  useEffect(() => {
    const loaderText = loaderTextRef.current;
    if (!loaderText) return;

    let currentWordIndex = 0;
    let animationTimeout: ReturnType<typeof setTimeout>;
    let wordCycleTimeout: ReturnType<typeof setTimeout>;

    function animateWord() {
      const word = words[currentWordIndex];
      loaderText!.innerHTML = ""; // Bersihkan kata sebelumnya

      const chars = word.split("").map((char, index) => {
        const span = document.createElement("span");
        span.className = "char";
        span.innerHTML = char === " " ? "&nbsp;" : char;

        const fromX = (Math.random() - 0.5) * 800;
        const fromY = (Math.random() - 0.5) * 800;
        const fromZ = (Math.random() - 0.5) * 800;
        const fromRotX = (Math.random() - 0.5) * 360;
        const fromRotY = (Math.random() - 0.5) * 360;

        span.style.setProperty("--transform-from", `translate3d(${fromX}px, ${fromY}px, ${fromZ}px) rotateX(${fromRotX}deg) rotateY(${fromRotY}deg)`);
        span.style.animationName = "fly-in";
        span.style.animationDelay = `${index * 0.04}s`;
        span.style.animationPlayState = "running";

        loaderText!.appendChild(span);
        return span;
      });

      animationTimeout = setTimeout(() => {
        chars.forEach((span, index) => {
          const toX = (Math.random() - 0.5) * 800;
          const toY = (Math.random() - 0.5) * 800;
          const toZ = (Math.random() - 0.5) * 800;
          const toRotX = (Math.random() - 0.5) * 360;
          const toRotY = (Math.random() - 0.5) * 360;

          span.style.setProperty("--transform-to", `translate3d(${toX}px, ${toY}px, ${toZ}px) rotateX(${toRotX}deg) rotateY(${toRotY}deg)`);
          span.style.animationName = "fly-out";
          span.style.animationDelay = `${(chars.length - index) * 0.04}s`;
        });
      }, 2000); // Waktu tulisan diam sebelum menghilang

      wordCycleTimeout = setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        animateWord();
      }, 3000); // Jeda sebelum memuat kata berikutnya
    }

    animateWord();

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(wordCycleTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center [perspective:1000px]">
      <h1 ref={loaderTextRef} className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-primary font-serif uppercase tracking-widest whitespace-nowrap [transform-style:preserve-3d]"></h1>
    </div>
  );
};
