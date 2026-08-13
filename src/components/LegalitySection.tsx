"use client";

import React, { useState } from "react";
import {
  FileCheck,
  Building2,
  Copy,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  Download,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const legalityData = [
  {
    id: "akta",
    title: "Akta Pendirian PT",
    desc: "Badan hukum resmi PT HABS Konstruksi Karya yang disahkan oleh Notaris resmi.",
    icon: <Building2 className="w-5 h-5 text-neutral-900" />,
    number: "AHU-01210.AH.02.01",
    docImage: "/akta.jpg",
    badge: "VERIFIKASI NOTARIS",
  },
  {
    id: "sk",
    title: "SK Kemenkumham",
    desc: "Legitimasi resmi dari Kementerian Hukum & HAM RI untuk kepastian hukum kontrak.",
    icon: <FileCheck className="w-5 h-5 text-neutral-900" />,
    number: "AHU-0002038.AH.01.01",
    docImage: "/sk.jpg",
    badge: "KEMENKUMHAM RI",
  },
  {
    id: "nib",
    title: "NIB (Nomor Induk Berusaha)",
    desc: "Izin operasional berbasis risiko resmi dari Lembaga OSS Republik Indonesia.",
    icon: <Briefcase className="w-5 h-5 text-neutral-900" />,
    number: "2801260257576",
    docImage: "/nib.webp",
    badge: "OSS RISK-BASED VERIFIED",
  },
];

const complianceHighlights = [
  {
    title: "Kualifikasi Bangunan & Sipil",
    desc: "Izin resmi konstruksi gedung hunian, perkantoran, gudang industri, hingga pengerjaan prasarana.",
  },
  {
    title: "Spesialis MEP & Finishing",
    desc: "Terdaftar resmi untuk instalasi kelistrikan 3-phase, plumbing, kaca aluminium, dan interior custom.",
  },
  {
    title: "Standar Keselamatan K3",
    desc: "Penerapan manajemen HSE dan prosedur K3 ketat di setiap lokasi proyek yang ditangani.",
  },
  {
    title: "Kelayakan Kualifikasi Vendor",
    desc: "Kelengkapan dokumen teknis & administrasi usaha untuk memenuhi standar prakualifikasi tender B2B.",
  },
];

export default function LegalitySection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="legalitas" className="py-20 sm:py-28 bg-[#0C0C0C] text-[#ECECEC] font-sans relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial Top Line & Header */}
        <div className="border-b border-neutral-800 pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#B61F2B] uppercase tracking-widest block mb-2">
              04 / BADAN HUKUM & KEPATUHAN
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              Legalitas Badan Usaha. <br />
              <span className="font-bold text-white">Investasi & Kontrak Anda Terjamin.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed font-normal mt-3">
              PT HABS Konstruksi Karya beroperasi penuh di bawah payung hukum badan usaha yang sah. Seluruh dokumen legalitas dapat diverifikasi sebelum kerja sama dimulai.
            </p>
          </div>

          {/* Direct B2B Download Button */}
          <div className="shrink-0 text-left lg:text-right">
            <a
              href="/legalitas-pt-hab.zip"
              download
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-neutral-200 text-neutral-950 font-mono text-xs uppercase font-bold transition-colors w-full sm:w-auto"
            >
              <Download className="w-4 h-4 text-[#B61F2B]" />
              <span>Download Berkas Vendor (ZIP/PDF)</span>
            </a>
            <p className="text-[10px] font-mono text-neutral-500 mt-2">
              *Berisi Akta, SK Kemenkumham, NPWP & NIB Resmi
            </p>
          </div>
        </div>

        {/* 3 Main Legal Document Dossier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {legalityData.map((item) => (
            <div
              key={item.id}
              className="bg-[#121212] border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between text-left hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-white text-neutral-950 border border-neutral-200">
                    {item.icon}
                  </div>

                  {item.docImage && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-mono text-[11px] uppercase border border-neutral-700 transition-colors">
                          <span>Pratinjau</span>
                          <ExternalLink className="w-3 h-3 text-[#B61F2B]" />
                        </button>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl p-6 sm:p-8 bg-[#0C0C0C] border border-neutral-800 text-white rounded-none max-h-[90vh] flex flex-col text-left font-sans">
                        <DialogHeader className="mb-4 text-left border-b border-neutral-800 pb-4">
                          <DialogTitle className="text-white text-lg font-bold flex items-center gap-2 font-mono">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span>DOKUMEN VERIFIKASI ASLI: {item.title}</span>
                          </DialogTitle>
                        </DialogHeader>

                        <div className="flex-1 overflow-y-auto border border-neutral-800 bg-neutral-900 p-4 flex justify-center">
                          <Image
                            src={item.docImage}
                            alt={item.title}
                            width={1000}
                            height={1400}
                            className="w-full h-auto object-contain"
                            priority
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>

                <span className="text-[10px] font-mono font-bold text-[#B61F2B] uppercase tracking-widest block mb-2">
                  [ {item.badge} ]
                </span>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Copy-to-Clipboard Bar */}
              <div
                onClick={() => handleCopy(item.number)}
                className="pt-4 border-t border-neutral-800 flex items-center justify-between cursor-pointer hover:bg-neutral-900/80 p-2 transition-colors font-mono"
                title="Klik untuk menyalin nomor resmi"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-xs text-neutral-300 truncate">
                    {item.number}
                  </span>
                </div>

                <div className="shrink-0">
                  <AnimatePresence mode="wait">
                    {copied === item.number ? (
                      <span className="text-[10px] font-bold text-emerald-400 uppercase">
                        Tersalin!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-neutral-500 hover:text-white transition-colors">
                        <Copy className="w-3 h-3" />
                        <span>Salin</span>
                      </span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Summary Table Sheet */}
        <div className="bg-[#121212] border border-neutral-800 p-6 sm:p-8 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-800">
            <div>
              <h3 className="text-lg font-bold text-white">
                Cakupan Kualifikasi & Standar Kerja PT HABS
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-normal">
                Terdaftar resmi di Sistem OSS Pemerintah Republik Indonesia dengan klasifikasi bidang usaha terverifikasi.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 w-max shrink-0 font-bold uppercase">
              ● STATUS OSS: AKTIF & PATUH HUKUM
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {complianceHighlights.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="font-bold text-[#B61F2B] flex items-center gap-2">
                  <span>—</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}