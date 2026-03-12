"use client";

import React, { useState, useRef } from "react";
import {
  ShieldCheck,
  FileCheck,
  Building2,
  Search,
  Copy,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  HardHat,
  Zap,
  LayoutTemplate,
  Lock,
  FileText,
  Award,
  MousePointer2
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// --- 3D Card Component (Light Mode) ---
const PremiumDocCard = ({ item, handleCopy, copied }: { item: any, handleCopy: any, copied: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-md mx-auto perspective-1000 group/card"
    >
      <div 
        className={`relative rounded-[2rem] p-[1px] bg-gradient-to-br ${item.borderGradient} shadow-2xl transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]`}
        style={{ transform: "translateZ(0)" }}
      >
        <div className={`relative h-full bg-white rounded-[1.9rem] overflow-hidden`}>
            
            {/* Soft Sheen Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.sheen} opacity-30 group-hover/card:opacity-50 transition-opacity duration-500`}></div>
            
            {/* Content Container */}
            <div className="relative p-8 flex flex-col items-center text-center h-full z-10">
                
                {/* Badge Top */}
                <div className="mb-6">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${item.badgeStyle}`}>
                        {item.icon} {item.badgeText}
                    </span>
                </div>

                {/* Title & Subtitle */}
                <motion.div style={{ transform: "translateZ(20px)" }}>
                    <h3 className={`text-3xl font-black text-slate-900 mb-2 tracking-tight`}>
                        {item.title}
                    </h3>
                    <p className="text-slate-500 font-semibold text-sm mb-6 uppercase tracking-wide">
                        {item.subtitle}
                    </p>
                </motion.div>

                {/* Document Preview (Interactive Window) */}
                <motion.div 
                    style={{ transform: "translateZ(30px)" }}
                    className="w-full relative group/preview cursor-pointer mb-8"
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 bg-slate-50">
                                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover/preview:opacity-100 transition-opacity z-20 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="px-5 py-2.5 bg-white text-slate-800 rounded-full text-xs font-bold shadow-xl flex items-center gap-2 transform scale-95 group-hover/preview:scale-100 transition-transform">
                                        <ExternalLink className="w-3.5 h-3.5" /> Lihat Dokumen
                                    </span>
                                </div>
                                {item.docImage ? (
                                    <Image 
                                        src={item.docImage} 
                                        alt={item.title} 
                                        fill 
                                        className="object-cover group-hover/preview:scale-105 transition-transform duration-700 p-2" 
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                        <FileText className="text-slate-300 w-16 h-16" />
                                    </div>
                                )}
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[85vh] p-0 bg-white border-slate-100 shadow-2xl">
                             <DialogHeader className="absolute top-0 left-0 w-full p-6 z-20 flex flex-row items-center justify-between pointer-events-none">
                                <DialogTitle className="hidden">Preview {item.title}</DialogTitle>
                             </DialogHeader>
                             <div className="w-full h-full overflow-y-auto flex items-center justify-center p-8 bg-slate-50">
                                { item.docImage && <Image src={item.docImage} alt={item.title} width={1000} height={1400} className="w-auto h-auto max-w-full rounded shadow-xl ring-1 ring-slate-900/5" /> }
                             </div>
                        </DialogContent>
                    </Dialog>
                </motion.div>

                <div className="w-full h-px bg-slate-100 mb-6"></div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {item.desc}
                </p>

                {/* Copy ID */}
                <motion.div 
                    style={{ transform: "translateZ(10px)" }}
                    onClick={() => handleCopy(item.number)}
                    className="mt-auto w-full group/copy cursor-pointer"
                >
                    <div className="relative overflow-hidden bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-3 flex items-center justify-between transition-all shadow-sm group-hover/copy:shadow-md">
                        <div className="flex flex-col items-start px-2">
                            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest mb-0.5">Nomor Registrasi</span>
                            <code className={`text-sm font-mono font-bold text-slate-700 group-hover/copy:text-[#B61F2B] transition-colors`}>
                                {item.number}
                            </code>
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover/copy:text-[#B61F2B] group-hover/copy:border-red-100 transition-all">
                            {copied === item.number ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const legalityData = [
  {
    id: "akta",
    title: "Akta Perusahaan",
    subtitle: "Legalitas Eksekutif",
    desc: "Dokumen resmi pendirian badan usaha yang telah disahkan oleh negara.",
    icon: <Award className="w-3.5 h-3.5" />,
    number: "AHU-01210.AH.02.01",
    docImage: "/akta.jpg",
    // Premium Gold Theme (Light)
    badgeText: "Gold Standard",
    badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
    borderGradient: "from-amber-200 via-amber-100 to-white",
    sheen: "from-amber-100/40 to-transparent"
  },
  {
    id: "sk",
    title: "SK Kemenkumham",
    subtitle: "Badan Hukum Terverifikasi",
    desc: "Surat Keputusan pengesahan status badan hukum Perseroan Terbatas (PT).",
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    number: "AHU-0002038.AH.01.01",
    docImage: "/sk.jpg",
    // Premium Platinum Theme (Light)
    badgeText: "Verified Entity",
    badgeStyle: "bg-slate-100 text-slate-700 border-slate-200",
    borderGradient: "from-slate-200 via-slate-100 to-white",
    sheen: "from-slate-100/50 to-transparent"
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
  { 
    category: "building", 
    code: "41011", 
    title: "Konstruksi Gedung Hunian",
    description: "Pembangunan, pemeliharaan, dan perbaikan bangunan yang digunakan untuk hunian dan tempat tinggal."
  },
  { 
    category: "building", 
    code: "41012", 
    title: "Konstruksi Gedung Perkantoran",
    description: "Pembangunan, pemeliharaan, dan perbaikan bangunan yang digunakan untuk perkantoran."
  },
  { 
    category: "building", 
    code: "41013", 
    title: "Konstruksi Gedung Industri",
    description: "Pembangunan, pemeliharaan, dan perbaikan bangunan untuk industri, pabrik, dan workshop."
  },
  { 
    category: "building", 
    code: "41019", 
    title: "Konstruksi Gedung Lainnya",
    description: "Pembangunan gedung lainnya seperti tempat ibadah, terminal, dan bangunan budaya."
  },
  
  // Spesialis
  { 
    category: "specialist", 
    code: "43901", 
    title: "Pemasangan Atap",
    description: "Kegiatan pemasangan atap bangunan (genteng, sirap, metal, dsb) dan kerangka atap."
  },
  { 
    category: "specialist", 
    code: "43301", 
    title: "Pemasangan Lantai & Dinding",
    description: "Penyelesaian interior/eksterior seperti pemasangan keramik, marmer, parket, dan wallpaper."
  },
  { 
    category: "specialist", 
    code: "43304", 
    title: "Pemasangan Partisi & Plafon",
    description: "Instalasi sekat ruangan (movable), partisi gypsum, dan plafon bangunan."
  },
  { 
    category: "specialist", 
    code: "43211", 
    title: "Instalasi Listrik",
    description: "Pemasangan sistem kelistrikan, panel, dan sambungan kabel pada bangunan."
  },
  { 
    category: "specialist", 
    code: "43212", 
    title: "Instalasi Telekomunikasi",
    description: "Instalasi jaringan telepon, data, antena, dan infrastruktur komunikasi gedung."
  },
  { 
    category: "specialist", 
    code: "43213", 
    title: "Instalasi Elektronika",
    description: "Pemasangan sistem alarm, CCTV, kontrol akses, dan sistem elektronik keamanan."
  },
  { 
    category: "specialist", 
    code: "43221", 
    title: "Instalasi Plumbing & Air",
    description: "Instalasi saluran air bersih, air limbah, drainase, dan sistem perpipaan bangunan."
  },
  { 
    category: "specialist", 
    code: "43302", 
    title: "Pengecatan & Pernis",
    description: "Pengecatan interior dan eksterior bangunan serta pekerjaan finishing sejenis."
  },

  // Consultant & Others
  { 
    category: "consultant", 
    code: "71101", 
    title: "Jasa Arsitektur",
    description: "Layanan desain arsitektural, perencanaan bangunan, dan pengawasan konstruksi."
  },
  { 
    category: "consultant", 
    code: "7020", 
    title: "Konsultasi Manajemen",
    description: "Konsultasi manajemen proyek dan strategi bisnis terkait konstruksi."
  },
  { 
    category: "consultant", 
    code: "4663", 
    title: "Perdagangan Material",
    description: "Perdagangan besar material konstruksi, kaca, ubin, dan perlengkapan bangunan."
  },
];

export default function LegalitySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);

  const filteredKbli = kbliData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.includes(searchTerm) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || item.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="legalitas" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor (Aurora) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-amber-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-slate-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-[#B61F2B]" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Verified Trust System</span>
          </motion.div>
          
          <motion.h2 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Legalitas & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B61F2B] to-red-600">Sertifikasi</span>
          </motion.h2>
          
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Fondasi hukum yang transparan dan terverifikasi, menjamin keamanan serta profesionalitas dalam setiap kerjasama proyek.
          </p>
        </div>

        {/* --- 3D EXECUTIVE VAULT (Light) --- */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-32 relative">
            {legalityData.map((item, index) => (
                <PremiumDocCard key={item.id} item={item} handleCopy={handleCopy} copied={copied} />
            ))}
        </div>

        {/* --- CAPABILITY SEARCH ENGINE (Clean Light) --- */}
        <div className="max-w-5xl mx-auto">
           <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group/search-container">
               
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 group-hover/search-container:bg-red-50 transition-colors duration-700"></div>

               <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                      <div className="text-center md:text-left">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3 justify-center md:justify-start">
                              <LayoutTemplate className="w-8 h-8 text-slate-400" />
                              Kapabilitas & KBLI
                          </h3>
                          <p className="text-slate-500 text-sm">Cari berdasarkan kode standar industri (KBLI) kami.</p>
                      </div>

                      {/* Search Input */}
                      <div className="w-full md:w-auto min-w-[300px]">
                          <div className="relative group">
                              <div className="absolute inset-0 bg-[#B61F2B]/10 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative bg-white border border-slate-200 group-focus-within:border-[#B61F2B]/50 rounded-full flex items-center px-4 py-3 transition-colors shadow-sm">
                                  <Search className="w-5 h-5 text-slate-400 mr-3" />
                                  <input 
                                      type="text" 
                                      placeholder="Cari kode KBLI..." 
                                      className="flex-grow bg-transparent outline-none text-slate-900 font-medium placeholder:text-slate-400"
                                      value={searchTerm}
                                      onChange={(e) => setSearchTerm(e.target.value)}
                                  />
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                      {['all', ...kbliCategories.map(k => k.id)].map(catId => {
                          const cat = kbliCategories.find(k => k.id === catId);
                          const isActive = activeTab === catId;
                          return (
                              <button
                                  key={catId}
                                  onClick={() => setActiveTab(catId)}
                                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                                      isActive 
                                      ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                                      : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                                  }`}
                              >
                                  {cat ? cat.name : "Semua"}
                              </button>
                          )
                      })}
                  </div>

                  {/* Grid Results */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      <AnimatePresence mode="popLayout">
                          {filteredKbli.length > 0 ? (
                              filteredKbli.map((item) => (
                                  <motion.div
                                      layout
                                      key={item.code}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0.9 }}
                                      className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-[#B61F2B]/20 hover:shadow-lg hover:shadow-slate-200/50 transition-all group/item"
                                  >
                                      <div className="flex items-start justify-between mb-3">
                                          <div className="px-2 py-1 bg-slate-50 rounded-lg text-xs font-mono font-bold text-slate-500 border border-slate-200 group-hover/item:text-[#B61F2B] group-hover/item:border-red-100 transition-colors">
                                              {item.code}
                                          </div>
                                      </div>
                                      <h4 className="text-slate-800 font-bold text-sm mb-2 group-hover/item:text-[#B61F2B] transition-colors">
                                          {item.title}
                                      </h4>
                                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-medium">
                                          {item.description}
                                      </p>
                                  </motion.div>
                              ))
                          ) : (
                              <div className="col-span-full py-12 text-center">
                                  <LayoutTemplate className="w-12 h-12 mb-3 text-slate-200 mx-auto" />
                                  <p className="text-slate-400 font-medium">Tidak ada data ditemukan.</p>
                              </div>
                          )}
                      </AnimatePresence>
                  </div>
               </div>
           </div>
        </div>

      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.2);
        }
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </section>
  );
}

