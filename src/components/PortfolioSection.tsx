"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    category: "Konstruksi",
    image: "/9.png",
    description: "Transformasi rumah tradisional menjadi minimalis modern",
  },
  {
    id: 2,
    title: "Dapur Minimalis",
    category: "Konstruksi",
    image: "/14.png",
    description: "Desain dan instalasi dapur minimalis fungsional",
  },
  {
    id: 3,
    title: "Cafe set Custom",
    category: "Konstruksi",
    image: "/11.png",
    description: "Desain dan instalasi kitchen set premium custom",
  },
  {
    id: 4,
    title: "Ruang Keluarga Elegan",
    category: "Konstruksi",
    image: "/7.png",
    description: "Renovasi ruang keluarga dengan konsep elegan dan nyaman",
  },
  {
    id: 5,
    title: "Kamar Tidur Modern",
    category: "Konstruksi",
    image: "/5.png",
    description: "Instalasi sistem mechanical, electrical, plumbing",
  },
  {
    id: 6,
    title: "Ruang Tamu Modern",
    category: "Konstruksi",
    image: "/17.png",
    description: "Desain interior ruang tamu dengan sentuhan modern",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative"
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolios.map((portfolio) => (
            <motion.div
              key={portfolio.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{portfolio.title}</h3>
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
        </motion.div>
      </div>
    </section>
  );
}
