"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface SiteTranscript {
  id: string;
  location: string;
  client: string;
  role: string;
  projectType: string;
  transcript: string;
  rabStatus: string;
  warrantyStatus: string;
}

const siteLogs: SiteTranscript[] = [
  {
    id: "01",
    location: "Sleman, DIY",
    client: "Dewangga Anggara",
    role: "Pemilik Rumah",
    projectType: "Pembangunan Hunian 2 Lantai",
    transcript:
      "Awalnya saya ragu karena pengalaman proyek rumah pertama dulu biayanya bengkak 30%. Pas ketemu tim HAB, RAB dikunci transparan dari depan. Tiap ada penyesuaian di lapangan selalu diomongin dulu. Pas serah terima, biayanya pas 100% sama kesepakatan awal.",
    rabStatus: "100% Tepat RAB (Zero Adendum)",
    warrantyStatus: "Garansi Pemeliharaan Aktif",
  },
  {
    id: "02",
    location: "Bantul, DIY",
    client: "Warsito Hadi",
    role: "Commercial Owner",
    projectType: "Konstruksi Cafe & Area Komersial",
    transcript:
      "Saya sangat rewel di kerapian detail. Pekerjaan struktur baja dan bata eksposnya presisi banget. Yang saya hargai, insinyur HAB enggak asal 'yang penting jadi', tapi bener-bener ngejar siku dan kerapian nat pengerjaan.",
    rabStatus: "Presisi Detail 1:1 Gambar Kerja",
    warrantyStatus: "BAST Selesai & Operasional",
  },
  {
    id: "03",
    location: "Yogyakarta",
    client: "Ahmad Fauzi",
    role: "Developer Properti",
    projectType: "Gudang & Perkantoran",
    transcript:
      "Sebagai pengembang, yang paling bikin pusing itu kalau jadwal mundur. Tim HAB sangat disiplin kirim rekap Kurva-S tiap minggu. Semua material masuk dicatat, tenaga kerja dipantau K3-nya. Proyek kelar 10 hari lebih cepat.",
    rabStatus: "Selesai 10 Hari Lebih Cepat",
    warrantyStatus: "Sertifikat K3 & Garansi Resmi",
  },
];

export default function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = siteLogs[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % siteLogs.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + siteLogs.length) % siteLogs.length);
  };

  return (
    <section id="testimoni" className="py-24 bg-[#FAFAFA] text-neutral-900 font-sans border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header & Tab Navigation */}
        <div className="border-b border-neutral-300 pb-6 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="text-left">
            <span className="text-xs font-mono font-bold text-[#B61F2B] uppercase tracking-wider block mb-2">
              05 / TRANSKRIP INSPEKSI LAPANGAN
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-neutral-950">
              Catatan Serah Terima <span className="font-bold">Klien PT HAB</span>
            </h2>
          </div>

          {/* Minimalist Tab Selector */}
          <div className="flex items-center gap-2">
            {siteLogs.map((log, idx) => (
              <button
                key={log.id}
                onClick={() => setActiveIdx(idx)}
                className={`text-xs font-mono px-3 py-1.5 transition-all duration-200 ${activeIdx === idx
                    ? "bg-neutral-900 text-white font-bold"
                    : "bg-neutral-200/60 text-neutral-600 hover:bg-neutral-300"
                  }`}
              >
                [{log.id}] {log.location.split(",")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area: Large Airy Monograph Statement */}
        <div className="text-left space-y-12">

          {/* Big Featured Quote */}
          <div className="min-h-[160px] flex items-center">
            <blockquote className="text-xl sm:text-3xl font-light text-neutral-900 leading-relaxed tracking-tight">
              "{current.transcript}"
            </blockquote>
          </div>

          {/* Client Identity Header */}
          <div className="pt-6 border-t border-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-950">
                {current.client}
              </h3>
              <p className="text-xs text-neutral-500 font-mono">
                {current.role} • <span className="text-neutral-700">{current.location}</span>
              </p>
            </div>

            {/* Prev / Next Minimalist Arrows */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400">
                {activeIdx + 1} / {siteLogs.length}
              </span>
              <button
                onClick={handlePrev}
                className="p-2 border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
                title="Sebelumnya"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
                title="Selanjutnya"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Technical Spec Data Strip (Informative Horizontal Bar) */}
          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-200 text-left text-xs font-mono">
            <div>
              <span className="text-neutral-400 block uppercase text-[10px] mb-1">Jenis Proyek</span>
              <span className="font-semibold text-neutral-800">{current.projectType}</span>
            </div>

            <div>
              <span className="text-neutral-400 block uppercase text-[10px] mb-1">Akurasi RAB & Waktu</span>
              <span className="font-bold text-[#B61F2B]">{current.rabStatus}</span>
            </div>

            <div>
              <span className="text-neutral-400 block uppercase text-[10px] mb-1">Status Legalitas & Garansi</span>
              <span className="font-medium text-emerald-700 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                {current.warrantyStatus}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}