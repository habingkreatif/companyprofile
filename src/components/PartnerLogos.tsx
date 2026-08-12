"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

interface Division {
  id: string;
  num: string;
  name: string;
  tagline: string;
  logo: string;
  previewImage: string;
  specs: string[];
  impact: string;
}

const divisions: Division[] = [
  {
    id: "commodities",
    num: "01",
    name: "HABS Commodities",
    tagline: "Rantai Pasok & Pengadaan Bahan Baku",
    logo: "/commodities.png",
    previewImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop", // Ganti dengan foto riil armada/material
    specs: ["Semen Standar SNI", "Besi Beton & Wiremesh", "Agregat & Aluminium"],
    impact: "Memasang garansi ketersediaan material tanpa markup harga vendor pihak ketiga.",
  },
  {
    id: "crew",
    num: "02",
    name: "HABS Crew",
    tagline: "Manajemen SDM & Supervisor Lapangan",
    logo: "/crew.png",
    previewImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop", // Ganti dengan foto tim proyek/K3
    specs: ["Tukang Spesialis Terverifikasi", "Site Manager & Supervisor", "Ahli K3 Konstruksi"],
    impact: "Standar eksekusi presisi tinggi dengan kedisiplinan dan keselamatan kerja ketat.",
  },
  {
    id: "konstruksi",
    num: "03",
    name: "HABS Konstruksi",
    tagline: "Rekayasa Sipil & Main Contractor",
    logo: "/konstruksi.png",
    previewImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop", // Ganti dengan foto lokasi proyek
    specs: ["Struktur Gedung & Komersial", "Hunian Mewah (Luxury Residence)", "Infrastruktur Rekayasa"],
    impact: "Eksekusi berdasarkan cetak biru DED dengan kepastian jadwal dan RAB yang terkunci.",
  },
  {
    id: "production",
    num: "04",
    name: "HABS Production",
    tagline: "Fabrikasi & Finishing Custom MEP",
    logo: "/production.png",
    previewImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop", // Ganti dengan foto workshop/interior
    specs: ["Workshop Custom Furniture", "Kusen & Panel Aluminium", "Instalasi MEP Modular"],
    impact: "Detail finishing interior & MEP presisi tinggi langsung dari workshop mandiri.",
  },
];

export default function PartnerLogos() {
  const [activeTab, setActiveTab] = useState<string>(divisions[0].id);
  const activeData = divisions.find((d) => d.id === activeTab) || divisions[0];

  return (
    <section className="py-24 bg-[#FAFAFA] text-neutral-900 border-y border-neutral-200 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Editorial */}
        <div className="border-b border-neutral-200 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#B61F2B] uppercase tracking-[0.2em] block mb-2">
              02 / EKOSISTEM TERINTEGRASI HABS GROUP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-950 leading-tight">
              Kontrol Rantai Pasok. <br />
              <span className="font-bold">Dari Hulu Hingga Serah Terima.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed font-normal md:text-right">
            Sinergi empat unit bisnis internal mengeliminasi risiko kenaikan harga vendor sepihak dan keterlambatan pengerjaan proyek.
          </p>
        </div>

        {/* Split Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Kolom Kanan / Menu Navigation (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3 text-left">
            {divisions.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveTab(item.id)}
                  onClick={() => setActiveTab(item.id)}
                  className={`p-6 border transition-all duration-300 cursor-pointer relative ${isActive
                    ? "bg-white border-[#B61F2B] shadow-sm"
                    : "bg-transparent border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100/50"
                    }`}
                >
                  {/* Active Marker Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#B61F2B]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-bold ${isActive ? "text-[#B61F2B]" : "text-neutral-400"
                        }`}
                    >
                      [{item.num}]
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      {item.tagline}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold tracking-tight transition-colors ${isActive ? "text-neutral-950" : "text-neutral-500"
                      }`}
                  >
                    {item.name}
                  </h3>
                </div>
              );
            })}

            {/* Micro Footnote Statement */}
            <div className="pt-4 border-t border-neutral-200 font-mono text-xs text-neutral-500 flex items-center justify-between">
              <span>● 100% IN-HOUSE SUPPLY CHAIN</span>
              <span className="text-neutral-400">HAB GROUP SPEC</span>
            </div>
          </div>

          {/* Kolom Kiri / Dynamic Preview Canvas (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left min-h-[480px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full space-y-6"
              >
                {/* Visual Header / Brand Logo & Number */}
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#B61F2B] uppercase tracking-widest block">
                      DIVISI /{activeData.num}
                    </span>
                    <h4 className="text-2xl font-bold text-neutral-950 tracking-tight">
                      {activeData.name}
                    </h4>
                  </div>

                  {/* Brand Logo Display */}
                  <div className="relative w-32 h-10">
                    <Image
                      src={activeData.logo}
                      alt={activeData.name}
                      fill
                      className="object-contain object-right"
                      sizes="128px"
                    />
                  </div>
                </div>

                {/* Hero Image Showcase Preview */}
                <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-neutral-100 border border-neutral-200">
                  <Image
                    src={activeData.previewImage}
                    alt={activeData.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20" />
                  <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-white uppercase tracking-wider">
                    DOKUMENTASI OPERASIONAL / {activeData.id}
                  </div>
                </div>

                {/* Technical Specs & Impact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                      Cakupan Spesifikasi:
                    </span>
                    <ul className="space-y-1.5 text-xs font-medium text-neutral-800">
                      {activeData.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#B61F2B] shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                      Dampak Terhadap Proyek:
                    </span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {activeData.impact}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}