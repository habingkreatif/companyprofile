import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "Partner 1", logo: "/commodities.png" },
  { id: 2, name: "Partner 2", logo: "/crew.png" },
  { id: 4, name: "Partner 4", logo: "/konstruksi.png" },
  { id: 5, name: "Partner 5", logo: "/production.png" },
];

export default function PartnerLogos() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-red-600" />
            <span className="text-red-700 text-sm font-medium">
              HABS Group Ecosystem
            </span>
          </div>
          <div className="flex justify-center">
            <Image
              src={"/group.png"}
              alt={"HABS Group Ecosystem"}
              width={120}
              height={120}
              className="object-contain drop-shadow-sm"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">Satu Keluarga</span>, Beragam Solusi
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-4" />
          <p className="text-[#3A3A3A] max-w-2xl mx-auto text-lg">
            Layanan lengkap konstruksi dalam satu ekosistem HABS Group. Dari
            perencanaan hingga material, kami siap mendukung proyek Anda.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient fade (kiri & kanan) */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Infinite Scroll Container */}
          <div className="overflow-hidden">
            {/* First scrolling set */}
            <div className="flex animate-infinite-scroll">
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`first-${partner.id}-${idx}`}
                  className="flex-shrink-0 w-56 h-32 mx-6 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain drop-shadow-sm"
                      sizes="1000px"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second scrolling set (duplicate for seamless loop) */}
            <div className="flex animate-infinite-scroll-2 absolute top-0">
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`second-${partner.id}-${idx}`}
                  className="flex-shrink-0 w-56 h-32 mx-6 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain drop-shadow-sm"
                      sizes="1000px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inline CSS Animation */}
          <style jsx>{`
            @keyframes infinite-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            @keyframes infinite-scroll-2 {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(0%);
              }
            }

            .animate-infinite-scroll {
              animation: infinite-scroll 40s linear infinite;
              width: max-content;
            }

            .animate-infinite-scroll-2 {
              animation: infinite-scroll-2 40s linear infinite;
              width: max-content;
            }

            .animate-infinite-scroll:hover,
            .animate-infinite-scroll-2:hover {
              animation-play-state: paused;
            }

            /* Responsive size fix */
            @media (max-width: 640px) {
              .animate-infinite-scroll > div,
              .animate-infinite-scroll-2 > div {
                width: 100px;
                height: 60px;
                margin: 0 1rem;
              }
            }
          `}</style>
        </div>

        {/* Footer Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3A3A3A] text-lg">
            Berkomitmen membangun masa depan konstruksi yang lebih baik di
            Indonesia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
