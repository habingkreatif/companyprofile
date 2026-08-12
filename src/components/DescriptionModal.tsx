"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
   X,
   MapPin,
   Calendar,
   Clock,
   Share2,
   Maximize2,
   ArrowUpRight,
   ShieldCheck
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface DescriptionModalProps {
   isOpen: boolean;
   onClose: () => void;
   title: string;
   description: string;
   image?: string;
   projectData?: {
      category?: string;
      location?: string;
      author?: string;
      updatedAt?: string;
      startDate?: string;
      endDate?: string;
   };
}

export default function DescriptionModal({
   isOpen,
   onClose,
   title,
   description,
   image,
   projectData,
}: DescriptionModalProps) {
   // Safe Duration Calculator
   const calculateDuration = (startDate?: string, endDate?: string) => {
      if (!startDate || !endDate) return "-";
      try {
         const fixedStart = startDate.replace(/(\d+)\.(\d+)\.(\d+)/, "$1-$2-$3");
         const fixedEnd = endDate.replace(/(\d+)\.(\d+)\.(\d+)/, "$1-$2-$3");
         const start = new Date(fixedStart);
         const end = new Date(fixedEnd);

         if (isNaN(start.getTime()) || isNaN(end.getTime())) return "-";

         const diffTime = Math.abs(end.getTime() - start.getTime());
         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
         const diffMonths = Math.floor(diffDays / 30);
         const diffYears = Math.floor(diffMonths / 12);

         if (diffYears > 0) return `${diffYears} Tahun`;
         if (diffMonths > 0) return `${diffMonths} Bulan`;
         return `${diffDays} Hari`;
      } catch {
         return "-";
      }
   };

   // Safe Date Formatter (Fixes Invalid Date JS Bug)
   const formatHariTanggal = (rawDate?: string) => {
      if (!rawDate) return "-";
      try {
         const fixedDate = rawDate.replace(/(\d+)\.(\d+)\.(\d+)/, "$1-$2-$3");
         const date = new Date(fixedDate);
         if (isNaN(date.getTime())) return rawDate;
         return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
         });
      } catch {
         return rawDate;
      }
   };

   useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
      };

      if (isOpen) {
         document.addEventListener("keydown", handleEsc);
         document.body.style.overflow = "hidden";
      }

      return () => {
         document.removeEventListener("keydown", handleEsc);
         document.body.style.overflow = "unset";
      };
   }, [isOpen, onClose]);

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 font-sans">

         {/* Backdrop with Subtle Blur */}
         <div
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
         />

         {/* Main Dossier Modal Container */}
         <div className="relative bg-white w-full max-w-4xl max-h-[92vh] border border-neutral-300 shadow-2xl overflow-hidden flex flex-col md:flex-row text-left rounded-none">

            {/* Left Section: Hero Visual Image Frame */}
            <div className="relative w-full md:w-5/12 h-56 md:h-auto bg-neutral-900 shrink-0 border-b md:border-b-0 md:border-r border-neutral-300">
               {image ? (
                  <Image
                     src={image}
                     alt={title}
                     fill
                     className="object-cover contrast-105"
                     sizes="(max-width: 768px) 100vw, 45vw"
                     priority
                  />
               ) : (
                  <div className="flex flex-col items-center justify-center h-full text-neutral-600 font-mono text-xs gap-2">
                     <Maximize2 className="w-8 h-8 text-neutral-500" />
                     <span>[ DOKUMENTASI VISUAL LAPANGAN ]</span>
                  </div>
               )}

               {/* Close Button Mobile Overlay */}
               <button
                  onClick={onClose}
                  className="absolute top-3 right-3 p-2 bg-neutral-950/80 text-white md:hidden z-10 hover:bg-neutral-900 transition-colors"
               >
                  <X className="w-5 h-5" />
               </button>
            </div>

            {/* Right Section: Architectural Content Sheet */}
            <div className="flex-1 flex flex-col min-w-0 bg-white h-full max-h-[92vh] md:max-h-[88vh]">

               {/* Header Bar */}
               <div className="sticky top-0 z-20 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
                  <div>
                     <span className="text-[10px] font-mono font-bold text-[#B61F2B] uppercase tracking-widest block mb-0.5">
                        [ LEMBAR DESKRIPSI & LAPORAN TEKNIS ]
                     </span>
                     <h2 className="text-lg sm:text-xl font-bold text-neutral-950 line-clamp-1">
                        {title}
                     </h2>
                  </div>

                  <button
                     onClick={onClose}
                     className="p-1.5 hover:bg-neutral-100 transition-colors hidden md:block text-neutral-500 hover:text-neutral-950"
                     title="Tutup Modal"
                  >
                     <X className="w-5 h-5" />
                  </button>
               </div>

               {/* Scrollable Content Body */}
               <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">

                  {/* Technical Metadata Line Grid (No Grey Boxes) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-3 border-y border-neutral-200 font-mono text-xs">
                     <div>
                        <span className="text-neutral-400 block uppercase text-[10px] mb-1">
                           Lokasi Proyek
                        </span>
                        <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                           <MapPin className="w-3.5 h-3.5 text-[#B61F2B] shrink-0" />
                           <span>{projectData?.location || "DIY"}</span>
                        </div>
                     </div>

                     <div>
                        <span className="text-neutral-400 block uppercase text-[10px] mb-1">
                           Tanggal Mulai
                        </span>
                        <div className="flex items-center gap-1.5 font-semibold text-neutral-800">
                           <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                           <span>{formatHariTanggal(projectData?.startDate)}</span>
                        </div>
                     </div>

                     <div>
                        <span className="text-neutral-400 block uppercase text-[10px] mb-1">
                           Estimasi Durasi
                        </span>
                        <div className="flex items-center gap-1.5 font-semibold text-neutral-800">
                           <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                           <span>{calculateDuration(projectData?.startDate, projectData?.endDate)}</span>
                        </div>
                     </div>
                  </div>

                  {/* Main Project Narrative Description */}
                  <div className="space-y-3">
                     <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                        Rincian Pengerjaan & Spesifikasi
                     </h3>
                     <div className="text-neutral-700 leading-relaxed text-sm space-y-4 font-normal">
                        {description.split('\n\n').map((paragraph, index) => (
                           <p key={index}>{paragraph}</p>
                        ))}
                     </div>
                  </div>

                  {/* Author & Verification Footer Strip */}
                  <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-500">
                     <div className="flex items-center gap-2 text-emerald-700">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Pengawasan Oleh: {projectData?.author || "Tim Insinyur PT HAB"}</span>
                     </div>
                     <div>
                        Pembaruan: {projectData?.updatedAt ? formatHariTanggal(projectData.updatedAt) : "Terbaru"}
                     </div>
                  </div>

               </div>

               {/* Action Footer */}
               <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                     onClick={() => {
                        if (navigator.share) {
                           navigator.share({
                              title: title,
                              text: description.substring(0, 100) + "...",
                              url: window.location.href,
                           });
                        } else {
                           navigator.clipboard.writeText(window.location.href);
                           alert("Tautan laporan proyek berhasil disalin.");
                        }
                     }}
                     className="w-full sm:w-auto px-4 py-2.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-800 font-mono text-xs uppercase font-bold transition-colors flex items-center justify-center gap-2"
                  >
                     <Share2 className="w-3.5 h-3.5" />
                     <span>Bagikan Tautan</span>
                  </button>

                  <a
                     href={`https://wa.me/6285326566522?text=${encodeURIComponent(`Halo HAB, saya membaca laporan detail untuk proyek "${title}" dan berminat konsultasi lebih lanjut.`)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase font-bold transition-colors flex items-center justify-center gap-2"
                  >
                     <FaWhatsapp className="w-4 h-4" />
                     <span>Konsultasi Proyek Ini</span>
                  </a>
               </div>

            </div>

         </div>
      </div>
   );
}