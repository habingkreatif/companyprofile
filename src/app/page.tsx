"use client";

import {
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import MobileTouchbar from "@/components/Touchbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import PartnerLogos from "@/components/PartnerLogos";

export default function Home() {
  const services = [
    {
      title: "Perencanaan",
      description:
        "Perencanaan proyek yang matang dan detail untuk memastikan hasil optimal",
      icon: "📋",
    },
    {
      title: "Konstruksi",
      description:
        "Jasa konstruksi berkualitas dengan standar tinggi dan profesional",
      icon: "🏗️",
    },
    {
      title: "Management Proyek",
      description:
        "Pengelolaan proyek yang efisien dan terorganisir dari awal hingga selesai",
      icon: "📊",
    },
    {
      title: "Desain 2D/3D & RAB",
      description:
        "Desain visualisasi 2D dan 3D lengkap dengan Rencana Anggaran Biaya",
      icon: "🎨",
    },
    {
      title: "Make Over Interior & Eksterior",
      description:
        "Transformasi ruangan interior dan eksterior dengan desain modern",
      icon: "✨",
    },
    {
      title: "Kitchen Set",
      description:
        "Desain dan pembuatan kitchen set custom sesuai kebutuhan Anda",
      icon: "🍳",
    },
    {
      title: "Atap & Plafon Anti Bocor",
      description: "Solusi atap dan plafon anti bocor dengan teknologi terbaru",
      icon: "🏠",
    },
    {
      title: "Instalasi MEP",
      description:
        "Instalasi Mechanical, Electrical, dan Plumbing yang profesional",
      icon: "⚡",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header moved to shared component `Header` */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#162A43] via-[#1E1E1E] to-[#101010] opacity-95"></div>

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 2px 2px, rgba(182, 31, 43, 0.1) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#B61F2B]/20 border border-[#B61F2B]/30 rounded-full">
            <span className="text-[#F2DCA1] text-sm font-semibold">
              ✨ Garansi Pekerjaan 6 Bulan
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-[#F2DCA1]">HABS</span>{" "}
            <span className="text-[#FFFFFF]">KONSTRUKSI</span>{" "}
            <span className="text-[#C9A74A]">KARYA</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#E2E2E2] mb-4 max-w-3xl mx-auto font-light">
            Solusi Konstruksi & Renovasi Profesional untuk Hunian Impian Anda!
          </p>

          <p className="text-lg text-[#C9A74A] mb-10 max-w-2xl mx-auto">
            Kami menyediakan layanan konstruksi profesional dari perencanaan
            hingga selesai, dengan mengutamakan ketepatan, keamanan, dan
            kualitas. Didukung tim berpengalaman dan proses transparan, kami
            siap mewujudkan hunian modern yang nyaman dan fungsional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6287792933166"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#B61F2B] text-white rounded-lg font-bold text-lg hover:bg-[#8E1A22] transition-all shadow-2xl hover:shadow-[#B61F2B]/50 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>💬</span> Chat WhatsApp
            </a>

            <a
              href="#layanan"
              className="px-10 py-4 bg-transparent text-white border-2 border-[#C9A74A] rounded-lg font-bold text-lg hover:bg-[#C9A74A]/20 transition-all backdrop-blur-sm"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="tentang"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#101010] mb-4">
              Tentang Kami
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-[#3A3A3A] leading-relaxed">
                  <strong className="text-[#B61F2B] text-xl">
                    Habs Konstruksi Karya
                  </strong>{" "}
                  adalah perusahaan konstruksi profesional yang berkomitmen
                  memberikan layanan terbaik dalam bidang perencanaan,
                  konstruksi, dan management proyek.
                </p>
                <p className="text-lg text-[#3A3A3A] leading-relaxed">
                  Dengan pengalaman dan keahlian yang mumpuni, kami siap
                  membantu mewujudkan impian konstruksi dan renovasi Anda dengan
                  hasil yang berkualitas tinggi.
                </p>
                <div className="bg-gradient-to-r from-[#F2DCA1] to-[#C9A74A] p-6 rounded-xl border-l-4 border-[#B61F2B] shadow-lg">
                  <p className="text-[#101010] font-bold text-lg">
                    ✨ Garansi 6 Bulan untuk Semua Pekerjaan
                  </p>
                  <p className="text-[#1E1E1E] mt-2 text-sm">
                    Kami menjamin kualitas pekerjaan dengan memberikan garansi
                    selama 6 bulan
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#162A43] to-[#1E1E1E] p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#C9A74A] mb-2">
                      100%
                    </div>
                    <div className="text-[#E2E2E2] text-sm">Kepuasan Klien</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#C9A74A] mb-2">
                      6
                    </div>
                    <div className="text-[#E2E2E2] text-sm">Bulan Garansi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#C9A74A] mb-2">
                      8+
                    </div>
                    <div className="text-[#E2E2E2] text-sm">Layanan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#C9A74A] mb-2">
                      24/7
                    </div>
                    <div className="text-[#E2E2E2] text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Project Carousel Section */}
      <ProjectCarousel />

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Contact Section */}
      <section
        id="kontak"
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
                        href="tel:087792933166"
                        className="flex items-center gap-2 text-white hover:text-[#C9A74A] transition-colors text-lg"
                      >
                        <FaPhone className="w-4 h-4" /> 0877 9293 3166
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
                href="https://wa.me/6287792933166"
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
      <footer className="bg-[#101010] text-white py-12 px-4 sm:px-6 lg:px-8">
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
                  <span className="text-white">Habs</span>{" "}
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
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#C9A74A] mb-4">
                Kontak
              </h4>
              <ul className="space-y-2 text-sm text-[#E2E2E2]">
                <li>
                  <a
                    href="tel:087792933166"
                    className="hover:text-[#C9A74A] transition-colors flex items-center gap-2"
                  >
                    <FaPhone className="w-4 h-4" /> 0877 9293 3166
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
          <div className="border-t border-[#3A3A3A] pt-8 text-center">
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
