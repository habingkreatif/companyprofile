"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hubungikami" className="py-20 sm:py-28 bg-slate-900 text-slate-100 font-sans relative overflow-hidden">

      {/* Background Subtle Gradient Highlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B61F2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section Line */}
        <div className="border-t border-slate-800 pt-8 mb-12 sm:mb-16 flex justify-between items-center text-xs tracking-widest text-slate-400 uppercase font-mono">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B61F2B]" />
            06 / Kontak & Diskusi
          </span>
          <span>Bantul, Yogyakarta</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-10 text-left">

            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                Mulai perencanaan proyek Anda <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                  bersama tim insinyur HAB.
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
                Diskusi teknis, penentuan kualifikasi material, hingga estimasi Rancangan Anggaran Biaya (RAB) tanpa komitmen awal.
              </p>
            </div>

            {/* WhatsApp High-Conversion Action */}
            <div>
              <a
                href="https://wa.me/6285326566522?text=Halo%20HAB%20Konstruksi,%20saya%20ingin%20diskusi%20perencanaan%20proyek."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-6 w-full sm:w-auto px-8 py-5 bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-300 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-emerald-950/40 group"
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-6 h-6 text-white" />
                  <span>Diskusi via WhatsApp</span>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Minimalist Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-slate-800 text-sm">
              <div>
                <span className="text-amber-400 text-xs block mb-2 font-mono uppercase tracking-wider font-semibold">
                  Direct Email
                </span>
                <div className="flex items-center gap-3">
                  <a href="mailto:habingkreatif@gmail.com" className="text-slate-200 hover:text-white font-mono transition-colors font-medium">
                    habingkreatif@gmail.com
                  </a>
                  <button
                    onClick={() => handleCopy("habingkreatif@gmail.com")}
                    className="text-slate-500 hover:text-amber-400 transition-colors p-1"
                    title="Salin Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-amber-400 text-xs block mb-2 font-mono uppercase tracking-wider font-semibold">
                  Office Phone
                </span>
                <a href="tel:085326566522" className="text-slate-200 hover:text-white font-mono transition-colors font-medium">
                  +62 853 2656 6522
                </a>
              </div>

              <div>
                <span className="text-slate-400 text-xs block mb-1 font-mono uppercase tracking-wider">
                  Jam Operasional
                </span>
                <p className="text-slate-300">
                  Senin – Sabtu, 08:00 – 17:00 WIB
                </p>
              </div>

              <div>
                <span className="text-slate-400 text-xs block mb-1 font-mono uppercase tracking-wider">
                  Kantor Utama
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Jl. Parangtritis KM 20, Pundong, Bantul, D.I. Yogyakarta
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Frame */}
          <div className="lg:col-span-5 h-[380px] sm:h-[450px] relative">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative bg-slate-950 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3395765194737!2d110.3211642!3d-7.9638151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b01005f4dbf85%3A0xa13691bc2bf342d1!2sHABS%20KONSTRUKSI%20KARYA!5e0!3m2!1sen!2sid!4v1764558686848!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor PT HAB Konstruksi Karya"
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Floating Location Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800 flex items-center justify-between text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#B61F2B] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Kantor Pusat PT HAB</h4>
                    <p className="text-[11px] text-slate-400">Pundong, Bantul, DIY</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Jl.+Parangtritis+KM+20+Gedangan,+Panjangrejo,+Pundong,+Bantul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-mono font-semibold flex items-center gap-1"
                >
                  <span>Petunjuk Arah</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}