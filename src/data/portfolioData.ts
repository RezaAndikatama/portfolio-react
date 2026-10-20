import loisLogo from "../assets/loislogo.png";
import loisDoucmentation from "../assets/intern-lois.jpg";
import kkpLogo from "../assets/kkplogo.png";
import kkpDocumentation from "../assets/presentasi kkp.jpeg";
import reportKKP from "../assets/report kkp.jpeg";
import reportKKP2 from "../assets/reportkkp2.jpeg";
import reportKKP3 from "../assets/reportkkp3.jpeg";
import anterajaLogo from "../assets/anteraja-logo.jpg";
import indomaretLogo from "../assets/indomart-logo.png";

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

// --- EXPERIENCE DATA ---
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
    desc: "Bertanggung jawab dalam memastikan seluruh infrastruktur IT dan komputer kasir (POS) berfungsi secara optimal di store. Pekerjaan mencakup troubleshooting jaringan lokal, instalasi dan pemeliharaan perangkat keras (hardware) serta perangkat lunak (software), sekaligus memberikan dukungan teknis (helpdesk) kepada seluruh staf ketika ada kendala.",
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
    role: "Junior DevOps",
    company: "Kementerian Kelautan dan Perikanan",
    date: "Sep 2025 - Des 2025",
    type: "Internship",
    logo: kkpLogo,
    desc: "Berperan dalam merancang, membangun, dan memelihara pipeline CI/CD (Continuous Integration & Continuous Deployment) untuk aplikasi layanan internal kementerian. Melakukan otomatisasi konfigurasi web server, manajemen container (Docker & Kubernetes), serta memantau (monitoring) performa server agar aplikasi dapat berjalan dengan stabilitas tinggi dan minim downtime.",
    images: [kkpDocumentation, reportKKP, reportKKP2, reportKKP3],
  },
];
