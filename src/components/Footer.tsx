"use client";

import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101010] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">

          {/* Col 1: Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-3">
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
            <p className="text-[#E2E2E2] text-sm leading-relaxed">
              Solusi Konstruksi & Renovasi Profesional dengan Garansi 6 Bulan & Transparansi RAB.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#C9A74A] mb-4">
              Layanan
            </h4>
            <ul className="space-y-2 text-sm text-[#E2E2E2]">
              <li>Perencanaan & Konstruksi</li>
              <li>Management Proyek</li>
              <li>Desain 2D/3D & RAB</li>
              <li>Renovasi Interior & Eksterior</li>
              <li>Konsultasi & Solutions Digital</li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div>
            <h4 className="text-lg font-semibold text-[#C9A74A] mb-4">
              Kontak
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E2E2E2]">
              <li>
                <a
                  href="tel:085326566522"
                  className="hover:text-[#C9A74A] transition-colors inline-flex items-center gap-2"
                >
                  <FaPhone className="w-4 h-4 text-[#C9A74A]" /> 0853 2656 6522
                </a>
              </li>

              <li>
                <a
                  href="mailto:habingkreatif@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A74A] transition-colors inline-flex items-center gap-2"
                >
                  <FaEnvelope className="w-4 h-4 text-[#C9A74A]" /> habingkreatif@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/habskonstruksikarya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A74A] transition-colors inline-flex items-center gap-2"
                >
                  <FaInstagram className="w-4 h-4 text-[#C9A74A]" /> Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@habskonstruksikarya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A74A] transition-colors inline-flex items-center gap-2"
                >
                  <FaTiktok className="w-4 h-4 text-[#C9A74A]" /> TikTok
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top Button */}
        <div className="border-t border-[#3A3A3A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#E2E2E2]">
          <p>
            © {new Date().getFullYear()} Habs Konstruksi Karya. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4 text-[#B61F2B]" />
          </button>
        </div>

      </div>
    </footer>
  );
}