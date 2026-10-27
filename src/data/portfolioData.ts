// IMPORT ASSETS (EXPERIENCE)
import loisLogo from "../assets/loislogo.png";
import loisDoucmentation from "../assets/intern-lois.jpg";
import kkpLogo from "../assets/kkplogo.png";
import kkpDocumentation from "../assets/presentasi kkp.jpeg";
import reportKKP from "../assets/report kkp.jpeg";
import reportKKP2 from "../assets/reportkkp2.jpeg";
import reportKKP3 from "../assets/reportkkp3.jpeg";
import anterajaLogo from "../assets/anteraja-logo.jpg";
import indomaretLogo from "../assets/indomart-logo.png";

// IMPORT ASSETS (PORTFOLIO)
import sistemOperasional from "../assets/sistemoperasional.png";
import cekStatus from "../assets/cekstatus.png";
import dashboard from "../assets/dashboard.png";
import dokumentasiBTM from "../assets/dokBTM.jpeg";
import dokumentasiBTM2 from "../assets/dokBTM2.jpeg";
import ssUI from "../assets/uiux.png";
import thumbnails from "../assets/banking.png";
import banking1 from "../assets/Banking Apps.png";
import banking2 from "../assets/banking 2.png";
import banking3 from "../assets/banking 3.png";
import banking4 from "../assets/banking 4.png";
import banking5 from "../assets/banking 5.png";
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

// --- SKILLS DATA ---
export interface Skill {
  id: number;
  name: string;
  icon: string;
  desc: string;
}

export const skillsData: Skill[] = [
  { id: 1, name: "HTML5", icon: "devicon-html5-plain", desc: "Struktur dasar semantik untuk setiap halaman web yang dibangun." },
  { id: 2, name: "CSS", icon: "devicon-css3-plain", desc: "Styling tampilan web dengan layout, animasi, dan desain responsif." },
  { id: 3, name: "JavaScript", icon: "devicon-javascript-plain", desc: "Membangun interaksi dinamis dan logika pada sisi client maupun server." },
  { id: 4, name: "Bootstrap 5", icon: "devicon-bootstrap-plain", desc: "Styling tampilan web dengan layout, animasi, dan desain responsif." },
  { id: 5, name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", desc: "Styling cepat dan konsisten dengan utility-first CSS framework modern." },
  { id: 6, name: "PHP", icon: "devicon-php-plain", desc: "Mengembangkan backend web dengan bahasa server-side yang powerful." },
  { id: 7, name: "Laravel", icon: "devicon-laravel-plain", desc: "Framework PHP modern untuk membangun aplikasi web yang terstruktur." },
  { id: 8, name: "GitHub", icon: "devicon-github-original", desc: "Version control dan kolaborasi manajemen kode secara efisien." },
  { id: 9, name: "React", icon: "devicon-react-plain", desc: "Membangun antarmuka pengguna berbasis komponen yang reusable." },
  { id: 10, name: "Figma", icon: "devicon-figma-plain", desc: "Merancang UI/UX Website dan Mobile." },
  { id: 11, name: "MySQL", icon: "devicon-mysql-plain", desc: "Mengelola basis data relasional untuk penyimpanan data aplikasi." },
  { id: 12, name: "Docker", icon: "devicon-docker-plain", desc: "Containerization untuk lingkungan development yang konsisten." },
];

// ==========================================
// --- EXPERIENCE DATA ---
// ==========================================
export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  type: string;
  logo: string;
  desc: string;
  images: string[];
}

export const experienceData: Experience[] = [
  {
    id: "lois",
    role: "IT Support",
    company: "PT. Intigarmindo Persada (Lois Jeans)",
    date: "Jan 2019 - Mar 2019",
    type: "Internship",
    logo: loisLogo,
    desc: "Bertanggung jawab dalam memastikan seluruh infrastruktur IT dan komputer kasir (POS) berfungsi secara optimal di store. Pekerjaan mencakup troubleshooting jaringan lokal, instalasi dan pemeliharaan perangkat keras (hardware) serta perangkat lunak (software), sekaligus memberikan dukungan teknis (helpdesk) kepada seluruh staf ketika ada kendala pada perangkat yang digunakan.",
    images: [loisDoucmentation],
  },
  {
    id: "indomaret",
    role: "Store Assistant",
    company: "PT. Indomarco Prismatama (Indomaret)",
    date: "Mar 2021 - Jun 2021",
    type: "Contract",
    logo: indomaretLogo,
    desc: "Bertugas melayani pelanggan dengan standar pelayanan prima perusahaan (SOP), memastikan ketersediaan (restock), dan kerapihan tata letak stok barang di area display atau rak toko. Selain itu, saya juga bertanggung jawab atas pengelolaan transaksi pembayaran dengan mengoperasikan mesin kasir secara teliti dan akurat.",
    images: [],
  },
  {
    id: "anteraja",
    role: "Delivery Specialist",
    company: "PT. Tri Adi Bersama (AnterAja)",
    date: "Ags 2021 - Jan 2022",
    type: "Contract",
    logo: anterajaLogo,
    desc: "Memiliki tanggung jawab penuh atas pengambilan (pickup) dan pengiriman barang atau dokumen ke alamat tujuan pelanggan secara aman dan sesuai estimasi waktu. Secara aktif mengoperasikan aplikasi scanner/kurir internal untuk melakukan update resi dan pembaruan status pengiriman secara real-time guna menjaga SLA (Service Level Agreement).",
    images: [],
  },
  {
    id: "kkp",
    role: "Junior Web Developer",
    company: "Kementerian Kelautan dan Perikanan",
    date: "Sep 2025 - Des 2025",
    type: "Internship",
    logo: kkpLogo,
    desc: "Mengembangkan platform E-Learning berbasis arsitektur microservices, mulai dari implementasi UI, integrasi pipeline CI/CD, hingga tahap Quality Assurance. Bertanggung jawab dalam merancang antarmuka pengguna (UI) yang intuitif, bersih, dan responsif, serta membangun alur otomatisasi deployment yang efisien. Selain itu, eksekusi pengujian sistem dilakukan secara ketat guna memastikan reliabilitas aplikasi, minim downtime, dan pengalaman pengguna yang optimal sebelum rilis.",
    images: [kkpDocumentation, reportKKP2, reportKKP, reportKKP3],
  },
];

// ==========================================
// --- PORTFOLIO DATA ---
// ==========================================
export interface PortfolioItem {
  id: number;
  title: string;
  img: string;
  desc: string;
  problem: string;
  techStack: string[];
  images: string[];
  category: string;
}

export const portfolios: PortfolioItem[] = [
  {
    id: 1,
    title: "Learning Management System",
    img: thumbnailLMS,
    desc: "Mengembangkan dan men-deploy platform E-Learning berbasis Moodle 5 di lingkungan terkontainerisasi. Proyek ini memecahkan masalah beban server pada aplikasi monolith dengan mendelegasikan tugas asinkron (sistem notifikasi email otomatis) ke microservice Node.js yang berdiri sendiri.",
    problem: "Tingginya beban server pada aplikasi monolith saat memproses tugas asinkron seperti pengiriman email massal, yang menyebabkan performa LMS menurun drastis saat diakses banyak pengguna.",
    techStack: ["Moodle", "Docker", "Node.js", "Nginx", "Pipeline", "Microservices"],
    images: [lms1, lms2],
    category: "Web App",
  },
  {
    id: 2,
    title: "Sistem Operasional Bengkel Manufaktur Berbasis Web Pada PT Briliant Teknik Mandiri",
    img: sistemOperasional,
    desc: "Sebuah sistem informasi berbasis web yang dirancang khusus untuk mendigitalisasi dan mengoptimalkan proses operasional manajemen PT Briliant Teknik Mandiri. Aplikasi ini dibangun dengan arsitektur modern berbasis container (Docker) untuk memastikan skalabilitas dan stabilitas di lingkungan production, serta didukung oleh pipeline otomatisasi untuk efisiensi pengembangan.",
    problem: "Proses pendataan order dan manajemen bengkel yang sebelumnya masih menggunakan buku, sering terjadi ketidaksamaan data bahan baku, rentan terhadap kehilangan data, dan menyulitkan customer pemantauan status produksi secara real-time.",
    techStack: ["Laravel", "Tailwind CSS", "PHP", "Docker", "MySQL", "CI/CD"],
    images: [cekStatus, dashboard, dokumentasiBTM, dokumentasiBTM2],
    category: "Web App",
  },
  {
    id: 3,
    title: "Banking App UI",
    img: thumbnails,
    desc: "Sebuah konsep ulang pengalaman Mobile Banking yang berfokus pada kemudahan pengguna, keamanan, dan pengelolaan finansial yang lebih personal. Konsep ini bertujuan mengubah UI/UX pada Mobile Banking yang kaku menjadi lebih ramah, modern, dan intuitif, khususnya bagi milenial dan Gen Z.",
    problem: "Analisis masalah pada user ketika menggunakan aplikasi Mobile Banking khususnya untuk milenial dan gen z, UI/UX ini dibuat untuk menyelesaikan mata kuliah pada semester 4.",
    techStack: ["Figma", "Wireframing", "Prototyping"],
    images: [banking1, banking2, banking3, banking4, banking5, ssUI],
    category: "UI/UX",
  },
  {
    id: 4,
    title: "Noka UI",
    img: noka1,
    desc: "Sebelumnya, calon jemaah sering kali kesulitan mendapatkan informasi perjalanan umrah yang kredibel dan detail karena keterbatasan platform digital yang usang serta tidak interaktif. Masalah ini diselesaikan melalui pengembangan landing page modern yang tidak hanya informatif, tetapi juga dilengkapi dengan navigasi interaktif, optimasi SEO tingkat tinggi untuk memperluas jangkauan, serta visualisasi yang mempermudah proses pengambilan keputusan jemaah secara aman dan nyaman.",
    problem: "Sebelumnya Noka hanya memiliki media pemasaran menggunakan Instagram, maka dari itu dibuat lah rancangan desain UI Website Landing Page.",
    techStack: ["Figma", "Wireframing", "Prototyping", "Tailwind CSS", "HTML"],
    images: [noka1, noka2, noka3],
    category: "UI/UX",
  },
  {
    id: 5,
    title: "Wasircore UI",
    img: wasirThumb,
    desc: "Menghadapi tantangan rendahnya kesadaran dan tingginya rasa cemas masyarakat dalam mencari pengobatan medis yang aman untuk penyakit sensitif seperti wasir, proyek ini merevolusi platform edukasi dan layanan kesehatan digital. Melalui pendekatan desain UI yang ramah, intuitif, dan bebas intimidasi, kami memecahkan masalah aksesibilitas informasi medis dengan menghadirkan visualisasi yang menenangkan, fitur konsultasi cepat, serta hierarki konten yang efektif guna membangun rasa percaya dan mempercepat konversi pasien.",
    problem: "Mengubah website landing page menjadi Company Profile sesuai dengan referensi desain yang diberikan client.",
    techStack: ["Figma", "Wireframing", "Prototyping"],
    images: [wasir1, wasir2, wasir3, wasir4, wasir5],
    category: "UI/UX",
  },
];
