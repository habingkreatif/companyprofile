"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function AboutSection() {
  const principles = [
    {
      num: "01",
      title: "RAB Mengikat & Pasti",
      desc: "Tidak ada biaya susulan di tengah pengerjaan. Semua angka dikunci dalam kontrak resmi sebelum material dipesan.",
    },
    {
      num: "02",
      title: "Gambar Kerja Dulu, Baru Eksekusi",
      desc: "Tukang di lapangan bekerja presisi berdasarkan cetak biru teknis (DED) dan spesifikasi 3D yang disetujui.",
    },
    {
      num: "03",
      title: "Garansi Struktur Resmi",
      desc: "Tanggung jawab tidak berhenti saat serah terima kunci. Kami memberikan jaminan pemeliharaan & perbaikan tertulis.",
    },
    {
      num: "04",
      title: "Transparansi Spesifikasi Material",
      desc: "Mulai dari besi beton, merek semen, hingga ketebalan kusen aluminium—semua sesuai standar merek yang disepakati.",
    },
  ];

  return (
    <section id="tentangkami" className="py-20 sm:py-28 bg-[#0C0C0C] text-[#ECECEC] font-sans relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header - Monograph Editorial Style */}
        <div className="border-b border-neutral-800 pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-[#B61F2B] uppercase tracking-widest block mb-2">
              01 / PROFIL & MANIFESTO TATA KELOLA
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              Kami Tidak Berjanji Manis. <br />
              <span className="font-bold text-white">Eksekusi Berdasar Cetak Biru & RAB Pasti.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed font-normal">
            PT HAB Konstruksi Karya berdiri di Bantul untuk mengeliminasi risiko utama pemilik properti: biaya bengkak, kualitas struktur terabaikan, dan keterlambatan jadwal pengerjaan.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Raw Architectural Photo Frame (5 Cols) */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative aspect-[4/5] lg:h-full w-full bg-neutral-900 border border-neutral-800 overflow-hidden">
              <Image
                src="/bg_fix.png"
                alt="Pengawasan Lapangan PT HAB Konstruksi Karya"
                fill
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />

              {/* Technical Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#121212]/95 border border-neutral-800 text-left font-mono">
                <span className="text-[10px] text-[#B61F2B] font-bold uppercase tracking-widest block mb-1">
                  ● KONTROL MUTU FISIK LAPANGAN
                </span>
                <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                  Pengawasan berkala oleh tim teknis sipil di setiap tahap pengecoran struktur, pembesian, dan finishing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Principles Grid (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-4">
                [ EMPAT STANDAR MUTLAK OPERASIONAL HAB ]
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {principles.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#121212] border border-neutral-800 flex flex-col justify-between hover:border-neutral-600 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-[#B61F2B] block mb-3">
                        [{item.num}]
                      </span>
                      <h3 className="text-base font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Call to Action Bar */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <span className="text-neutral-400 text-center sm:text-left">
                Punya denah lokasi atau gambar kerja? Mari hitung estimasi RAB awal.
              </span>

              <a
                href="https://wa.me/6285326566522?text=Halo%20HAB%20Konstruksi%2C%20saya%20ingin%20diskusi%20mengenai%20perencanaan%20dan%20RAB%20proyek."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase transition-colors shrink-0"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Konsultasi RAB Proyek</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}