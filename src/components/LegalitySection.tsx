"use client";

import React from "react";
import { FaFileContract, FaIdCard, FaBuilding, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";

const legalityData = [
  {
    title: "NIB (Nomor Induk Berusaha)",
    desc: "Identitas pelaku usaha yang diterbitkan oleh Lembaga OSS.",
    icon: <FaIdCard className="w-8 h-8 text-[#B61F2B]" />,
    number: "Reg: 1210200021312", // Placeholder, user can update
  },
  {
    title: "SJK (Sertifikat Jasa Konstruksi)",
    desc: "Sertifikat standar untuk menjalankan aktivitas usaha jasa konstruksi.",
    icon: <FaBuilding className="w-8 h-8 text-[#C9A74A]" />,
    number: "Tersertifikasi Nasional",
  },
  {
    title: "SK Kemenkumham",
    desc: "Pengesahan badan hukum Perseroan Terbatas sesuai peraturan.",
    icon: <FaFileContract className="w-8 h-8 text-[#B61F2B]" />,
    number: "AHU-22341.AH.01.01",
  },
  {
    title: "Sertifikasi Keahlian",
    desc: "Tim profesional kami memiliki sertifikat keahlian konstruksi (SKA/SKT).",
    icon: <FaClipboardCheck className="w-8 h-8 text-[#C9A74A]" />,
    number: "Tim Ahli Bersertifikat",
  },
];

export default function LegalitySection() {
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
            Kami berkomitmen pada transparansi dan profesionalisme dengan memastikan seluruh
            aspek hukum dan perizinan usaha terpenuhi sesuai standar nasional.
          </p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalityData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#101010] mb-3">{item.title}</h3>
              <p className="text-[#666] text-sm mb-4 leading-relaxed">{item.desc}</p>
              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-50">
                <FaCheckCircle className="text-green-500 w-4 h-4" />
                <span className="text-xs font-semibold text-[#888] tracking-wider uppercase">
                  {item.number}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges / Footer Info */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-[#333]">Update Terakhir: Januari 2026</span>
            </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>
    </section>
  );
}
