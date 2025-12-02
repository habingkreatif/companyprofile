"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Warsito Hadi",
    position: "Pemilik Cafe",
    company: "Yogyakarta",
    rating: 5,
    comment:
      "Desain 3D Cafe yang diberikan sangat realistis dan detail. Membantu kami membayangkan konsep interior dan layout sebelum pembangunan. Sangat memuaskan!",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    position: "Pemilik Kitchen & Cafe",
    company: "Cafe & Resto",
    rating: 5,
    comment:
      "Desain 3D kitchen set dan cafe sangat membantu visualisasi. Detail setiap elemen terlihat jelas, mempermudah pengambilan keputusan desain.",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    position: "Developer",
    company: "Property Developer",
    rating: 5,
    comment:
      "Desain 3D apartemen yang diberikan akurat dan realistis. Membantu kami memperlihatkan konsep properti kepada klien sebelum pembangunan dimulai.",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    position: "Pemilik Masjid",
    company: "Bantul, Yogyakarta",
    rating: 5,
    comment:
      "Desain 3D masjid yang diberikan sangat detail dan memudahkan kami membayangkan hasil akhir. Eksekusi konstruksi sesuai dengan desain yang ditampilkan.",
  },
  {
    id: 5,
    name: "Ferry Ramadhan",
    position: "Pemilik Rumah",
    company: "Sleman, Yogyakarta",
    rating: 5,
    comment:
      "Renovasi rumah kami pekerjaannya lebih cepat dari timeline dgn kualitas sangat baik. Tim Habs Konstruksi Karya sangat responsif dan profesional. Hasilnya memuaskan!",
  },
  {
    id: 6,
    name: "Maya Sari",
    position: "Pemilik Rumah",
    company: "Sleman, Yogyakarta",
    rating: 5,
    comment:
      "Desain 3D rumah dan RAB yang diberikan sangat detail, mempermudah kami melihat visual rumah secara lengkap sebelum pembangunan dimulai. Sangat membantu dalam pengambilan keputusan.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function TestimonialSection() {
  return (
    <section
      id="testimoni"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B61F2B] rounded-full opacity-5 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A74A] rounded-full opacity-5 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
            <FaStar className="w-4 h-4 text-[#C9A74A]" />
            <span className="text-red-700 text-sm font-medium">
              Testimoni Klien
            </span>
          </div>
          <h2 className="text-5xl font-bold text-[#101010] mb-4">
            Apa Kata Klien Kami?
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-4"></div>
          <p className="text-[#3A3A3A] max-w-2xl mx-auto text-lg">
            Kepuasan klien adalah prioritas utama kami. Dengarkan pengalaman
            mereka yang telah mempercayakan proyeknya kepada kami.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E2E2E2] hover:border-[#B61F2B] relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#B61F2B]/5 to-[#C9A74A]/5 rounded-bl-full"></div>

              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="w-8 h-8 text-[#B61F2B] opacity-20" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 text-[#C9A74A] fill-current"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#3A3A3A] leading-relaxed mb-6 text-base">
                "{testimonial.comment}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E2E2E2]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B61F2B] to-[#C9A74A] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#101010] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#3A3A3A] text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-[#B61F2B] text-xs font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
