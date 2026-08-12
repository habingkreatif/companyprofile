"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: "residential" | "commercial" | "interior";
  categoryLabel: string;
  image: string;
  location: string;
  area: string;
  duration: string;
  year: string;
  description: string;
  scope: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Pembangunan Hunian Modern Tropis",
    category: "residential",
    categoryLabel: "Residensial / Hunian",
    image: "/gambar3.webp",
    location: "Yogyakarta",
    area: "250 m²",
    duration: "5 Bulan",
    year: "2025",
    description: "Pembangunan rumah tinggal 2 lantai dengan konsep modern tropis. Mengoptimalkan pencahayaan alami dan sirkulasi udara dengan struktur beton bertulang presisi.",
    scope: ["Pekerjaan Pondasi & Struktur", "Finishing Fasad & Batu Alam", "Instalasi MEP & Plumbing", "Pekerjaan Atap Baja Ringan"]
  },
  {
    id: 2,
    title: "Renovasi Ruko & Facade Makeover",
    category: "commercial",
    categoryLabel: "Komersial / B2B",
    image: "/gambar1.webp",
    location: "Sleman, DIY",
    area: "180 m²",
    duration: "2.5 Bulan",
    year: "2025",
    description: "Transformasi fasad ruko komersial menjadi area kantor modern berpintu kaca aluminium dengan pencahayaan LED arsitektural.",
    scope: ["Pemasangan ACP & Aluminium Glass", "Layout ulang area interior office", "Instalasi Kelistrikan 3-Phase", "Pengecatan Eksterior Weatherproof"]
  },
  {
    id: 3,
    title: "Custom Kitchen Set & Dining Area",
    category: "interior",
    categoryLabel: "Interior & Custom",
    image: "/gambar4.webp",
    location: "Bantul, DIY",
    area: "45 m²",
    duration: "3 Minggu",
    year: "2026",
    description: "Perancangan dan instalasi kitchen set minimalis berbahan HPL premium, lengkap dengan top table granit dan lighting hidden LED.",
    scope: ["Custom Cabinetry HPL", "Top Table Granit Natural", "Instalasi Sink & Plumbing Dapur", "Lighting & Power Outlet"]
  },
  {
    id: 4,
    title: "Konstruksi Villa & Paviliun Keluarga",
    category: "residential",
    categoryLabel: "Residensial / Hunian",
    image: "/rumah1.jpg",
    location: "Kulon Progo",
    area: "320 m²",
    duration: "6 Bulan",
    year: "2025",
    description: "Pembangunan tempat tinggal peristirahatan dengan area terbuka, lanskap taman, dan konstruksi atap ekspos bergaya kontemporer.",
    scope: ["Pekerjaan Sipil & Pengecoran", "Pembuatan Kolam & Lanskap", "Finishing Lantai Granit Tile", "Pekerjaan Plafon Gypsum"]
  },
  {
    id: 5,
    title: "Pembangunan Gudang & Area Logistik",
    category: "commercial",
    categoryLabel: "Komersial / B2B",
    image: "/gambar5.webp",
    location: "Kawasan Industri",
    area: "600 m²",
    duration: "4 Bulan",
    year: "2024",
    description: "Konstruksi gudang penyimpanan dengan struktur baja WF, lantai floor hardener anti-debu, dan aksesibilitas armada berat.",
    scope: ["Fabrikasi Struktur Baja WF", "Pengecoran Lantai Floor Hardener", "Instalasi Atap Spandek & Insulation", "Sistem Drainase & Pagar Kawasan"]
  },
  {
    id: 6,
    title: "Interior Living Room & Master Bedroom",
    category: "interior",
    categoryLabel: "Interior & Custom",
    image: "/gambar7.webp",
    location: "Yogyakarta",
    area: "85 m²",
    duration: "1 Bulan",
    year: "2026",
    description: "Transformasi interior ruang keluarga dan kamar utama meliputi wall panel kisi-kisi kayu, backdrop TV, dan bed headboard custom.",
    scope: ["Wall Panel Wood Slat", "Backdrop TV Cabinet Custom", "Pemasangan Lantai Vinyl", "Pengecatan Interior Duco"]
  },
];

const categories = [
  { id: "all", label: "Semua Proyek", code: "00" },
  { id: "residential", label: "Hunian & Rumah", code: "01" },
  { id: "commercial", label: "Komersial & B2B", code: "02" },
  { id: "interior", label: "Interior Custom", code: "03" },
];

// Luxury Architectural Easing Curve (Smooth & Weighty)
const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(
    (project) => activeTab === "all" || project.category === activeTab
  );

  return (
    <section id="portofolio" className="py-20 sm:py-28 bg-[#FBFBFB] text-neutral-900 font-sans border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Header */}
        <div className="border-b border-neutral-300 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#B61F2B] uppercase tracking-widest block mb-2">
              04 / KATALOG EKSEKUSI FISIK
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-neutral-950 leading-tight">
              Arsip Rekam Jejak <br />
              <span className="font-bold text-neutral-900">Proyek Terrealisasi.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-md text-left md:text-right leading-relaxed font-normal">
            Dokumentasi hasil pengerjaan sipil, komersial, dan kustomisasi interior yang diselesaikan sesuai spesifikasi teknis dan RAB.
          </p>
        </div>

        {/* Smooth Gliding Filter Tabs */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-12 border-b border-neutral-200 pb-4 text-xs font-mono relative">
          {categories.map((cat) => {
            const count = cat.id === "all"
              ? projectsData.length
              : projectsData.filter(p => p.category === cat.id).length;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative py-2 flex items-center gap-2 transition-colors duration-300 ${isActive ? "text-[#B61F2B] font-bold" : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                <span>[{cat.code}]</span>
                <span className="uppercase tracking-wider">{cat.label}</span>
                <span className="text-[10px] text-neutral-400">({count})</span>

                {/* Smooth Animated Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B61F2B]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Grid Container */}
        <motion.div
          layout
          transition={{ duration: 0.5, ease: LUXURY_EASE }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{
                  duration: 0.45,
                  ease: LUXURY_EASE,
                  layout: { duration: 0.45, ease: LUXURY_EASE }
                }}
                className="flex flex-col text-left space-y-4"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer flex flex-col text-left space-y-4"
                    >
                      {/* Frame Image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 border border-neutral-300">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-all duration-700 ease-out grayscale contrast-105 group-hover:grayscale-0"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Hover Overlay Arrow */}
                        <div className="absolute top-4 right-4 p-2 bg-neutral-950 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Technical Metadata Strip */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                          <span>{project.location}</span>
                          <span>{project.area} • {project.year}</span>
                        </div>

                        <h3 className="text-lg font-bold text-neutral-950 group-hover:text-[#B61F2B] transition-colors duration-300 leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-neutral-600 text-xs leading-relaxed line-clamp-2 font-normal">
                          {project.description}
                        </p>

                        <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-900 group-hover:text-[#B61F2B] transition-colors duration-300">
                          <span>Buka Lembar Spesifikasi</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* ARCHITECTURAL DOSSIER MODAL DIALOG */}
                  <DialogContent className="max-w-3xl p-6 sm:p-10 bg-white border border-neutral-300 rounded-none max-h-[90vh] overflow-y-auto text-left font-sans">
                    {selectedProject && (
                      <div className="space-y-8">

                        {/* Modal Header Dossier */}
                        <DialogHeader className="border-b border-neutral-200 pb-6 text-left">
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 uppercase mb-2">
                            <span>[ DOSSIER #{selectedProject.id.toString().padStart(2, "0")} ]</span>
                            <span className="text-[#B61F2B] font-bold">{selectedProject.categoryLabel}</span>
                          </div>
                          <DialogTitle className="text-2xl sm:text-4xl font-bold text-neutral-950 leading-tight">
                            {selectedProject.title}
                          </DialogTitle>
                        </DialogHeader>

                        {/* Modal Main Image */}
                        <div className="relative aspect-[16/9] w-full border border-neutral-300 bg-neutral-100">
                          <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            fill
                            className="object-cover"
                            sizes="800px"
                          />
                        </div>

                        {/* Technical Specs Line Sheet */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-neutral-200 text-xs font-mono">
                          <div>
                            <span className="text-neutral-400 block uppercase text-[10px] mb-0.5">Lokasi</span>
                            <span className="font-bold text-neutral-900">{selectedProject.location}</span>
                          </div>
                          <div>
                            <span className="text-neutral-400 block uppercase text-[10px] mb-0.5">Luas Area</span>
                            <span className="font-bold text-neutral-900">{selectedProject.area}</span>
                          </div>
                          <div>
                            <span className="text-neutral-400 block uppercase text-[10px] mb-0.5">Durasi Waktu</span>
                            <span className="font-bold text-neutral-900">{selectedProject.duration}</span>
                          </div>
                          <div>
                            <span className="text-neutral-400 block uppercase text-[10px] mb-0.5">Tahun Selesai</span>
                            <span className="font-bold text-neutral-900">{selectedProject.year}</span>
                          </div>
                        </div>

                        {/* Narrative Description */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                            Catatan Eksekusi Teknik
                          </h4>
                          <p className="text-neutral-700 text-sm leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>

                        {/* Scope of Work Editorial List */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                            Lingkup Pekerjaan PT HAB
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs font-mono text-neutral-800">
                            {selectedProject.scope.map((item, i) => (
                              <div key={i} className="flex items-center gap-2 border-b border-neutral-100 pb-2">
                                <span className="text-[#B61F2B] font-bold">—</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Modal WhatsApp Action Button */}
                        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-xs font-mono text-neutral-500">
                            Tertarik mendiskusikan konsep proyek serupa?
                          </span>
                          <a
                            href={`https://wa.me/6285326566522?text=${encodeURIComponent(`Halo HAB, saya melihat proyek "${selectedProject.title}" di portofolio dan ingin diskusi pengerjaan serupa.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors rounded-none"
                          >
                            <FaWhatsapp className="w-4 h-4" />
                            <span>Konsultasikan Proyek Serupa</span>
                          </a>
                        </div>

                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}