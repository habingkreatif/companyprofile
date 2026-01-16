"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  MapPin,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  Timer
} from "lucide-react";
import { useProjects } from "@/presentation/hooks/useProject";
import DescriptionModal from "./DescriptionModal";

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const { projects, loading, error } = useProjects();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const formatHariTanggal = (rawDate: string) => {
    const fixedDate = rawDate.replace(/(\d+)\.(\d+)\.(\d+)/, "$1:$2:$3");
    const date = new Date(fixedDate);
    return date.toLocaleDateString("id-ID", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
             <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[2px] bg-[#B61F2B]"></span>
                <span className="text-sm font-bold tracking-widest uppercase text-[#B61F2B]">Our Portfolio</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-[#101010] leading-tight">
                Masterpiece <br/>
                <span className="text-slate-400">Construction.</span>
             </h2>
          </div>
          <div className="hidden md:flex gap-4">
             <button 
                onClick={prev}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#B61F2B] hover:border-[#B61F2B] hover:text-white transition-all duration-300 group"
             >
                <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-white" />
             </button>
             <button 
                onClick={next}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#B61F2B] hover:border-[#B61F2B] hover:text-white transition-all duration-300 group"
             >
                <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white" />
             </button>
          </div>
        </motion.div>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg mb-8">
            {error}
          </div>
        )}

        <div className="relative">
          <AnimatePresence mode="wait">
            {loading ? (
              <div className="h-[500px] w-full bg-white rounded-[2.5rem] animate-pulse"></div>
            ) : projects.length > 0 ? (
               <motion.div
                 key={current}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.4, ease: "easeInOut" }}
                 className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100"
               >
                 <div className="grid lg:grid-cols-12 gap-0 min-h-[500px]">
                    {/* Image Section (7 Cols) */}
                    <div className="lg:col-span-7 relative group h-[300px] lg:h-auto overflow-hidden">
                       <Image
                          src={projects[current].image}
                          alt={projects[current].title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          onError={(e) => { e.currentTarget.src = "/placeholder-image.jpg"; }}
                       />
                       <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                       
                       {/* Floating Status Badge */}
                       <div className="absolute top-6 left-6 flex gap-3">
                          <div className={`px-4 py-2 rounded-full backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-wider shadow-lg ${
                             projects[current].status === "Selesai" ? "bg-emerald-500/80" : "bg-amber-500/80"
                          }`}>
                             {projects[current].status}
                          </div>
                       </div>
                    </div>

                    {/* Content Section (5 Cols) */}
                    <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center relative">
                       {/* Background Pattern */}
                       <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                          <Building2 className="w-48 h-48 text-[#B61F2B]" />
                       </div>

                       <div className="relative z-10">
                          <div className="inline-flex items-center gap-2 mb-6 text-slate-400 text-sm font-medium">
                             <MapPin className="w-4 h-4 text-[#B61F2B]" />
                             {projects[current].location}
                          </div>

                          <h3 className="text-3xl md:text-4xl font-black text-[#101010] mb-6 leading-tight">
                             {projects[current].title}
                          </h3>

                          {/* Quick Stats Grid */}
                          <div className="grid grid-cols-2 gap-6 mb-8 border-y border-slate-100 py-6">
                             <div>
                                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Tahun Proyek</span>
                                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                                   <Calendar className="w-4 h-4 text-[#B61F2B]" />
                                   {formatHariTanggal(projects[current].start)}
                                </div>
                             </div>
                             <div>
                                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Estimasi</span>
                                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                                   <Timer className="w-4 h-4 text-[#B61F2B]" />
                                   {formatHariTanggal(projects[current].end)}
                                </div>
                             </div>
                          </div>

                          <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3">
                             {projects[current].description}
                          </p>

                          {/* Progress Bar */}
                          <div className="mb-8">
                             <div className="flex justify-between items-end mb-2">
                                <span className="text-sm font-bold text-slate-700">Completion</span>
                                <span className="text-2xl font-black text-[#B61F2B]">{projects[current].totalProgress}%</span>
                             </div>
                             <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div 
                                   initial={{ width: 0 }}
                                   animate={{ width: `${projects[current].totalProgress}%` }}
                                   transition={{ duration: 1, delay: 0.2 }}
                                   className="h-full bg-gradient-to-r from-[#B61F2B] to-[#C9A74A]"
                                />
                             </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4">
                             <button
                                onClick={() => setShowFullDescription(true)}
                                className="flex-1 py-4 bg-[#101010] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#202020] transition-colors group/btn"
                             >
                                <span>Lihat Detail</span>
                                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                             </button>
                             {/* Mobile Navigation */}
                             <div className="flex md:hidden gap-2">
                                <button onClick={prev} className="w-14 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50">
                                   <ChevronLeft className="w-5 h-5 text-slate-600" />
                                </button>
                                <button onClick={next} className="w-14 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50">
                                   <ChevronRight className="w-5 h-5 text-slate-600" />
                                </button>
                             </div>
                          </div>

                       </div>
                    </div>
                 </div>
               </motion.div>
            ) : (
              <div className="h-96 flex items-center justify-center bg-white rounded-3xl">
                <p className="text-slate-400">Belum ada proyek ditambahkan.</p>
              </div>
            )}
          </AnimatePresence>

          {/* Pagination Indicators */}
          {projects.length > 0 && (
             <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, idx) => (
                   <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                         current === idx ? "w-8 bg-[#B61F2B]" : "w-2 bg-slate-200 hover:bg-slate-300"
                      }`}
                   />
                ))}
             </div>
          )}
        </div>
      </div>

      {projects.length > 0 && (
        <DescriptionModal
          isOpen={showFullDescription}
          onClose={() => setShowFullDescription(false)}
          title={projects[current].title}
          description={projects[current].description}
          image={projects[current].image}
          projectData={{
            category: projects[current].location,
            location: projects[current].location,
            author: "Team HABS",
            updatedAt: projects[current].updated_at,
            startDate: projects[current].start,
            endDate: projects[current].end,
          }}
        />
      )}
    </section>
  );
}
