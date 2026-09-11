/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fb6a27",
        darkbg: "#0f0f0f",
        cardDark: "#111113",
        cardLight: "#ffffff",
      },
      fontFamily: {
        serif: ['"Poppins"', "ui-serif", "Georgia", "serif"],
        mono: ['"Poppins"', "ui-monospace", "monospace"],
      },
      // Tambahkan konfigurasi shadow ini:
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
        "glass-hover": "0 12px 40px rgba(0, 0, 0, 0.15)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.35)",
        "glass-dark-hover": "0 12px 40px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
