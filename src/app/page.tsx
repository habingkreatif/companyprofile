"use client";

import {
  FaBolt,
  FaBuilding,
  FaChartBar,
  FaClipboard,
  FaDoorClosed,
  FaDraftingCompass,
  FaEnvelope,
  FaGlobe,
  FaHammer,
  FaHome,
  FaInstagram,
  FaLayerGroup,
  FaPaintBrush,
  FaPhone,
  FaStar,
  FaTh,
  FaTiktok,
  FaTools,
  FaTree,
  FaUtensils,
  FaWarehouse,
  FaWhatsapp,
  FaWindowMaximize,
} from "react-icons/fa";
import Image from "next/image";
import MobileTouchbar from "@/components/Touchbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import PartnerLogos from "@/components/PartnerLogos";
import TestimonialSection from "@/components/TestimonialSection";
import { FaShield } from "react-icons/fa6";

export default function Home() {
  const services = [
    {
      title: "Perencanaan & Konsultasi Proyek",
      description:
        "Perencanaan proyek yang matang dan konsultasi profesional untuk hasil optimal",
      icon: <FaClipboard className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Jasa Konstruksi & Pembangunan",
      description:
        "Konstruksi berkualitas dengan standar tinggi dan profesional",
      icon: <FaHammer className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Renovasi Bangunan & Peremajaan Ruang",
      description:
        "Renovasi menyeluruh untuk memperbarui bangunan dan interior",
      icon: <FaTools className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Lanskap & Penataan Area Hijau",
      description:
        "Desain dan perawatan taman serta area hijau secara profesional",
      icon: <FaTree className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Pengerjaan Kaca & Aluminium",
      description:
        "Instalasi kaca, jendela, dan struktur aluminium berkualitas",
      icon: <FaWindowMaximize className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Fabrikasi & Instalasi Pagar Besi",
      description:
        "Pembuatan dan pemasangan pagar besi custom sesuai kebutuhan",
      icon: <FaWarehouse className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Perbaikan, Renovasi & Instalasi Atap",
      description: "Solusi atap anti bocor dan renovasi atap profesional",
      icon: <FaHome className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Jasa Kitchen Set & Interior Dapur",
      description:
        "Desain dan pembuatan kitchen set custom sesuai kebutuhan Anda",
      icon: <FaUtensils className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Interior & Eksterior Makeover",
      description: "Transformasi interior dan eksterior dengan desain modern",
      icon: <FaStar className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Desain 2D/3D & RAB",
      description:
        "Desain visualisasi 2D/3D lengkap dengan Rencana Anggaran Biaya",
      icon: <FaDraftingCompass className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Pembuatan & Perbaikan Kusen, Pintu & Jendela",
      description:
        "Kusen, pintu, dan jendela dibuat & diperbaiki dengan presisi",
      icon: <FaDoorClosed className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Pembangunan Dak & Struktur Beton",
      description:
        "Struktur beton & dak bangunan dikerjakan profesional dan aman",
      icon: <FaBuilding className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Pengecatan Interior & Eksterior",
      description: "Pengecatan berkualitas untuk interior dan eksterior",
      icon: <FaPaintBrush className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Plafon, Partisi & Gypsum",
      description: "Pemasangan plafon, partisi, dan gypsum dengan hasil rapi",
      icon: <FaLayerGroup className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Instalasi Listrik & Plumbing",
      description: "Instalasi listrik dan plumbing secara profesional dan aman",
      icon: <FaBolt className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Pemasangan Lantai & Keramik",
      description:
        "Lantai & keramik dipasang rapi dengan standar kualitas tinggi",
      icon: <FaTh className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Pembuatan Website & Company Profile",
      description:
        "Pembuatan website profesional untuk bisnis, portofolio proyek, dan company profile perusahaan.",
      icon: <FaGlobe className="w-8 h-8 text-[#B61F2B]" />,
    },
    {
      title: "Pemeliharaan Bangunan",
      description:
        "Pemeliharaan bangunan secara rutin untuk menjaga kondisi bangunan tetap baik",
      icon: <FaGlobe className="w-8 h-8 text-[#B61F2B]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <section className="pt-28 md:pt-14 relative min-h-screen pb-10 md:pb-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder-construction.jpg" // Fallback image
          >
            <source src="/background1.mp4" type="video/mp4" />
            {/* Fallback ke gradient jika video tidak load */}
          </video>
          {/* Overlay untuk meningkatkan readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Pattern overlay subtle */}
        {/* <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div> */}

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge - Modern */}

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Hunian Berkualitas,
                <span className="block mt-4">
                  <span className="text-[#F2DCA1]">Hasil</span>{" "}
                  <span className="relative">
                    Presisi
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#B61F2B] transform scale-x-75"></span>
                  </span>
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl text-gray-200 leading-relaxed">
                Transformasi properti Anda dengan layanan konstruksi
                profesional. Setiap detail diperhitungkan, setiap hasil
                sempurna.
              </p>

              {/* Quick Stats */}
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-gray-300 text-sm">Layanan</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-[#C9A74A]">24/7</div>
                  <div className="text-gray-300 text-sm">Support</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-[#B61F2B]">100%</div>
                  <div className="text-gray-300 text-sm">Klien Puas</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-soft-gold backdrop-blur-md rounded-xl border border-white/20">
                <span className="text-black font-bold tracking-wide uppercase flex items-center gap-2">
                  <FaShield className="w-4 h-4 " /> Garansi Pekerjaan 6 Bulan
                </span>
              </div>
            </div>

            {/* Right Content - Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-6">
                Mulai Proyek Anda
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#B61F2B] flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Konsultasi Gratis
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Diskusikan ide dan kebutuhan Anda dengan ahli kami
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A74A] flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Rencana Detail
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Desain 3D dan breakdown biaya yang transparan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F2DCA1] flex items-center justify-center text-gray-900 font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Eksekusi Profesional
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Pengerjaan oleh tim ahli dengan monitoring berkala
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA dalam card */}
              <div className="mt-8 space-y-4">
                <a
                  href="https://wa.me/6285326566522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-gradient-to-r from-[#B61F2B] to-[#9e1a24] text-white rounded-xl font-bold text-center hover:shadow-xl hover:shadow-[#B61F2B]/30 transition-all duration-300"
                >
                  📞 Hubungi Sekarang
                </a>

                <div className="text-center">
                  <a
                    href="#portofolio"
                    className="text-gray-300 text-sm hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    Lihat hasil kerja kami
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section
        id="tentangkami"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#101010] mb-4">
              Tentang Kami
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg text-[#3A3A3A] leading-relaxed">
                Di{" "}
                <strong className="text-[#B61F2B] text-xl">
                  HABS Konstruksi Karya
                </strong>
                , kami percaya bahwa setiap bangunan bukan hanya struktur,
                melainkan perwujudan visi, nilai, dan masa depan. Itulah alasan
                kami hadir sebagai mitra konstruksi terpercaya yang menghadirkan
                solusi menyeluruh dengan standar kualitas terbaik.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed">
                Sebagai brand yang berfokus pada inovasi, ketepatan, dan
                keunggulan, Habs Konstruksi Karya menetapkan standar baru dalam
                dunia konstruksi. Kami menggabungkan pengalaman lapangan,
                teknologi, serta pendekatan manajemen modern untuk memastikan
                setiap detail dikerjakan dengan presisi.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed">
                Dengan tim yang berdedikasi dan berpengalaman, kami tidak
                sekadar membangun, kami menciptakan nilai, mulai dari
                perencanaan visioner, eksekusi konstruksi yang rapi dan aman,
                hingga manajemen proyek yang terukur dan profesional.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed">
                Komitmen kami sederhana: Mewujudkan karya konstruksi yang kokoh,
                estetis, dan tahan lama, sekaligus membangun kepercayaan yang
                langgeng dengan setiap klien.
              </p>
            </div>

            {/* Image / Illustration */}
            <div className="relative animate-fade-in-right">
              <Image
                src="/background5.png"
                alt="Tentang Kami"
                width={600}
                height={400}
                className=" h-auto rounded-xl shadow-xl object-cover"
              />
              {/* Optional overlay icon atau dekoratif */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#B61F2B] to-[#C9A74A] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Background Decorative Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#B61F2B] rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A74A] rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Services Section */}
      <section
        id="layanan"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F5F5] to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#101010] mb-4">
              Layanan Kami
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-4"></div>
            <p className="text-[#3A3A3A] max-w-2xl mx-auto text-lg">
              Berbagai layanan konstruksi profesional untuk kebutuhan proyek
              Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E2E2E2] hover:border-[#B61F2B] hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#B61F2B]/10 to-[#C9A74A]/10 rounded-bl-full"></div>
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#101010] mb-3 group-hover:text-[#B61F2B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#3A3A3A] text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />

      <ProjectCarousel />

      <PartnerLogos />

      <TestimonialSection />

      <section
        id="hubungikami"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#162A43] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 2px 2px, rgba(201, 167, 74, 0.1) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Hubungi Kami</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">📍</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#F2DCA1] mb-3">
                      Alamat
                    </h3>
                    <p className="text-white leading-relaxed text-lg">
                      Jl. Parangtritis KM 20 Gedangan
                      <br />
                      Panjangrejo, Pundong
                      <br />
                      Bantul, Yogyakarta
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">📞</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#F2DCA1] mb-3">
                      Kontak
                    </h3>
                    <div className="space-y-1">
                      <a
                        href="tel:085326566522"
                        className="flex items-center gap-2 text-white hover:text-[#C9A74A] transition-colors text-lg"
                      >
                        <FaPhone className="w-4 h-4" /> 0853 2656 6522
                      </a>
                      <a
                        href="https://instagram.com/habskonstruksikarya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-[#C9A74A] transition-colors text-lg"
                      >
                        <FaEnvelope className="w-4 h-4" />{" "}
                        habingkreatif@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/6285326566522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-8 py-5 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#20BA5A] transition-all shadow-2xl hover:shadow-[#25D366]/50 transform hover:scale-105 text-center"
              >
                <FaWhatsapp className="w-7 h-7" /> Chat WhatsApp Sekarang
              </a>
            </div>

            {/* Google Maps */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 overflow-hidden">
              <h3 className="text-2xl font-bold text-[#F2DCA1] mb-4 px-4">
                Lokasi Kami
              </h3>
              <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3395765194737!2d110.3211642!3d-7.9638151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b01005f4dbf85%3A0xa13691bc2bf342d1!2sHABS%20KONSTRUKSI%20KARYA!5e0!3m2!1sen!2sid!4v1764558686848!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Lokasi Habs Konstruksi Karya"
                />
              </div>
              <div className="mt-4 px-4">
                <a
                  href="https://maps.google.com/?q=Jl.+Parangtritis+KM+20+Gedangan,+Panjangrejo,+Pundong,+Bantul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A74A] hover:text-[#F2DCA1] transition-colors text-sm font-medium"
                >
                  📍 Buka di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101010] text-white py-12 md:py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/53.png"
                  alt="Logo Habs Konstruksi Karya"
                  width={50}
                  height={50}
                  className="object-cover rounded-full"
                />
                <h3 className="text-2xl font-bold">
                  <span className="text-white">HABS</span>{" "}
                  <span className="text-[#B61F2B]">Konstruksi Karya</span>
                </h3>
              </div>
              <p className="text-[#E2E2E2] text-sm">
                Solusi Konstruksi & Renovasi Profesional dengan Garansi 6 Bulan
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#C9A74A] mb-4">
                Layanan
              </h4>
              <ul className="space-y-2 text-sm text-[#E2E2E2]">
                <li>Perencanaan & Konstruksi</li>
                <li>Management Proyek</li>
                <li>Desain 2D/3D & RAB</li>
                <li>Renovasi Interior & Eksterior</li>
                <li>Pembuatan Website & Company Profile</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#C9A74A] mb-4">
                Kontak
              </h4>
              <ul className="space-y-2 text-sm text-[#E2E2E2]">
                <li>
                  <a
                    href="tel:085326566522"
                    className="hover:text-[#C9A74A] transition-colors flex items-center gap-2"
                  >
                    <FaPhone className="w-4 h-4" /> 0853 2656 6522
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:habingkreatif@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C9A74A] transition-colors flex items-center gap-2"
                  >
                    <FaEnvelope className="w-4 h-4" /> habingkreatif@gmail.com
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/habskonstruksikarya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C9A74A] transition-colors flex items-center gap-2"
                  >
                    <FaInstagram className="w-4 h-4" /> Instagram
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/@habskonstruksikarya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C9A74A] transition-colors flex items-center gap-2"
                  >
                    <FaTiktok className="w-4 h-4" /> Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#3A3A3A] pt-5 text-center">
            <p className="text-[#E2E2E2] text-sm">
              © {new Date().getFullYear()} Habs Konstruksi Karya. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
      <MobileTouchbar />
    </div>
  );
}
