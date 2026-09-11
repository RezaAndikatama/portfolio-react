export const translations = {
  id: {
    nav: {
      home: "Beranda",
      profile: "Profil",
      experience: "Pengalaman",
      skills: "Keahlian",
      portfolio: "Proyek",
      contact: "Kontak",
    },
    hero: {
      badge: "Terbuka untuk Kerja",
      headingLine1: "Front-End Developer,",
      headingLine2: "UI/UX Design & DevOps.",
      subheading: "Berbasis di Jakarta",
      bio: "Hi, saya Reza Andikatama — developer kreatif yang senang menciptakan pengalaman digital yang mulus, terhubung, dan berdampak.",
      cta: "Lihat karya saya",
    },
    about: {
      label: "Tentang Saya",
      heading: "Siapa Saya",
      paragraph1Before: "Halo! Saya",
      paragraph1After:
        ", fresh graduate Program Studi Sistem Informasi dari Universitas Bina Sarana Informatika, sekaligus Web Developer yang berbasis di Jakarta, Indonesia. Saya memiliki passion yang besar dalam membangun tampilan web yang menarik, responsif, dan mudah digunakan oleh pengguna.",
      paragraph2:
        "Melalui berbagai proyek akademis dan portofolio, saya telah membekali diri dengan pemahaman praktis yang komprehensif—mulai dari Front-End Development, UI/UX Design, hingga pengalaman magang sebagai Developer Operations (DevOps). Saya terbiasa menggunakan teknologi modern seperti Laravel, PHP, React, dan Tailwind CSS untuk menciptakan solusi digital yang tidak hanya fungsional, tetapi juga estetis dan efisien. Di luar rutinitas coding, saya senang mengeksplorasi tren desain terbaru dan selalu haus untuk terus belajar serta berkembang di industri teknologi.",
      statExperience: "Pengalaman",
      statProjects: "Proyek Selesai",
      statTechStack: "Tech Stack",
      openToWork: "Terbuka untuk Kerja",
    },
    skills: {
      label: "Spesialisasi Saya",
      headingPart1: "Kemampuan",
      headingPart2: "Programming",
    },
    portfolio: {
      label: "Portofolio",
      heading: "Karya Pilihan",
      detailButton: "Detail",
      modalDesc: "Deskripsi Project",
      modalTechStack: "Tech Stack",
      modalGallery: "Galeri Project",
    },
    experience: {
      label: "Perjalanan Karier",
      heading: "Pengalaman Saya",
      detailButton: "Detail",
      modalDesc: "Deskripsi Pekerjaan",
      modalGallery: "Galeri & Dokumentasi",
    },
    contact: {
      label: "Kontak",
      heading: "Hubungi Saya",
      paragraph: "Silakan isi formulir di bawah untuk menghubungi saya untuk berkolaborasi. Atau telepon antara jam 9 pagi - 8 malam WIB, Senin sampai Jumat.",
      formName: "Nama",
      formEmail: "Email",
      formMessage: "Pesan",
      formSubmit: "Kirim",
    },
  },
  en: {
    nav: {
      home: "Home",
      profile: "Profile",
      experience: "Experience",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      badge: "Available for Work",
      headingLine1: "Front-End Developer,",
      headingLine2: "UI/UX Design & DevOps.",
      subheading: "Based in Jakarta",
      bio: "Hi, I'm Reza Andikatama — a creative developer passionate about creating seamless digital experiences that connect and convert.",
      cta: "See my works",
    },
    about: {
      label: "About Me",
      heading: "Who I Am",
      paragraph1Before: "Hi! I'm",
      paragraph1After:
        ", a fresh graduate of Information Systems from Universitas Bina Sarana Informatika, and a Web Developer based in Jakarta, Indonesia. I have a strong passion for building web interfaces that are engaging, responsive, and easy for users to interact with.",
      paragraph2:
        "Through various academic projects and portfolio work, I've equipped myself with comprehensive practical understanding — from Front-End Development, UI/UX Design, to an internship experience as a Developer Operations (DevOps). I'm accustomed to using modern technologies like Laravel, PHP, React, and Tailwind CSS to create digital solutions that are not only functional, but also aesthetic and efficient. Outside of coding, I enjoy exploring the latest design trends and I'm always eager to keep learning and growing in the tech industry.",
      statExperience: "Experience",
      statProjects: "Projects Done",
      statTechStack: "Tech Stack",
      openToWork: "Open to Work",
    },
    skills: {
      label: "My Specialization",
      headingPart1: "Programming",
      headingPart2: "Skills",
    },
    portfolio: {
      label: "Portfolio",
      heading: "Selected Works",
      detailButton: "Detail",
      modalDesc: "Project Description",
      modalTechStack: "Tech Stack",
      modalGallery: "Project Gallery",
    },
    experience: {
      label: "Career Path",
      heading: "My Experience",
      detailButton: "Detail",
      modalDesc: "Job Description",
      modalGallery: "Gallery & Documentation",
    },
    contact: {
      label: "Contact",
      heading: "Get In Touch",
      paragraph: "Please fill out the form below to contact me for collaboration. Or call between 9.00 a.m. and 8.00 p.m. WIB, Monday through Friday.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Submit",
    },
  },
} as const;

export type TranslationKeys = typeof translations.id;
