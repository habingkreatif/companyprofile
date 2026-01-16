"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  FileCheck,
  Building2,
  Award,
  Search,
  Copy,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Briefcase,
  HardHat,
  Zap,
  LayoutTemplate,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const legalityData = [
  {
    id: "nib",
    title: "NIB (Nomor Induk Berusaha)",
    desc: "Digital ID resmi dari Lembaga OSS. Fondasi legalitas operasional perusahaan.",
    icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
    number: "1210200021312",
    docImage: "/akta.jpg", // User to replace
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  },
  {
    id: "sjk",
    title: "SJK (Sertifikat Jasa Konstruksi)",
    desc: "Lisensi kompetensi teknis untuk proyek skala menengah & besar.",
    icon: <Building2 className="w-10 h-10 text-blue-500" />,
    number: "Tersertifikasi Nasional",
    docImage: "/sk.jpg", // User to replace
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
  },
  {
    id: "sk",
    title: "SK Kemenkumham",
    desc: "Legitimasi Badan Hukum PT. Perlindungan hukum penuh untuk klien.",
    icon: <FileCheck className="w-10 h-10 text-violet-500" />,
    number: "AHU-22341.AH.01.01",
    docImage: "/sk.jpg", // User to replace
    color: "bg-violet-500/10 text-violet-600 border-violet-200",
  },
  {
    id: "ska",
    title: "Tim Tenaga Ahli (SKA/SKT)",
    desc: "Didukung insinyur bersertifikat resmi untuk jaminan kualitas teknis.",
    icon: <Award className="w-10 h-10 text-amber-500" />,
    number: "Expert Certified",
    docImage: null,
    color: "bg-amber-500/10 text-amber-600 border-amber-200",
  },
];

const kbliCategories = [
  { id: "building", name: "Gedung", icon: <Building2 className="w-4 h-4" /> },
  { id: "infra", name: "Infrastruktur", icon: <HardHat className="w-4 h-4" /> },
  { id: "specialist", name: "Spesialis", icon: <Zap className="w-4 h-4" /> },
  { id: "consultant", name: "Konsultasi", icon: <Briefcase className="w-4 h-4" /> },
];

const kbliData = [
  // Gedung
  { category: "building", code: "41011", title: "Konstruksi Gedung Hunian" },
  { category: "building", code: "41012", title: "Konstruksi Gedung Perkantoran" },
  { category: "building", code: "41013", title: "Konstruksi Gedung Industri" },
  { category: "building", code: "41014", title: "Konstruksi Gedung Perbelanjaan" },
  { category: "building", code: "41015", title: "Konstruksi Gedung Kesehatan" },
  { category: "building", code: "41016", title: "Konstruksi Gedung Pendidikan" },
  { category: "building", code: "41019", title: "Konstruksi Gedung Lainnya" },
  // Infra
  { category: "infra", code: "42101", title: "Konstruksi Jalan Raya" },
  { category: "infra", code: "42201", title: "Konstruksi Jaringan Irigasi" },
  { category: "infra", code: "43901", title: "Konstruksi Atap" },
  { category: "infra", code: "43902", title: "Konstruksi Beton" },
  // Specialist
  { category: "specialist", code: "43211", title: "Instalasi Listrik" },
  { category: "specialist", code: "43212", title: "Instalasi Elektronika" },
  { category: "specialist", code: "43221", title: "Instalasi Plumbing & Air" },
  { category: "specialist", code: "43301", title: "Pemasangan Lantai & Dinding" },
  { category: "specialist", code: "43303", title: "Pemasangan Pintu & Jendela" },
  { category: "specialist", code: "43305", title: "Dekorasi Interior" },
  { category: "specialist", code: "43309", title: "Finishing Bangunan" },
  { category: "specialist", code: "74103", title: "Desain Interior Spesialis" },
  // Consultant
  { category: "consultant", code: "71101", title: "Jasa Arsitektur" },
  { category: "consultant", code: "71102", title: "Jasa Engineering" },
  { category: "consultant", code: "7020", title: "Konsultasi Manajemen" },
  { category: "consultant", code: "4663", title: "Perdagangan Material" },
];

export default function LegalitySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);

  const filteredKbli = kbliData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.includes(searchTerm);
    const matchesTab = activeTab === "all" || item.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="legalitas" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-slate-50 to-transparent -mr-64 -mt-64 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-red-50 to-transparent -ml-40 -mb-40 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#B61F2B]"></span>
              <span className="text-sm font-bold tracking-widest uppercase text-[#B61F2B]">Verified & Secured</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Legalitas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B61F2B] to-red-600">Terjamin.</span><br />
              Proyek Aman.
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Kami beroperasi di atas fondasi hukum yang kokoh. Transparansi dokumen adalah 
              komitmen awal kami sebelum batu pertama diletakkan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex gap-4"
          >
             <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900">100%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Compliance</span>
             </div>
             <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900">4+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Certificates</span>
             </div>
          </motion.div>
        </div>

        {/* Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {legalityData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white p-6 rounded-3xl border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Top Icons */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${item.color} bg-opacity-10`}>
                  {item.icon}
                </div>
                {item.docImage && (
                   <Dialog>
                    <DialogTrigger asChild>
                      <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#B61F2B] transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </DialogTrigger>
                    {/* OPTIMIZED MODAL */}
                    <DialogContent className="max-w-[95vw] md:max-w-6xl p-0 overflow-hidden border-none bg-[#0a0a0a]/90 backdrop-blur-2xl h-[90vh] md:h-auto">
                      <DialogHeader className="absolute top-0 left-0 right-0 z-50 p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                        <DialogTitle className="text-white text-2xl font-bold flex items-center gap-3">
                           {item.icon} {item.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="w-full h-full overflow-y-auto custom-scrollbar-dark p-4 md:p-8 flex items-start justify-center pt-24">
                        <div className="relative w-full max-w-4xl bg-white/5 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                          <Image
                            src={item.docImage}
                            alt={item.title}
                            width={1200}
                            height={1600}
                             className="w-full h-auto object-contain"
                            priority
                          />
                        </div>
                      </div>
                    </DialogContent>
                   </Dialog>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">
                {item.desc}
              </p>

              {/* Footer */}
              <div 
                onClick={() => handleCopy(item.number)}
                className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between cursor-pointer group/copy"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold font-mono text-slate-600 uppercase tracking-tight">
                    {item.number}
                  </span>
                </div>
                <div className="relative">
                   <AnimatePresence>
                      {copied === item.number ? (
                         <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Copied!</span>
                         </motion.div>
                      ) : (
                         <Copy className="w-4 h-4 text-slate-300 group-hover/copy:text-slate-900 transition-colors" />
                      )}
                   </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Capability Visualizer (Redesigned KBLI) */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white shadow-2xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -mr-32 -mt-32"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#B61F2B]/30 rounded-full blur-[120px] -ml-32 -mb-32"></div>

           <div className="relative z-10">
             <div className="text-center mb-12">
               <h3 className="text-3xl md:text-5xl font-black mb-6">Capability <span className="text-[#B61F2B]">Explorer</span></h3>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                 Temukan spesialisasi yang Anda butuhkan. Kami memiliki lisensi teknis untuk berbagai sektor konstruksi.
               </p>
             </div>

             {/* Tech Search Bar */}
             <div className="max-w-2xl mx-auto mb-16 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#B61F2B] to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center p-2">
                   <Search className="w-6 h-6 text-slate-400 ml-4" />
                   <input 
                      type="text" 
                      placeholder="Cari layanan (e.g. 'Beton', 'Listrik', 'Gedung')..." 
                      className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 px-4 py-3 text-lg font-medium"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                   />
                   <div className="hidden md:flex gap-2 pr-2">
                      <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-slate-400 border border-white/5">KB</span>
                      <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-slate-400 border border-white/5">LI</span>
                   </div>
                </div>
             </div>

             {/* Categories */}
             <div className="flex justify-center gap-2 md:gap-4 flex-wrap mb-10">
                <button 
                   onClick={() => setActiveTab("all")}
                   className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeTab === 'all' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500'}`}
                >
                   All
                </button>
                {kbliCategories.map(cat => (
                   <button 
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeTab === cat.id ? 'bg-[#B61F2B] text-white border-[#B61F2B]' : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500'}`}
                   >
                      {cat.icon} {cat.name}
                   </button>
                ))}
             </div>

             {/* Results Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto custom-scrollbar-dark pr-2">
               <AnimatePresence mode="popLayout">
                 {filteredKbli.map((item) => (
                    <motion.div
                       layout
                       key={item.code}
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.95 }}
                       className="p-5 bg-white/5 border border-white/5 hover:border-white/20 rounded-xl hover:bg-white/10 transition-all cursor-default group"
                    >
                       <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-bold text-[#B61F2B] bg-[#B61F2B]/10 px-2 py-1 rounded mb-2 block group-hover:bg-[#B61F2B] group-hover:text-white transition-colors">
                             CODE {item.code}
                          </span>
                       </div>
                       <h4 className="text-slate-200 font-semibold leading-snug group-hover:text-white transition-colors">{item.title}</h4>
                    </motion.div>
                 ))}
               </AnimatePresence>
             </div>
             
             {filteredKbli.length === 0 && (
                <div className="text-center py-12">
                   <LayoutTemplate className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                   <p className="text-slate-500">Tidak ditemukan hasil untuk "{searchTerm}"</p>
                </div>
             )}

           </div>
        </div>

      </div>
      
      <style jsx global>{`
        .custom-scrollbar-dark::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}
