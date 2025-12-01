"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  status: "Selesai" | "Sedang Berjalan" | "Perencanaan";
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Renovasi Rumah Minimalis",
    location: "Sleman, Yogyakarta",
    year: "2025",
    status: "Sedang Berjalan",
    image: "/photo1.jpg",
    description:
      "Renovasi complete interior rumah dengan konsep minimalis modern",
  },

  {
    id: 5,
    title: "Instalasi Sistem MEP",
    location: "Sleman, Yogyakarta",
    year: "2025",
    status: "Perencanaan",
    image: "/photo2.jpg",
    description: "Instalasi mechanical, electrical, dan plumbing untuk rumah",
  },
];

const statusColors = {
  Selesai: "bg-green-100 text-green-800",
  "Sedang Berjalan": "bg-blue-100 text-blue-800",
  Perencanaan: "bg-yellow-100 text-yellow-800",
};

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#101010] mb-4">
            Proyek Terbaru Kami
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-4"></div>
          <p className="text-[#3A3A3A] max-w-2xl mx-auto text-lg">
            Koleksi proyek terkini yang telah dan sedang kami kerjakan
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-2 bg-white">
                {/* Image */}
                <div className="relative h-96 md:h-full">
                  <Image
                    src={projects[current].image}
                    alt={projects[current].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        statusColors[projects[current].status]
                      }`}
                    >
                      {projects[current].status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-[#101010] mb-4">
                      {projects[current].title}
                    </h3>
                    <p className="text-[#3A3A3A] text-lg mb-6 leading-relaxed">
                      {projects[current].description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-[#B61F2B] font-semibold">
                          📍 Lokasi:
                        </span>
                        <p className="text-[#3A3A3A]">
                          {projects[current].location}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#B61F2B] font-semibold">
                          📅 Tahun:
                        </span>
                        <p className="text-[#3A3A3A]">
                          {projects[current].year}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={prev}
                        className="p-3 rounded-full bg-[#B61F2B] text-white hover:bg-[#8E1A22] transition-colors"
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={next}
                        className="p-3 rounded-full bg-[#B61F2B] text-white hover:bg-[#8E1A22] transition-colors"
                        aria-label="Next project"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2 mt-6">
                      {projects.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrent(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === current
                              ? "w-8 bg-[#B61F2B]"
                              : "w-2 bg-[#E2E2E2]"
                          }`}
                          aria-label={`Go to project ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Counter */}
          <div className="text-center mt-8">
            <p className="text-[#3A3A3A] text-sm">
              Proyek{" "}
              <span className="font-bold text-[#B61F2B]">{current + 1}</span>{" "}
              dari <span className="font-bold">{projects.length}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
