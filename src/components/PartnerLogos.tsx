"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "Partner 1", logo: "/partner-1.svg" },
  { id: 2, name: "Partner 2", logo: "/partner-2.svg" },
  { id: 3, name: "Partner 3", logo: "/partner-3.svg" },
  { id: 4, name: "Partner 4", logo: "/partner-4.svg" },
  { id: 5, name: "Partner 5", logo: "/partner-5.svg" },
  { id: 6, name: "Partner 6", logo: "/partner-6.svg" },
];

// Duplikasi untuk seamless looping
const duplicatedPartners = [...partners, ...partners];

export default function PartnerLogos() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#101010] mb-4">
            Mitra Kerjasama Kami
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-4"></div>
          <p className="text-[#3A3A3A] max-w-2xl mx-auto text-lg">
            Kami berkomitmen bekerja sama dengan brand terpercaya
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Fade Effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Logos */}
          <motion.div
            className="flex gap-12"
            animate={{ x: [-100, -50 * duplicatedPartners.length + "%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedPartners.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="flex-shrink-0 w-40 h-24 bg-[#F5F5F5] rounded-xl flex items-center justify-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-[#E8E8E8]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3A3A3A] text-lg">
            Dipercaya oleh lebih dari{" "}
            <span className="font-bold text-[#B61F2B]">50+</span> perusahaan di
            Indonesia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
