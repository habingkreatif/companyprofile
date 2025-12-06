"use client";

import { useState, useEffect, useCallback } from "react";
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
];

const ITEMS_PER_VIEW = 6; // Selalu tampilkan 3 item sekaligus

export default function PortfolioSection() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate visible portfolios
  const visiblePortfolios = portfolios.slice(
    currentStartIndex,
    currentStartIndex + ITEMS_PER_VIEW
  );

  const nextSet = useCallback(() => {
    setCurrentStartIndex((prev) => {
      if (prev + ITEMS_PER_VIEW >= portfolios.length) {
        return 0;
      }
      return prev + ITEMS_PER_VIEW;
    });
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSet();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentStartIndex, isPaused]);

  const prevSet = () => {
    setCurrentStartIndex((prev) => {
      if (prev - ITEMS_PER_VIEW < 0) {
        // Cari set terakhir yang bisa ditampilkan
        const lastPossibleStart = portfolios.length - ITEMS_PER_VIEW;
        return lastPossibleStart < 0 ? 0 : lastPossibleStart;
      }
      return prev - ITEMS_PER_VIEW;
    });
  };

  const canGoNext = currentStartIndex + ITEMS_PER_VIEW < portfolios.length;
  const canGoPrev = currentStartIndex > 0;

  return (
    <section
      id="portofolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#101010] mb-4">
            Portofolio Kami
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-4"></div>
          <p className="text-[#3A3A3A] max-w-2xl mx-auto text-lg">
            Lihat hasil karya kami dalam berbagai proyek konstruksi dan renovasi
          </p>
        </motion.div>

        {/* Grid Container dengan 3 Item */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visiblePortfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {portfolio.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {portfolio.description}
                    </p>
                    <div className="mt-3 inline-block px-3 py-1 bg-[#B61F2B] rounded-full text-xs font-semibold">
                      {portfolio.category}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-[#101010] line-clamp-2">
                    {portfolio.title}
                  </h3>
                  <p className="text-[#3A3A3A] text-sm mt-1">
                    {portfolio.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {canGoPrev && (
            <button
              onClick={prevSet}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-10 border border-gray-200"
              aria-label="Previous set"
            >
              <ChevronLeft className="w-6 h-6 text-[#B61F2B]" />
            </button>
          )}

          {canGoNext && (
            <button
              onClick={nextSet}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-10 border border-gray-200"
              aria-label="Next set"
            >
              <ChevronRight className="w-6 h-6 text-[#B61F2B]" />
            </button>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mt-10 flex flex-col items-center">
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-[#B61F2B] to-[#C9A74A]"
              initial={{ width: "0%" }}
              animate={{
                width: isPaused ? "0%" : "100%",
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: isPaused ? 0 : Infinity,
              }}
              onAnimationComplete={() => {
                if (!isPaused) nextSet();
              }}
            />
          </div>

          {/* Counter */}
          <div className="text-sm text-gray-600">
            Menampilkan {visiblePortfolios.length} dari {portfolios.length}{" "}
            portofolio
          </div>
        </div>
      </div>
    </section>
  );
}
