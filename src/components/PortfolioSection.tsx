"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

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

const getItemsPerView = () => {
  if (typeof window === "undefined") return 3;

  const width = window.innerWidth;
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

export default function PortfolioSection() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const updateItemsPerView = useCallback(() => {
    setItemsPerView(getItemsPerView());
  }, []);

  useState(() => {
    if (typeof window !== "undefined") {
      setItemsPerView(getItemsPerView());
      window.addEventListener("resize", updateItemsPerView);
      return () => window.removeEventListener("resize", updateItemsPerView);
    }
  });

  const visiblePortfolios = portfolios.slice(
    currentStartIndex,
    currentStartIndex + itemsPerView
  );

  const nextSet = useCallback(() => {
    setCurrentStartIndex((prev) => {
      if (prev + itemsPerView >= portfolios.length) {
        return 0;
      }
      return prev + itemsPerView;
    });
  }, [itemsPerView]);

  const prevSet = useCallback(() => {
    setCurrentStartIndex((prev) => {
      if (prev - itemsPerView < 0) {
        const lastPossibleStart = portfolios.length - itemsPerView;
        return lastPossibleStart < 0 ? 0 : lastPossibleStart;
      }
      return prev - itemsPerView;
    });
  }, [itemsPerView]);

  const canGoNext = currentStartIndex + itemsPerView < portfolios.length;
  const canGoPrev = currentStartIndex > 0;

  const currentSet = Math.floor(currentStartIndex / itemsPerView);
  const totalSets = Math.ceil(portfolios.length / itemsPerView);

  return (
    <section
      id="portofolio"
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
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
          <div className="overflow-hidden pb-[10px]">
            <div className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
              {visiblePortfolios.map((portfolio, index) => (
                <motion.div
                  key={portfolio.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`
                        flex-shrink-0 group
                        ${itemsPerView === 1 ? "w-full" : ""}
                        ${
                          itemsPerView === 2
                            ? "w-[calc(50%-8px)] sm:w-[calc(50%-12px)]"
                            : ""
                        }
                        ${
                          itemsPerView === 3
                            ? "w-[calc(33.333%-10.67px)] sm:w-[calc(33.333%-16px)]"
                            : ""
                        }
                  `}
                >
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                      <Image
                        src={portfolio.image}
                        alt={portfolio.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        priority={index < 2}
                      />

                      {/* Category Badge */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                        <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#B61F2B] text-white text-xs font-semibold rounded-full">
                          {portfolio.category}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                          {portfolio.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 sm:line-clamp-3">
                          {portfolio.description}
                        </p>
                        {/* <button className="mt-2 sm:mt-3 text-xs sm:text-sm text-white font-medium hover:text-gray-300 self-start flex items-center gap-1">
                          <span>Lihat Detail</span>
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button> */}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-white">
                      <h3 className="font-bold text-[#101010] line-clamp-2">
                        {portfolio.title}
                      </h3>
                      <p className="text-[#3A3A3A] text-sm mt-1">
                        {portfolio.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {canGoPrev && (
            <button
              onClick={prevSet}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 z-10 border border-gray-200"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#B61F2B]" />
            </button>
          )}

          {canGoNext && (
            <button
              onClick={nextSet}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 z-10 border border-gray-200"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#B61F2B]" />
            </button>
          )}
        </div>

        <div className="mt-6 sm:mt-8">
          {totalSets > 1 && (
            <div className="flex justify-center mb-4">
              <Pagination>
                <PaginationContent>
                  {/* Previous */}
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={(e) => {
                        e.preventDefault();
                        if (canGoPrev) prevSet();
                      }}
                      className={
                        !canGoPrev
                          ? "pointer-events-none opacity-40"
                          : "cursor-pointer hover:bg-gray-100"
                      }
                      aria-disabled={!canGoPrev}
                    />
                  </PaginationItem>

                  {/* Always show first page */}
                  <PaginationItem>
                    <PaginationLink
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentStartIndex(0);
                      }}
                      isActive={currentSet === 0}
                      className="cursor-pointer"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>

                  {/* First ellipsis */}
                  {currentSet > 2 && totalSets > 5 && (
                    <PaginationItem>
                      <span className="flex h-9 w-9 items-center justify-center text-gray-400">
                        ...
                      </span>
                    </PaginationItem>
                  )}

                  {/* Middle pages */}
                  {(() => {
                    const pages = [];
                    const start = Math.max(1, currentSet - 1);
                    const end = Math.min(totalSets - 2, currentSet + 1);

                    for (let i = start; i <= end; i++) {
                      if (i > 0 && i < totalSets - 1) {
                        pages.push(
                          <PaginationItem key={i}>
                            <PaginationLink
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentStartIndex(i * itemsPerView);
                              }}
                              isActive={currentSet === i}
                              className="cursor-pointer"
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }
                    }
                    return pages;
                  })()}

                  {/* Last ellipsis */}
                  {currentSet < totalSets - 3 && totalSets > 5 && (
                    <PaginationItem>
                      <span className="flex h-9 w-9 items-center justify-center text-gray-400">
                        ...
                      </span>
                    </PaginationItem>
                  )}

                  {/* Always show last page if more than 1 page */}
                  {totalSets > 1 && (
                    <PaginationItem>
                      <PaginationLink
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentStartIndex((totalSets - 1) * itemsPerView);
                        }}
                        isActive={currentSet === totalSets - 1}
                        className="cursor-pointer"
                      >
                        {totalSets}
                      </PaginationLink>
                    </PaginationItem>
                  )}

                  {/* Next */}
                  <PaginationItem>
                    <PaginationNext
                      onClick={(e) => {
                        e.preventDefault();
                        if (canGoNext) nextSet();
                      }}
                      className={
                        !canGoNext
                          ? "pointer-events-none opacity-40"
                          : "cursor-pointer hover:bg-gray-100"
                      }
                      aria-disabled={!canGoNext}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          <div className="text-center mt-4">
            <div className="text-sm text-gray-600">
              Menampilkan {currentStartIndex + 1}-
              {Math.min(currentStartIndex + itemsPerView, portfolios.length)}{" "}
              dari {portfolios.length} portofolio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
