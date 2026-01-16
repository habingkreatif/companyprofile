"use client";

import React, { useState } from "react";
import {
  FaFileContract,
  FaIdCard,
  FaBuilding,
  FaCheckCircle,
  FaClipboardCheck,
  FaEye,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const legalityData = [
 {
    title: "Akta Pendirian Perusahaan",
    desc: "Dokumen resmi pendirian badan hukum yang diterbitkan oleh Notaris Tunjung Widhi Wasesa Suwadji, S.H., M.Kn.",
    icon: <FaFileContract className="w-8 h-8 text-[#B61F2B]" />,
    number: "No. 45 Tanggal 10 Januari 2026", 
    docImage: "/akta.jpg", 
  },
  {
    title: "SK Pengesahan Menkumham",
    desc: "Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia mengenai pengesahan badan hukum perseroan.",
    icon: <FaShieldAlt className="w-8 h-8 text-[#C9A74A]" />,
    number: "AHU-0002038.AH.01.01.TAHUN 2026", 
    docImage: "/sk.jpg", 
  },
  {
    title: "NIB (Nomor Induk Berusaha)",
    desc: "Identitas pelaku usaha dan izin dasar yang diterbitkan oleh OSS.",
    icon: <FaIdCard className="w-8 h-8 text-[#B61F2B]" />,
    number: "Reg: 1210200021312",
    docImage: "/nib.jpg", 
  },
  {
    title: "SJK (Sertifikat Jasa Konstruksi)",
    desc: "Izin operasional untuk menjalankan aktivitas usaha jasa konstruksi.",
    icon: <FaBuilding className="w-8 h-8 text-[#C9A74A]" />,
    number: "Tersertifikasi Nasional",
    docImage: "/sjk.jpg", 
  },
];

const kbliData = [
  { code: "41011", title: "Konstruksi Gedung Hunian" },
  { code: "41012", title: "Konstruksi Gedung Perkantoran" },
  { code: "41013", title: "Konstruksi Gedung Industri" },
  { code: "41014", title: "Konstruksi Gedung Perbelanjaan" },
  { code: "41015", title: "Konstruksi Gedung Kesehatan" },
  { code: "41016", title: "Konstruksi Gedung Pendidikan" },
  { code: "41019", title: "Konstruksi Gedung Lainnya" },
  { code: "42101", title: "Konstruksi Jalan Raya" },
  { code: "42201", title: "Konstruksi Jaringan Irigasi, Komunikasi & Limbah" },
  { code: "43211", title: "Instalasi Listrik" },
  { code: "43212", title: "Instalasi Elektronika" },
  { code: "43221", title: "Instalasi Saluran Air (Plumbing)" },
  { code: "43301", title: "Pemasangan Lantai, Dinding & Atap" },
  { code: "43302", title: "Pemasangan Kayu Konstruksi" },
  { code: "43303", title: "Pemasangan Pintu, Jendela & Tangga" },
  { code: "43304", title: "Pemasangan Kaca" },
  { code: "43305", title: "Dekorasi Interior" },
  { code: "43309", title: "Finishing Bangunan Lainnya" },
  { code: "43901", title: "Konstruksi Atap" },
  { code: "43902", title: "Konstruksi Beton" },
  { code: "71101", title: "Jasa Arsitektur" },
  { code: "71102", title: "Jasa Rekayasa (Engineering)" },
  { code: "74103", title: "Aktivitas Desain Interior" },
  { code: "7020", title: "Aktivitas Konsultasi Manajemen" },
  { code: "4663", title: "Perdagangan Besar Bahan Konstruksi" },
];

export default function LegalitySection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredKbli = kbliData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.includes(searchTerm)
  );

  return (
    <section id="legalitas" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#101010] mb-4">
            Legalitas & Sertifikasi
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#555] leading-relaxed">
            HABS Konstruksi Karya berkomitmen pada transparansi hukum dan standar operasional
            profesional untuk menjamin keamanan setiap proyek Anda.
          </p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {legalityData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
            >
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#101010] mb-3">{item.title}</h3>
              <p className="text-[#666] text-sm mb-6 leading-relaxed flex-grow">{item.desc}</p>

              {item.docImage && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mb-4 w-full flex items-center gap-2 border-[#B61F2B] text-[#B61F2B] hover:bg-[#B61F2B] hover:text-white"
                    >
                      <FaEye /> Lihat Dokumen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.docImage}
                        alt={item.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              )}

              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-50">
                <FaCheckCircle className="text-green-500 w-4 h-4" />
                <span className="text-xs font-semibold text-[#888] tracking-wider uppercase">
                  {item.number}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* KBLI Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h3 className="text-3xl font-bold text-[#101010] mb-3">Bidang Usaha (KBLI)</h3>
              <p className="text-[#666]">
                Cakupan teknis dan spesialisasi keahlian HABS Konstruksi Karya sesuai standarisasi OSS.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari bidang atau kode..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B61F2B] focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[500px] overflow-y-auto pr-4 custom-scrollbar">
            {filteredKbli.map((kbli, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-gray-50 bg-[#F9F9F9] hover:bg-white hover:border-[#C9A74A] hover:shadow-md transition-all duration-200 group"
              >
                <span className="inline-block px-2 py-1 rounded bg-[#F0F0F0] text-[10px] font-bold text-[#B61F2B] mb-2 group-hover:bg-[#B61F2B] group-hover:text-white transition-colors">
                  KODE: {kbli.code}
                </span>
                <p className="text-sm font-semibold text-[#101010] leading-snug">
                  {kbli.title}
                </p>
              </div>
            ))}
            {filteredKbli.length === 0 && (
              <div className="col-span-full py-20 text-center text-[#999]">
                Tidak ditemukan bidang usaha yang cocok.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #B61F2B;
        }
      `}</style>
    </section>
  );
}
