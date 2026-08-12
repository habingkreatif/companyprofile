import React, { useState } from "react";
import {
  FaShieldHalved,
  FaFilePdf,
  FaWhatsapp,
  FaBuilding,
  FaHouse,
  FaArrowRight
} from "react-icons/fa6";

export default function HeroSection() {
  const [projectType, setProjectType] = useState<"residential" | "commercial">("residential");

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-20 lg:pb-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
          poster="/placeholder-construction.jpg"
        >
          <source src="/background1.mp4" type="video/mp4" />
        </video>
        {/* Layer Gradient Premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Kolom Kiri: Value Proposition Utama (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Tag Badging Legalitas/Garansi */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
              <FaShieldHalved className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-semibold text-amber-300 tracking-wide uppercase">
                Kontraktor Terlisensi & Garansi Pemeliharaan
              </span>
            </div>

            {/* Headline Utama (B2C + B2B Scope) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
              Konstruksi Presisi. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Transparan
              </span>{" "}
              dari RAB Hingga Serah Terima.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              Mitra perencanaan & pembangunan terpercaya untuk <strong className="text-white font-semibold">hunian pribadi, gedung komersial,</strong> hingga <strong className="text-white font-semibold">proyek industri</strong> tanpa biaya tersembunyi.
            </p>

            {/* Re-engineered Social Proof Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-y border-slate-800/80 py-4 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">150+</div>
                <div className="text-slate-400 text-xs sm:text-sm font-medium">Proyek Selesai</div>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">100%</div>
                <div className="text-slate-400 text-xs sm:text-sm font-medium">On-Time Delivery</div>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">6 Bulan</div>
                <div className="text-slate-400 text-xs sm:text-sm font-medium">Garansi Struktur</div>
              </div>
            </div>

            {/* CTA Tambahan khusus B2B / Procurement */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/company-profile.pdf"
                download
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-sm transition-all duration-200"
              >
                <FaFilePdf className="text-red-400 text-base" />
                <span>Download Company Profile (PDF)</span>
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Card Quick Intake & Segmentasi Klien (Col 5) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl shadow-black/50">

              <div className="mb-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                  Konsultasi Proyek Anda
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Pilih tipe proyek untuk terhubung dengan estimator tim kami.
                </p>
              </div>

              {/* Segmented Tab Switcher (B2C vs B2B) */}
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-950/80 rounded-xl border border-slate-800/80 mb-6">
                <button
                  type="button"
                  onClick={() => setProjectType("residential")}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${projectType === "residential"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  <FaHouse className="w-3.5 h-3.5" />
                  <span>Hunian / B2C</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectType("commercial")}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${projectType === "commercial"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  <FaBuilding className="w-3.5 h-3.5" />
                  <span>Komersial / B2B</span>
                </button>
              </div>

              {/* Dynamic Content berdasarkan Pilihan Tab */}
              <div className="space-y-4 mb-6 bg-slate-950/40 p-4 rounded-xl border border-slate-800/50">
                {projectType === "residential" ? (
                  <>
                    <div className="flex items-start gap-3 text-left">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <p className="text-slate-300 text-xs sm:text-sm">
                        <strong className="text-white">Bangun Baru & Renovasi:</strong> Estimasi transparan sesuai budget tanpa deviasi RAB.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <p className="text-slate-300 text-xs sm:text-sm">
                        <strong className="text-white">Desain 3D & Layout:</strong> Visualisasi lengkap sebelum tahap pengerjaan dimulai.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-3 text-left">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <p className="text-slate-300 text-xs sm:text-sm">
                        <strong className="text-white">Gedung, Gudang & MEP:</strong> Standar K3 resmi dengan dukungan legalitas lengkap (NIB & SBU).
                      </p>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <p className="text-slate-300 text-xs sm:text-sm">
                        <strong className="text-white">Pengajuan Tender:</strong> Dokumen teknis dan penawaran formal siap di-review.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Dynamic WhatsApp Action Button */}
              <a
                href={
                  projectType === "residential"
                    ? "https://wa.me/6285326566522?text=Halo%20HAB%20Konstruksi,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20hunian/rumah."
                    : "https://wa.me/6285326566522?text=Halo%20HAB%20Konstruksi,%20saya%20ingin%20diskusi%20mengenai%20proyek%20komersial/B2B/tender."
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/30 transition-all duration-200"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>
                  {projectType === "residential"
                    ? "Konsultasi Rumah / Hunian"
                    : "Diskusi Proyek Komersial / B2B"}
                </span>
              </a>

              <div className="mt-4 text-center">
                <a
                  href="#portofolio"
                  className="text-slate-400 hover:text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Eksplorasi portofolio proyek terrealisasi</span>
                  <FaArrowRight className="w-3 h-3 text-amber-400" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}