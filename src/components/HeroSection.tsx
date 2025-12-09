import React from "react";
import { FaShield } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="pt-28 md:pt-14 relative min-h-screen pb-10 md:pb-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder-construction.jpg"
        >
          <source src="/background1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
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

            <p className="text-xl text-gray-200 leading-relaxed">
              Transformasi properti Anda dengan layanan konstruksi profesional.
              Setiap detail diperhitungkan, setiap hasil sempurna.
            </p>

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
                <div className="text-3xl font-bold text-[#B61F2B]">99,98%</div>
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
      </div>
    </section>
  );
}
