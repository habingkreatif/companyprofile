"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolios: Portfolio[] = [
  {
    id: 1,
    title: "Renovasi Rumah Modern",
    category: "Desain 3D Eksterior",
    image: "/9.png",
    description: "Transformasi rumah tradisional menjadi minimalis modern",
  },
  {
    id: 2,
    title: "Dapur Minimalis",
    category: "Desain 3D Interior",
    image: "/14.png",
    description: "Desain dan instalasi dapur minimalis fungsional",
  },
  {
    id: 3,
    title: "Cafe set Custom",
    category: "Desain 3D Interior",
    image: "/11.png",
    description: "Desain dan instalasi kitchen set premium custom",
  },
  {
    id: 4,
    title: "Ruang Keluarga Elegan",
    category: "Desain 3D Interior",
    image: "/7.png",
    description: "Renovasi ruang keluarga dengan konsep elegan dan nyaman",
  },
  {
    id: 5,
    title: "Kamar Tidur Modern",
    category: "Desain 3D Interior",
    image: "/5.png",
    description: "Instalasi sistem mechanical, electrical, plumbing",
  },
  {
    id: 6,
    title: "Ruang Tamu Modern",
    category: "Desain 3D Interior",
    image: "/17.png",
    description: "Desain interior ruang tamu dengan sentuhan modern",
  },
  {
    id: 7,
    title: "Ruang Minimalis",
    category: "Desain 3D Eksterior",
    image: "/rumah1.jpg",
    description: "Desain eksterior rumah bergaya minimalis.",
  },
  {
    id: 8,
    title: "Ruang Minimalis",
    category: "Desain 3D Eksterior",
    image: "/rumah2.jpg",
    description: "Tampilan luar rumah minimalis yang modern.",
  },
  {
    id: 9,
    title: "Ruang Minimalis",
    category: "Desain 3D Interior",
    image: "/rumah3.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
  {
    id: 10,
    title: "Ruang Minimalis",
    category: "Desain 3D Interior",
    image: "/2.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
  {
    id: 11,
    title: "Ruang Minimalis",
    category: "Desain 3D Interior",
    image: "/3.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
  {
    id: 12,
    title: "Ruang Minimalis",
    category: "Desain 3D Interior",
    image: "/4.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
  {
    id: 13,
    title: "Ruang Minimalis",
    category: "Desain 3D Interior",
    image: "/6.jpg",
    description: "Interior ruang minimalis yang modern dan rapi.",
  },
];

// Grid layout configuration - asymmetric sizing
const gridConfig = {
  base: [
    { row: "span 2", col: "span 2" }, // Large item
    { row: "span 1", col: "span 1" }, // Small item
    { row: "span 1", col: "span 1" }, // Small item
    { row: "span 1", col: "span 1" }, // Small item
    { row: "span 2", col: "span 2" }, // Large item
    { row: "span 1", col: "span 1" }, // Small item
    { row: "span 1", col: "span 2" }, // Medium horizontal
    { row: "span 2", col: "span 1" }, // Medium vertical
    { row: "span 1", col: "span 1" }, // Small item
  ],
  md: [
    { row: "span 3", col: "span 3" },
    { row: "span 2", col: "span 2" },
    { row: "span 2", col: "span 2" },
    { row: "span 1", col: "span 1" },
    { row: "span 3", col: "span 3" },
    { row: "span 2", col: "span 2" },
    { row: "span 2", col: "span 3" },
    { row: "span 3", col: "span 2" },
    { row: "span 1", col: "span 1" },
  ],
  lg: [
    { row: "span 4", col: "span 4" },
    { row: "span 3", col: "span 3" },
    { row: "span 3", col: "span 3" },
    { row: "span 2", col: "span 2" },
    { row: "span 4", col: "span 4" },
    { row: "span 3", col: "span 3" },
    { row: "span 3", col: "span 4" },
    { row: "span 4", col: "span 3" },
    { row: "span 2", col: "span 2" },
  ],
};

export default function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section
      id="portofolio"
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-full mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14 lg:mb-16 px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Portofolio Kami
          </h2>
          <div className="w-24 sm:w-28 md:w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-3 md:mb-4"></div>
          <p className="text-gray-600 max-w-lg md:max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Lihat hasil karya kami dalam berbagai proyek konstruksi dan renovasi
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 z-10 border border-gray-200"
            aria-label="Scroll kiri"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#B61F2B]" />
          </button>

          <button
            onClick={scrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 z-10 border border-gray-200"
            aria-label="Scroll kanan"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#B61F2B]" />
          </button>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-20 w-full scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="inline-flex min-w-max">
              <div className="grid grid-flow-col auto-cols-[minmax(300px,400px)] md:auto-cols-[minmax(400px,500px)] gap-4 md:gap-6">
                <div className="grid grid-rows-6 gap-4 md:gap-6 min-h-[600px] md:min-h-[800px]">
                  {/* Column 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="row-span-4 relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  >
                    <Image
                      src={portfolios[0].image}
                      alt={portfolios[0].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <span className="inline-block px-3 py-1.5 bg-[#B61F2B] text-white text-xs font-semibold rounded-full mb-2">
                          {portfolios[0].category}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {portfolios[0].title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="row-span-2 relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  >
                    <Image
                      src={portfolios[1].image}
                      alt={portfolios[1].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-rows-6 gap-4 md:gap-6 min-h-[600px] md:min-h-[800px]">
                  {/* Column 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="row-span-2 grid grid-cols-2 gap-4 md:gap-6"
                  >
                    <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                      <Image
                        src={portfolios[2].image}
                        alt={portfolios[2].title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                      <Image
                        src={portfolios[3].image}
                        alt={portfolios[3].title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="row-span-4 relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  >
                    <Image
                      src={portfolios[4].image}
                      alt={portfolios[4].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <span className="inline-block px-3 py-1.5 bg-[#B61F2B] text-white text-xs font-semibold rounded-full mb-2">
                          {portfolios[4].category}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {portfolios[4].title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-rows-6 gap-4 md:gap-6 min-h-[600px] md:min-h-[800px]">
                  {/* Column 3 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="row-span-3 relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  >
                    <Image
                      src={portfolios[5].image}
                      alt={portfolios[5].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="row-span-3 grid grid-cols-2 gap-4 md:gap-6"
                  >
                    <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                      <Image
                        src={portfolios[6].image}
                        alt={portfolios[6].title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="grid grid-rows-2 gap-4 md:gap-6">
                      <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                        <Image
                          src={portfolios[7].image}
                          alt={portfolios[7].title}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                        <Image
                          src={portfolios[8].image}
                          alt={portfolios[8].title}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Additional columns would go here for more scrolling content */}
                <div className="grid grid-rows-6 gap-4 md:gap-6 min-h-[600px] md:min-h-[800px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                    className="row-span-2 grid grid-cols-2 gap-4 md:gap-6"
                  >
                    <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                      <Image
                        src={portfolios[11].image}
                        alt={portfolios[11].title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                      <Image
                        src={portfolios[12].image}
                        alt={portfolios[12].title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className="row-span-4 relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  >
                    <Image
                      src={portfolios[10].image}
                      alt={portfolios[10].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
