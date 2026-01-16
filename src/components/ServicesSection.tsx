"use client";

import React, { useState } from "react";
import { 
  ClipboardList, 
  HardHat, 
  Hammer, 
  Trees, 
  Maximize, 
  Grid2X2, 
  Home, 
  Utensils, 
  PaintRoller, 
  Ruler, 
  DoorOpen, 
  Building2, 
  Paintbrush, 
  Layers, 
  Zap, 
  LayoutGrid, 
  Monitor, 
  Wrench,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "Semua Layanan" },
  { id: "konstruksi", label: "Konstruksi & Renovasi" },
  { id: "interior", label: "Interior & Eksterior" },
  { id: "spesialis", label: "Pekerjaan Spesialis" },
  { id: "perencanaan", label: "Perencanaan & Digital" },
];

const services = [
  // PERENCANAAN
  {
    title: "Perencanaan & Konsultasi",
    description: "Konsultasi teknis dan perencanaan matang untuk hasil proyek optimal.",
    icon: <ClipboardList className="w-8 h-8" />,
    category: "perencanaan"
  },
  {
    title: "Desain 2D/3D & RAB",
    description: "Visualisasi desain detail lengkap dengan estimasi biaya presisi.",
    icon: <Ruler className="w-8 h-8" />,
    category: "perencanaan"
  },
  {
    title: "Website & Company Profile",
    description: "Pembuatan website profesional untuk portofolio dan branding bisnis.",
    icon: <Monitor className="w-8 h-8" />,
    category: "perencanaan"
  },

  // KONSTRUKSI
  {
    title: "Jasa Konstruksi Bangunan",
    description: "Pembangunan struktur baru dengan standar teknik sipil terbaik.",
    icon: <HardHat className="w-8 h-8" />,
    category: "konstruksi"
  },
  {
    title: "Renovasi Total",
    description: "Peremajaan bangunan menyeluruh untuk kenyamanan dan nilai aset.",
    icon: <Hammer className="w-8 h-8" />,
    category: "konstruksi"
  },
  {
    title: "Dak & Struktur Beton",
    description: "Pengecoran dak dan struktur beton bertulang yang kokoh.",
    icon: <Building2 className="w-8 h-8" />,
    category: "konstruksi"
  },
  {
    title: "Perbaikan Atap",
    description: "Solusi anti bocor dan penggantian rangka atap profesional.",
    icon: <Home className="w-8 h-8" />,
    category: "konstruksi"
  },
  {
    title: "Pemeliharaan Bangunan",
    description: "Maintenance rutin untuk menjaga performa dan estetika gedung.",
    icon: <Wrench className="w-8 h-8" />,
    category: "konstruksi"
  },

  // INTERIOR & EKSTERIOR
  {
    title: "Interior & Makeover",
    description: "Transformasi ruang dalam untuk kenyamanan dan gaya modern.",
    icon: <PaintRoller className="w-8 h-8" />,
    category: "interior"
  },
  {
    title: "Kitchen Set Custom",
    description: "Desain dapur fungsional dengan material berkualitas tinggi.",
    icon: <Utensils className="w-8 h-8" />,
    category: "interior"
  },
  {
    title: "Pengecatan Profesional",
    description: "Pengecatan dinding interior dan eksterior dengan hasil halus.",
    icon: <Paintbrush className="w-8 h-8" />,
    category: "interior"
  },
  {
    title: "Lanskap & Taman",
    description: "Penataan area hijau dan taman untuk keasrian lingkungan.",
    icon: <Trees className="w-8 h-8" />,
    category: "interior"
  },

  // SPESIALIS
  {
    title: "Kaca & Aluminium",
    description: "Instalasi kusen aluminium dan partisi kaca modern.",
    icon: <Maximize className="w-8 h-8" />,
    category: "spesialis"
  },
  {
    title: "Pagar & Bengkel Las",
    description: "Fabrikasi pagar, kanopi, dan tralis besi sesuai pesanan.",
    icon: <Grid2X2 className="w-8 h-8" />,
    category: "spesialis"
  },
  {
    title: "Pintu, Jendela & Kusen",
    description: "Pemasangan dan finishing pintu serta jendela presisi.",
    icon: <DoorOpen className="w-8 h-8" />,
    category: "spesialis"
  },
  {
    title: "Plafon & Partisi Gypsum",
    description: "Desain plafon artistik dan partisi ruangan gypsum rapi.",
    icon: <Layers className="w-8 h-8" />,
    category: "spesialis"
  },
  {
    title: "ME (Listrik & Plumbing)",
    description: "Instalasi kelistrikan dan saluran air standar keamanan.",
    icon: <Zap className="w-8 h-8" />,
    category: "spesialis"
  },
  {
    title: "Lantai & Keramik",
    description: "Pemasangan granit, keramik, dan parket lantai presisi.",
    icon: <LayoutGrid className="w-8 h-8" />,
    category: "spesialis"
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = services.filter(
    (service) => activeTab === "all" || service.category === activeTab
  );

  return (
    <section
      id="layanan"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <div className="inline-block py-1 px-3 rounded-full bg-slate-100 text-[#B61F2B] text-xs font-bold tracking-widest uppercase mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#101010] mb-6">
            Layanan <span className="text-[#B61F2B]">Terintegrasi</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
             Solusi konstruksi end-to-end. Dari perencanaan digital hingga eksekusi fisik, kami menjamin kualitas di setiap tahap.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeTab === cat.id
                  ? "bg-[#B61F2B] text-white border-[#B61F2B] shadow-lg shadow-red-900/20"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
           layout
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#B61F2B]/30 hover:shadow-xl hover:shadow-[#B61F2B]/5 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-[#B61F2B] mb-6 group-hover:scale-110 group-hover:bg-[#B61F2B] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#B61F2B] transition-colors line-clamp-2">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center text-xs font-bold text-[#B61F2B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   {/* Selengkapnya <ArrowRight className="w-3 h-3 ml-1" /> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
