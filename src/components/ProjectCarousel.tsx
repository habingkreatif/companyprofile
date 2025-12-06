"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";
import { useProjects } from "@/presentation/hooks/useProject";
import { Alert, AlertDescription } from "./ui/alert";

const statusColors = {
  Selesai: "bg-green-100 text-green-800",
  "Sedang Berjalan": "bg-blue-100 text-blue-800",
  Perencanaan: "bg-yellow-100 text-yellow-800",
};

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const { projects, loading, error } = useProjects();
  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const formatHariTanggal = (rawDate: string) => {
    // Ubah "14.35.23" → "14:35:23" biar bisa dibaca Date()
    const fixedDate = rawDate.replace(/(\d+)\.(\d+)\.(\d+)/, "$1:$2:$3");

    const date = new Date(fixedDate);

    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

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
              {loading ? (
                <div className="flex items-center justify-center h-96 bg-white">
                  <p className="text-[#3A3A3A]">Memuat proyek...</p>
                </div>
              ) : projects.length === 0 ? (
                <div className="flex items-center justify-center h-96 bg-white">
                  <p className="text-[#3A3A3A]">Tidak ada proyek tersedia.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 bg-white">
                  <div className="relative h-96 md:h-full">
                    <Image
                      src={projects[current].image}
                      alt="Preview"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-image.jpg";
                      }}
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

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin
                            className="w-5 h-5 text-[#B61F2B]"
                            aria-hidden="true"
                          />
                          <span className="text-[#B61F2B] font-semibold">
                            Lokasi:
                          </span>
                          <p className="text-[#3A3A3A]">
                            {projects[current].location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar
                            className="w-5 h-5 text-[#B61F2B]"
                            aria-hidden="true"
                          />
                          <span className="text-[#B61F2B] font-semibold">
                            Dimulai:
                          </span>
                          <p className="text-[#3A3A3A]">
                            {projects[current].start}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarCheck
                            className="w-5 h-5 text-[#B61F2B]"
                            aria-hidden="true"
                          />
                          <span className="text-[#B61F2B] font-semibold">
                            Berakhir:
                          </span>
                          <p className="text-[#3A3A3A]">
                            {projects[current].end}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setShowProgressModal(true)}
                        className="w-full mb-6 py-3 px-6 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        <span>Lihat Detail Progress</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Pagination */}
          <div className="mt-12">
            {/* Compact Progress Bar */}
            <div className="relative mb-8">
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((current + 1) / projects.length) * 100}%`,
                  }}
                  className="h-full bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] rounded-full"
                />
              </div>

              {/* Current Position Indicator */}
              <div className="absolute -top-1.5 left-0 transform -translate-x-1/2">
                <motion.div
                  layoutId="currentIndicator"
                  className="w-3 h-3 rounded-full bg-[#B61F2B] border-2 border-white shadow-lg"
                />
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white p-4 rounded-2xl border border-gray-200">
              {/* Previous Button */}
              <button
                onClick={prev}
                disabled={current === 0}
                className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  current === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-white hover:shadow-md hover:border-[#B61F2B]/30"
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    current === 0
                      ? "bg-gray-200"
                      : "bg-gray-100 group-hover:bg-[#B61F2B]/10"
                  }`}
                >
                  <ChevronLeft
                    className={`w-4 h-4 ${
                      current === 0
                        ? "text-gray-400"
                        : "text-gray-600 group-hover:text-[#B61F2B]"
                    }`}
                  />
                </div>
                <div className="text-left">
                  <div
                    className={`text-xs ${
                      current === 0
                        ? "text-gray-400"
                        : "text-gray-500 group-hover:text-[#B61F2B]"
                    }`}
                  >
                    Sebelumnya
                  </div>
                  {current > 0 && (
                    <div className="text-sm font-medium text-gray-700 group-hover:text-[#B61F2B] line-clamp-1 max-w-[150px]">
                      {projects[current - 1]?.title}
                    </div>
                  )}
                </div>
              </button>

              {/* Current Info */}
              <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#B61F2B]">
                    {current + 1}
                  </span>
                  <span className="text-gray-400 mx-1">/</span>
                  <span className="text-lg font-medium text-gray-700">
                    {projects.length}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Proyek Saat Ini</p>
              </div>

              {/* Next Button */}
              <button
                onClick={next}
                disabled={current === projects.length - 1}
                className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  current === projects.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-white hover:shadow-md hover:border-[#B61F2B]/30"
                }`}
              >
                <div className="text-right">
                  <div
                    className={`text-xs ${
                      current === projects.length - 1
                        ? "text-gray-400"
                        : "text-gray-500 group-hover:text-[#B61F2B]"
                    }`}
                  >
                    Selanjutnya
                  </div>
                  {current < projects.length - 1 && (
                    <div className="text-sm font-medium text-gray-700 group-hover:text-[#B61F2B] line-clamp-1 max-w-[150px]">
                      {projects[current + 1]?.title}
                    </div>
                  )}
                </div>
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    current === projects.length - 1
                      ? "bg-gray-200"
                      : "bg-gray-100 group-hover:bg-[#B61F2B]/10"
                  }`}
                >
                  <ChevronRight
                    className={`w-4 h-4 ${
                      current === projects.length - 1
                        ? "text-gray-400"
                        : "text-gray-600 group-hover:text-[#B61F2B]"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Dots Navigation - Minimal */}
            <div className="flex justify-center gap-1.5 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="group relative"
                  aria-label={`Ke proyek ${index + 1}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current
                        ? "bg-[#B61F2B] scale-125"
                        : "bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  />

                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {projects[index]?.title}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showProgressModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProgressModal(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                {/* Modal Header */}
                <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-[#101010]">
                        Progress Pekerjaan
                      </h3>
                      <p className="text-[#3A3A3A] mt-1">
                        {projects[current].title}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowProgressModal(false)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6 text-[#3A3A3A]" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                  {/* Total Progress */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-bold text-[#101010]">
                        Total Progress Proyek
                      </h4>
                      <span className="text-2xl font-bold text-[#B61F2B]">
                        {projects[current].totalProgress}% /{" "}
                        {formatHariTanggal(projects[current].updated_at)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-[#B61F2B] via-[#B61F2B] to-[#C9A74A] h-4 rounded-full transition-all duration-1000"
                        style={{ width: `${projects[current].totalProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Detail Progress */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      {projects[current].progress
                        ?.slice(0, 9)
                        .map((item, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-[#3A3A3A]">
                                {item.task}
                              </span>
                              <span className="font-bold text-[#B61F2B]">
                                {item.percentage}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] h-2.5 rounded-full transition-all duration-700"
                                style={{
                                  width: `${Math.min(item.percentage, 100)}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="space-y-6">
                      {projects[current].progress
                        ?.slice(9)
                        .map((item, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-[#3A3A3A]">
                                {item.task}
                              </span>
                              <span className="font-bold text-[#B61F2B]">
                                {item.percentage}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] h-2.5 rounded-full transition-all duration-700"
                                style={{
                                  width: `${Math.min(item.percentage, 100)}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#B61F2B] rounded"></div>
                        <span className="text-sm text-[#3A3A3A]">
                          Belum Dimulai (0-30%)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span className="text-sm text-[#3A3A3A]">
                          Sedang Berjalan (31-70%)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#C9A74A] rounded"></div>
                        <span className="text-sm text-[#3A3A3A]">
                          Hampir Selesai (71-99%)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-sm text-[#3A3A3A]">
                          Selesai (100%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowProgressModal(false)}
                      className="px-6 py-3 bg-[#B61F2B] text-white font-semibold rounded-lg hover:bg-[#8E1A22] transition-colors"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
