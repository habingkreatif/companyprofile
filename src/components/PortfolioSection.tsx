"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ArrowRight } from "lucide-react";

interface Portfolio {
  id: number;
  title: string;
  category: "interior" | "eksterior" | "renovasi";
  image: string;
  description: string;
}

const portfolios: Portfolio[] = [
  {
    id: 1,
    title: "Renovasi Rumah Modern",
    category: "eksterior",
    image: "/9.png",
    description: "Transformasi rumah tradisional menjadi minimalis modern",
  },
  {
    id: 2,
    title: "Dapur Minimalis",
    category: "interior",
    image: "/14.png",
    description: "Desain dan instalasi dapur minimalis fungsional",
  },
  {
    id: 3,
    title: "Cafe set Custom",
    category: "interior",
    image: "/11.png",
    description: "Desain dan instalasi kitchen set premium custom",
  },
  {
    id: 4,
    title: "Ruang Keluarga Elegan",
    category: "interior",
    image: "/7.png",
    description: "Renovasi ruang keluarga dengan konsep elegan dan nyaman",
  },
  {
    id: 5,
    title: "Kamar Tidur Modern",
    category: "interior",
    image: "/5.png",
    description: "Instalasi sistem mechanical, electrical, plumbing",
  },
  {
    id: 6,
    title: "Ruang Tamu Modern",
    category: "interior",
    image: "/17.png",
    description: "Desain interior ruang tamu dengan sentuhan modern",
  },
  {
    id: 7,
    title: "Fasad Rumah Minimalis",
    category: "eksterior",
    image: "/rumah1.jpg",
    description: "Desain eksterior rumah bergaya minimalis.",
  },
  {
    id: 8,
    title: "Tampak Depan Modern",
    category: "eksterior",
    image: "/rumah2.jpg",
    description: "Tampilan luar rumah minimalis yang modern.",
  },
  {
    id: 9,
    title: "Living Room Cozy",
    category: "interior",
    image: "/rumah3.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
  {
    id: 10,
    title: "Pantry & Dining",
    category: "interior",
    image: "/2.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
  {
    id: 11,
    title: "Void & Tangga",
    category: "interior",
    image: "/3.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
  {
    id: 12,
    title: "Master Bedroom",
    category: "interior",
    image: "/4.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
  {
    id: 13,
    title: "Ruang Kerja",
    category: "interior",
    image: "/6.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
];

const categories = [
  { id: "all", label: "Semua Karya" },
  { id: "eksterior", label: "Eksterior" },
  { id: "interior", label: "Interior" },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<Portfolio | null>(null);

  const filteredPortfolios = portfolios.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <section
      id="portofolio"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-slate-100 text-[#B61F2B] text-xs font-bold tracking-widest uppercase mb-4">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#101010] mb-6">
            Galeri <span className="text-[#B61F2B]">Karya</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Kumpulan hasil karya terbaik kami yang menggabungkan estetika desain dan ketepatan konstruksi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeTab === cat.id
                  ? "bg-[#101010] text-white border-[#101010] shadow-lg"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredPortfolios.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative w-full">
                   <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={800} // Approximate aspect ratio, actual will be managed by CSS width
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />
                   
                   {/* Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                         <span className="inline-block px-2 py-1 bg-[#B61F2B] text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                            {item.category}
                         </span>
                         <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h3>
                         <p className="text-gray-300 text-xs line-clamp-2">{item.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                         <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <div 
               className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
               onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
            >
               <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full h-[70vh] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl"
               >
                  <Image
                     src={selectedImage.image}
                     alt={selectedImage.title}
                     fill
                     className="object-contain"
                     quality={100}
                     priority
                  />
               </motion.div>
               
               <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-center text-white max-w-2xl"
               >
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-400">{selectedImage.description}</p>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
