"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Users, Award } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#B61F2B]" />,
      title: "Integritas & Amanah",
      description: "Kepercayaan adalah pondasi utama setiap kerjasama kami.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#B61F2B]" />,
      title: "Standar Kualitas",
      description: "Material terbaik dan pengerjaan presisi tanpa kompromi.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#B61F2B]" />,
      title: "Solusi Inovatif",
      description: "Pendekatan modern untuk efisiensi dan estetika bangunan.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#B61F2B]" />,
      title: "Tim Profesional",
      description: "Didukung tenaga ahli berpengalaman di bidangnya.",
    },
  ];

  return (
    <section
      id="tentangkami"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Visuals */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square"
            >
              <Image
                src="/bg_fix.png"
                alt="Tentang Habs Konstruksi Karya"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Quote overlay */}
              {/* <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                 <blockquote className="text-white text-lg md:text-xl font-medium italic border-l-4 border-[#B61F2B] pl-6">
                    "Membangun bukan sekadar menyusun bata, tapi mewujudkan visi masa depan."
                 </blockquote>
              </div> */}
            </motion.div>

            {/* Decorative decorative element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-[#B61F2B]/10 rounded-3xl hidden lg:block"></div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full mb-6">
                <span className="text-[#B61F2B] text-xs font-bold tracking-widest uppercase">
                  Tentang Kami
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Mitra Konstruksi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B61F2B] to-[#C9A74A]">
                  Terpercaya & Visioner
                </span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Di <strong>HABS Konstruksi Karya</strong>, kami memahami bahwa
                setiap proyek adalah investasi besar. Kami hadir untuk
                memastikan visi Anda terwujud dengan perencanaan matang,
                eksekusi rapi, dan hasil akhir yang membanggakan.
              </p>

              {/* Value Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
