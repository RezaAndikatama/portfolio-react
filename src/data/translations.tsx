export const translations = {
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
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
    services: {
      label: "Apa yang Saya Kerjakan",
      heading: "Layanan Saya",
      items: [
        {
          title: "Front-End Developer",
          desc: "Mengubah desain antarmuka menjadi code untuk web dari nol menggunakan TailwindCSS dan React dengan responsive.",
          tags: ["Laravel", "PHP", "React", "Tailwind CSS"],
        },
        {
          title: "UI/UX Design",
          desc: "Merancang antarmuka yang intuitif dan estetis menggunakan Figma, mulai dari wireframe, prototyping, hingga design system yang siap diimplementasikan.",
          tags: ["Figma", "Wireframing", "Prototyping"],
        },
        {
          title: "DevOps",
          desc: "Menyiapkan pipeline CI/CD, containerization, dan konfigurasi server agar aplikasi berjalan stabil dengan proses deployment yang efisien.",
          tags: ["Docker", "CI/CD", "Nginx"],
        },
      ],
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
      services: "Services",
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
    services: {
      label: "What I Do",
      heading: "My Services",
      items: [
        {
          title: "Front-End Developer",
          desc: "Translate design to code for applications from scratch using Tailwind, React, and Build Responsive Website.",
          tags: ["Laravel", "PHP", "React", "Tailwind CSS"],
        },
        {
          title: "UI/UX Design",
          desc: "Designing intuitive and aesthetic interfaces using Figma, from wireframes, prototyping, to a design system ready for implementation.",
          tags: ["Figma", "Wireframing", "Prototyping"],
        },
        {
          title: "DevOps",
          desc: "Setting up CI/CD pipelines, containerization, and server configuration so applications run stably with an efficient deployment process.",
          tags: ["Docker", "CI/CD", "Nginx"],
        },
      ],
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
