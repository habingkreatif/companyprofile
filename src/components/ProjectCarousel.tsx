"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  CalendarCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  ExternalLink,
  MapPin,
  User,
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
  const [isExpanded, setIsExpanded] = useState(false);
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
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Proyek Terbaru Kami
          </h2>

          <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-3 md:mb-4"></div>

          <p className="text-gray-600 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
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
              className="rounded-2xl overflow-hidden shadow-md"
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
                  {/* Bagian Gambar - lebih kompak */}
                  <div className="relative h-64 md:h-auto group">
                    <Image
                      src={projects[current].image}
                      alt="Preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-image.jpg";
                      }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          statusColors[projects[current].status]
                        }`}
                      >
                        {projects[current].status}
                      </span>
                    </div>

                    {/* Hover Panel di Samping */}
                    <div
                      className="absolute right-0 top-0 bottom-0 w-0 
                            group-hover:w-40 
                            sm:group-hover:w-48 
                            md:group-hover:w-56 
                            lg:group-hover:w-64 
                            bg-black/50 backdrop-blur-sm
                            opacity-0 group-hover:opacity-100 
                            transition-all duration-300 
                            overflow-hidden"
                    >
                      <div className="p-2 sm:p-3 md:p-4 lg:p-5 text-white h-full flex flex-col justify-center">
                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                          {/* Lokasi */}
                          <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                            <MapPin
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 
                          text-[#B61F2B] mt-0.5 flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <div
                                className="text-[10px] xs:text-xs sm:text-sm 
                         font-medium text-gray-300"
                              >
                                Lokasi
                              </div>
                              <div
                                className="font-semibold 
                         text-xs sm:text-sm md:text-base 
                         truncate"
                              >
                                {projects[current].location}
                              </div>
                            </div>
                          </div>

                          <div className="h-px bg-white/20 w-full"></div>

                          <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                            <Calendar
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 
                           text-[#B61F2B] mt-0.5 flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <div
                                className="text-[10px] xs:text-xs sm:text-sm 
                         font-medium text-gray-300"
                              >
                                Dimulai
                              </div>
                              <div
                                className="font-semibold 
                         text-xs sm:text-sm md:text-base"
                              >
                                {formatHariTanggal(projects[current].start)}
                              </div>
                            </div>
                          </div>

                          {/* Berakhir */}
                          <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                            <CalendarCheck
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 
                                text-[#B61F2B] mt-0.5 flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <div
                                className="text-[10px] xs:text-xs sm:text-sm 
                         font-medium text-gray-300"
                              >
                                Berakhir
                              </div>
                              <div
                                className="font-semibold 
                         text-xs sm:text-sm md:text-base"
                              >
                                {formatHariTanggal(projects[current].end)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-4">
                        <span className="text-xs text-gray-500">
                          Proyek {current + 1}/{projects.length}
                        </span>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-1 mb-2">
                          {projects[current].title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <User className="w-3 h-3 text-gray-500" />
                            <span>Oleh Alex</span>
                          </div>

                          <div className="w-px h-3 bg-gray-300"></div>

                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-gray-500" />
                            <span>
                              Diperbarui :{" "}
                              {formatHariTanggal(projects[current].updated_at)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="max-h-48 overflow-y-auto pr-2 scrollbar-thin mb-3">
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                            {projects[current].description}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-xs text-gray-400 flex items-center gap-1">
                            <ChevronUp className="w-3 h-3" />
                            <ChevronDown className="w-3 h-3" />
                            <span>Scroll</span>
                          </div>

                          <div className="flex-1 h-px bg-gray-200"></div>

                          <button
                            onClick={() => setShowFullDescription(true)}
                            className="text-sm text-[#B61F2B] font-medium hover:text-[#C94A4A] flex items-center gap-1"
                          >
                            <span>Baca lengkap</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {showFullDescription && (
                        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                          <div className="bg-white/95 backdrop-blur rounded-xl shadow-lg border border-gray-200 max-w-lg w-full max-h-[75vh] overflow-hidden">
                            {/* Minimal header */}
                            <div className="p-4 border-b border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-600">
                                  Deskripsi
                                </span>
                                <button
                                  onClick={() => setShowFullDescription(false)}
                                  className="text-gray-500 hover:text-gray-700"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            <div className="p-5 overflow-y-auto max-h-[55vh]">
                              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                {projects[current]?.description}
                              </div>
                            </div>

                            <div className="p-4 border-t border-gray-100 flex justify-center">
                              <button
                                onClick={() => setShowFullDescription(false)}
                                className="text-sm text-gray-600 hover:text-gray-800"
                              >
                                Selesai membaca
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tombol kompak */}
                      <button
                        onClick={() => setShowProgressModal(true)}
                        className="w-full py-2.5 px-4 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] text-white font-medium text-sm rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        <span>Lihat Progress</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="mt-11 space-y-6">
            {/* Minimal Navigation */}
            <div className="flex items-center justify-center gap-8">
              <button
                onClick={prev}
                disabled={current === 0}
                className={`group p-3 rounded-full transition-all ${
                  current === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-gradient-to-r hover:from-[#B61F2B]/10 hover:to-transparent"
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    current === 0
                      ? "bg-gray-100"
                      : "bg-gray-50 group-hover:bg-white"
                  }`}
                >
                  <ChevronLeft
                    className={`w-5 h-5 ${
                      current === 0
                        ? "text-gray-400"
                        : "text-gray-700 group-hover:text-[#B61F2B]"
                    }`}
                  />
                </div>
              </button>

              {/* Current Project Card */}
              <div className="text-center max-w-xs">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#B61F2B]/10 to-[#C9A74A]/10 rounded-full mb-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 flex gap-2">
                    Proyek{" "}
                    <div className="text-sm font-medium text-gray-700">
                      <span className="text-[#B61F2B]">{current + 1}</span>
                      <span className="text-gray-400 mx-2">/</span>
                      <span>{projects.length}</span>
                    </div>
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-2">
                  {projects[current]?.title}
                </h3>
              </div>

              <button
                onClick={next}
                disabled={current === projects.length - 1}
                className={`group p-3 rounded-full transition-all ${
                  current === projects.length - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-gradient-to-l hover:from-[#C9A74A]/10 hover:to-transparent"
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    current === projects.length - 1
                      ? "bg-gray-100"
                      : "bg-gray-50 group-hover:bg-white"
                  }`}
                >
                  <ChevronRight
                    className={`w-5 h-5 ${
                      current === projects.length - 1
                        ? "text-gray-400"
                        : "text-gray-700 group-hover:text-[#B61F2B]"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Smart Jump Navigation */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex flex-col items-center gap-4">
                {/* Quick Jump for many projects */}
                {projects.length > 5 && (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCurrent(0)}
                      className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                        current === 0
                          ? "bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      1
                    </button>

                    {projects.length > 10 && (
                      <>
                        <span className="text-gray-400">-</span>
                        <button
                          onClick={() =>
                            setCurrent(Math.floor(projects.length / 2))
                          }
                          className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Tengah
                        </button>
                      </>
                    )}

                    <span className="text-gray-400">-</span>
                    <button
                      onClick={() => setCurrent(projects.length - 1)}
                      className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                        current === projects.length - 1
                          ? "bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {projects.length}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showProgressModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProgressModal(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
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

                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
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
