import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
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
  );
}
