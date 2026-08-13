"use client";

import React, { useState } from "react";
import {
  Home,
  Building2,
  PenTool,
  ArrowUpRight,
  Wrench,
  MonitorSmartphone,
  HardHat
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "residential", label: "Residensial & Hunian", code: "01" },
  { id: "commercial", label: "Komersial & Gedung", code: "02" },
  { id: "planning", label: "Desain & Perencanaan", code: "03" },
];

const services = [
  // RESIDENTIAL
  {
    code: "RES-01",
    title: "Bangun Rumah Baru",
    description: "Layanan rancang bangun rumah tinggal dari nol. Pengawasan penuh dari persiapan struktur bawah hingga penyerahan kunci.",
    icon: <Home className="w-5 h-5 text-neutral-900" />,
    category: "residential",
    deliverables: [
      "Visualisasi Fasad & Layout Fungsional",
      "Material Standar SNI & RAB Mengikat",
      "Laporan Kurva-S & Progres Mingguan",
      "Sertifikat Garansi Struktur Pemeliharaan"
    ],
    waText: "Halo HABS, saya ingin konsultasi pengerjaan Bangun Rumah Baru."
  },
  {
    code: "RES-02",
    title: "Renovasi & Ekstensifikasi",
    description: "Peremajaan bangunan total, penambahan lantai (ngedak), atau perbaikan fasad dengan analisis beban struktur lama.",
    icon: <Wrench className="w-5 h-5 text-neutral-900" />,
    category: "residential",
    deliverables: [
      "Audit Fisik & Kekuatan Struktur Lama",
      "Perhitungan Penambahan Beban Beton",
      "Manajemen Proyek Minim Gangguan",
      "Penyerahan On-Time Sesuai Kontrak"
    ],
    waText: "Halo HABS, saya ingin konsultasi pengerjaan Renovasi Rumah."
  },
  {
    code: "RES-03",
    title: "Custom Interior & Furniture",
    description: "Optimalisasi tata ruang dalam dengan custom cabinetry presisi tinggi, pemilihan finishing material, dan lighting.",
    icon: <PenTool className="w-5 h-5 text-neutral-900" />,
    category: "residential",
    deliverables: [
      "Custom Cabinetry HPL & Duco Premium",
      "Layout Ergonomis & Akurasi Ukuran",
      "Instalasi Hidden LED & Electrical",
      "Pemasangan Bersih Tanpa Cacat Detail"
    ],
    waText: "Halo HABS, saya ingin konsultasi pengerjaan Custom Interior."
  },

  // COMMERCIAL
  {
    code: "COM-01",
    title: "Konstruksi Gudang & Pabrik",
    description: "Pembangunan infrastruktur industri dengan perhitungan struktur baja WF/beton bertulang anti-debu skala berat.",
    icon: <Building2 className="w-5 h-5 text-neutral-900" />,
    category: "commercial",
    deliverables: [
      "Perhitungan Struktur Baja WF & Fondasi",
      "Pengecoran Floor Hardener Anti-Debu",
      "Sistem Sirkulasi & Ventilisasi Industri",
      "Kepatuhan Standar Regulasi K3/HSE"
    ],
    waText: "Halo HABS, saya butuh penawaran Konstruksi Gudang/Pabrik."
  },
  {
    code: "COM-02",
    title: "Bangun Kantor & Area Ruko",
    description: "Perencanaan dan konstruksi ruang usaha komersial yang mengutamakan fungsionalitas dan citra identitas bisnis.",
    icon: <HardHat className="w-5 h-5 text-neutral-900" />,
    category: "commercial",
    deliverables: [
      "Tata Ruang Kerja Ergonomis B2B",
      "Fasad ACP, Kaca & Aluminium Glass",
      "Jaringan MEP & Kelistrikan Komersial",
      "Penyerahan BAST Sesuai Jadwal SLA"
    ],
    waText: "Halo HABS, saya membutuhkan penawaran Bangun Kantor/Ruko."
  },
  {
    code: "COM-03",
    title: "Instalasi Spesialis & MEP",
    description: "Pengerjaan sistem mekanikal, elektrikal, plumbing 3-phase, serta partisi akustik skala gedung.",
    icon: <MonitorSmartphone className="w-5 h-5 text-neutral-900" />,
    category: "commercial",
    deliverables: [
      "Panel Kelistrikan Induk & 3-Phase",
      "Instalasi Pipa Air Bersih & Kotor",
      "Plafon Akustik & Partisi Gypsum",
      "Kusen Aluminium Heavy Duty"
    ],
    waText: "Halo HABS, saya membutuhkan vendor Pekerjaan MEP/Spesialis."
  },

  // PLANNING
  {
    code: "PLN-01",
    title: "Penyusunan Desain DED & RAB",
    description: "Penyusunan dokumen teknis lengkap sebagai cetak biru resmi sebelum memasuki tahap tender atau pembangunan fisik.",
    icon: <PenTool className="w-5 h-5 text-neutral-900" />,
    category: "planning",
    deliverables: [
      "Gambar Kerja Detail (DED) 2D",
      "Visualisasi Render 3D Eksterior/Interior",
      "Rancangan Anggaran Biaya (RAB) Detail",
      "Daftar Spesifikasi Teknis Material"
    ],
    waText: "Halo HABS, saya ingin memesan layanan Desain & RAB."
  },
  {
    code: "PLN-02",
    title: "Konsultasi Tata Kelola IT",
    description: "Pendampingan penyusunan SOP teknis, audit tata kelola TI (COBIT), dan manajemen aset infrastruktur digital bisnis.",
    icon: <MonitorSmartphone className="w-5 h-5 text-neutral-900" />,
    category: "planning",
    deliverables: [
      "Pemetaan SOP IT & Standard Operasional",
      "Implementasi IT Asset Management (GLPI)",
      "Konsultasi Infrastruktur Jaringan Usaha",
      "Digitalisasi Sistem & Platform Bisnis"
    ],
    waText: "Halo HABS, saya butuh konsultasi untuk IT & Digital Solution."
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("residential");

  const filteredServices = services.filter(
    (service) => service.category === activeTab
  );

  return (
    <section id="layanan" className="py-20 sm:py-28 bg-[#FAFAFA] text-neutral-900 font-sans border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Top Line & Header */}
        <div className="border-b border-neutral-300 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#B61F2B] uppercase tracking-widest block mb-2">
              02 / MATRIKS SPESIFIKASI LAYANAN
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-neutral-950 leading-tight">
              Pilar Rekayasa & <br />
              <span className="font-bold text-neutral-900">Solusi Konstruksi.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed font-normal md:text-right">
            Pendekatan terstruktur end-to-end yang menjamin transparansi RAB mengikat, kepatuhan analisis struktur, dan kepastian jadwal serah terima.
          </p>
        </div>

        {/* Monospaced Filter Tab Index */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-12 border-b border-neutral-200 pb-6 text-xs font-mono">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`transition-colors py-1 flex items-center gap-2 ${isActive
                  ? "text-[#B61F2B] font-bold border-b-2 border-[#B61F2B] -mb-[26px]"
                  : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                <span>[{cat.code}]</span>
                <span className="uppercase tracking-wider">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Structural Grid (No Card Containers) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-neutral-200 p-8 flex flex-col justify-between text-left hover:border-neutral-900 transition-colors group"
              >
                <div>
                  {/* Scope Index Code & Minimal Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-100 font-mono text-xs">
                    <span className="text-[#B61F2B] font-bold">
                      [{service.code}]
                    </span>
                    <div className="p-2 bg-neutral-100 text-neutral-900">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-[#B61F2B] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Editorial Deliverables List */}
                  <div className="space-y-3 mb-8 border-t border-neutral-100 pt-6">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2 font-bold">
                      Lingkup Pengerjaan Utama:
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 font-mono">
                        <span className="text-[#B61F2B] font-bold">—</span>
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 border-t border-neutral-100">
                  <a
                    href={`https://wa.me/6285326566522?text=${encodeURIComponent(service.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-mono font-bold text-neutral-900 hover:text-[#B61F2B] transition-colors group-hover:underline"
                  >
                    <span>KONSULTASI SPESIFIKASI</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}