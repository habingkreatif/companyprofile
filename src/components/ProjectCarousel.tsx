"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowUpRight,
  Timer,
  AlertCircle
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { useProjects } from "@/presentation/hooks/useProject";
import DescriptionModal from "./DescriptionModal";

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const { projects, loading, error } = useProjects();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const next = () => {
    if (!projects || projects.length === 0) return;
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    if (!projects || projects.length === 0) return;
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Safe Date Formatter (Anti-Crash)
  const formatHariTanggal = (rawDate?: string) => {
    if (!rawDate) return "-";
    try {
      const fixedDate = rawDate.replace(/(\d+)\.(\d+)\.(\d+)/, "$1-$2-$3");
      const date = new Date(fixedDate);
      if (isNaN(date.getTime())) return rawDate;
      return date.toLocaleDateString("id-ID", {
        month: "short",
        year: "numeric",
      });
    } catch {
      return rawDate;
    }
  };

  const currentProject = projects && projects.length > 0 ? projects[current] : null;

  return (
    <section id="proyekberjalan" className="py-20 sm:py-28 bg-[#0C0C0C] text-[#ECECEC] font-sans relative overflow-hidden border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header - Technical Monograph Style */}
        <div className="border-b border-neutral-800 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#B61F2B] uppercase tracking-widest block mb-2">
              03 / MONITORING PROGRES LAPANGAN (LIVE)
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              Laporan Pengawasan & <br />
              <span className="font-bold text-white">Proyek Dalam Pengerjaan.</span>
            </h2>
          </div>

          {/* Desktop Navigation Controls */}
          {projects && projects.length > 1 && (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-500 mr-2">
                PROYEK {current + 1} / {projects.length}
              </span>
              <button
                onClick={prev}
                aria-label="Proyek Sebelumnya"
                className="p-3 border border-neutral-700 bg-neutral-900 text-white hover:bg-white hover:text-black transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Proyek Selanjutnya"
                className="p-3 border border-neutral-700 bg-neutral-900 text-white hover:bg-white hover:text-black transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 bg-red-950/40 border border-red-800/80 text-red-300 font-mono text-xs mb-8 flex items-center gap-3">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>Gagal memuat data live monitoring: {error}</span>
          </div>
        )}

        {/* Main Content Showcase Frame */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {loading ? (
              <div className="h-[480px] w-full bg-neutral-900/50 border border-neutral-800 animate-pulse flex items-center justify-center font-mono text-xs text-neutral-500">
                [ MEMUAT DATA LOG LAPANGAN... ]
              </div>
            ) : currentProject ? (
              <motion.div
                key={currentProject.id || current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="border border-neutral-800 bg-[#121212] text-left"
              >
                <div className="grid lg:grid-cols-12 gap-0">

                  {/* Left Column: Image Frame (7 Cols) */}
                  <div className="lg:col-span-7 relative h-[300px] sm:h-[400px] lg:h-auto bg-neutral-900 border-b lg:border-b-0 lg:border-r border-neutral-800">
                    <Image
                      src={currentProject.image || "/placeholder-image.jpg"}
                      alt={currentProject.title}
                      fill
                      className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-image.jpg";
                      }}
                    />

                    {/* Status Technical Tag */}
                    <div className="absolute top-4 left-4 font-mono text-[11px]">
                      <span
                        className={`px-3 py-1 border font-bold uppercase tracking-wider ${currentProject.status === "Selesai"
                          ? "bg-emerald-950/90 border-emerald-600 text-emerald-400"
                          : "bg-amber-950/90 border-amber-500 text-amber-300"
                          }`}
                      >
                        ● STATUS: {currentProject.status === "Selesai" ? "SERAH TERIMA SELESAI" : "PENGERJAAN LAPANGAN AKTIF"}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Technical Dossier Info (5 Cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-[#121212]">

                    <div className="space-y-6">

                      {/* Location & Title */}
                      <div>
                        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase mb-2">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{currentProject.location}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                          {currentProject.title}
                        </h3>
                      </div>

                      {/* Timelines Strip */}
                      <div className="grid grid-cols-2 gap-4 border-y border-neutral-800 py-4 font-mono text-xs">
                        <div>
                          <span className="text-neutral-500 block text-[10px] uppercase mb-1">
                            Tanggal Mulai
                          </span>
                          <div className="flex items-center gap-2 text-neutral-200">
                            <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{formatHariTanggal(currentProject.start)}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-neutral-500 block text-[10px] uppercase mb-1">
                            Estimasi Selesai
                          </span>
                          <div className="flex items-center gap-2 text-neutral-200">
                            <Timer className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{formatHariTanggal(currentProject.end)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                        {currentProject.description}
                      </p>

                      {/* Crisp Technical Progress Bar */}
                      <div className="pt-2">
                        <div className="flex justify-between items-center mb-2 font-mono text-xs">
                          <span className="text-neutral-400 uppercase">
                            Capaian Fisik Lapangan
                          </span>
                          <span className="font-bold text-amber-400 text-base">
                            {currentProject.totalProgress}%
                          </span>
                        </div>

                        <div className="w-full h-2 bg-neutral-900 border border-neutral-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${currentProject.totalProgress}%`,
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-amber-400"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Action Block */}
                    <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setShowFullDescription(true)}
                        className="flex-1 py-3.5 px-4 border border-neutral-700 hover:border-white text-white font-mono text-xs uppercase font-bold flex items-center justify-center gap-2 transition-colors"
                      >
                        <span>Laporan Kurva-S</span>
                        <ArrowUpRight className="w-4 h-4 text-amber-400" />
                      </button>

                      <a
                        href={`https://wa.me/6285326566522?text=${encodeURIComponent(`Halo HABS, saya melihat progres proyek "${currentProject.title}" di web dan ingin konsultasi pengerjaan serupa.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase font-mono flex items-center justify-center gap-2 transition-colors"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>Diskusi Proyek</span>
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-48 flex items-center justify-center border border-neutral-800 bg-[#121212] text-neutral-500 font-mono text-xs">
                [ BELUM ADA DATA PROYEK BERJALAN SAAT INI ]
              </div>
            )}
          </AnimatePresence>

          {/* Navigation Controls (Mobile) */}
          {projects && projects.length > 1 && (
            <div className="flex md:hidden justify-between items-center mt-6">
              <span className="text-xs font-mono text-neutral-500">
                [{current + 1} / {projects.length}]
              </span>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2.5 border border-neutral-700 bg-neutral-900 text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="p-2.5 border border-neutral-700 bg-neutral-900 text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Detail Modal Integration */}
      {currentProject && (
        <DescriptionModal
          isOpen={showFullDescription}
          onClose={() => setShowFullDescription(false)}
          title={currentProject.title}
          description={currentProject.description}
          image={currentProject.image}
          projectData={{
            category: currentProject.location,
            location: currentProject.location,
            author: "Tim Insinyur HABS",
            updatedAt: currentProject.updated_at,
            startDate: currentProject.start,
            endDate: currentProject.end,
          }}
        />
      )}
    </section>
  );
}