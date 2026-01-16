 "use client";

import { motion } from "framer-motion";
import { Star, Quote, UserCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  comment: string;
  initial: string;
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
    initial: "W",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    position: "Pemilik Kitchen & Cafe",
    company: "Cafe & Resto",
    rating: 5,
    comment:
      "Desain 3D kitchen set dan cafe sangat membantu visualisasi. Detail setiap elemen terlihat jelas, mempermudah pengambilan keputusan desain.",
    initial: "S",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    position: "Developer",
    company: "Property Developer",
    rating: 5,
    comment:
      "Desain 3D apartemen yang diberikan akurat dan realistis. Membantu kami memperlihatkan konsep properti kepada klien sebelum pembangunan dimulai.",
    initial: "A",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    position: "Pemilik Masjid",
    company: "Bantul, Yogyakarta",
    rating: 5,
    comment:
      "Desain 3D masjid yang diberikan sangat detail dan memudahkan kami membayangkan hasil akhir. Eksekusi konstruksi sesuai dengan desain yang ditampilkan.",
    initial: "D",
  },
  {
    id: 5,
    name: "Dewangga Anggara",
    position: "Pemilik Rumah",
    company: "Sleman, Yogyakarta",
    rating: 5,
    comment:
      "Renovasi rumah kami pekerjaannya lebih cepat dari timeline dgn kualitas sangat baik. Tim Habs Konstruksi Karya sangat responsif dan profesional.",
    initial: "D",
  },
  {
    id: 6,
    name: "Maya Sari",
    position: "Pemilik Rumah",
    company: "Sleman, Yogyakarta",
    rating: 5,
    comment:
      "Desain 3D rumah dan RAB yang diberikan sangat detail, mempermudah kami melihat visual rumah secara lengkap sebelum pembangunan dimulai.",
    initial: "M",
  },
];

const MarqueeCard = ({ item }: { item: Testimonial }) => (
  <div className="w-[350px] md:w-[450px] flex-shrink-0 mx-4">
    <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-slate-100 h-full hover:border-[#B61F2B]/20 transition-colors group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-1">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[#C9A74A] fill-current" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-slate-100 group-hover:text-[#B61F2B]/10 transition-colors" />
      </div>

      <p className="text-slate-600 leading-relaxed mb-6 font-medium">
        "{item.comment}"
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B61F2B] to-[#C9A74A] flex items-center justify-center text-white font-bold text-sm shadow-md">
          {item.initial}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
          <p className="text-slate-400 text-xs">{item.position} • {item.company}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialSection() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Duplicate data for seamless loop (enough to cover wide screens)
  const marqueeData = [...testimonials, ...testimonials];

  return (
    <section id="testimoni" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        /* Mobile optimization: slightly faster but still slow enough */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 40s;
          }
        }
      `}</style>

      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
           <Star className="w-4 h-4 text-[#C9A74A] fill-current" />
           <span className="text-slate-800 text-xs font-bold uppercase tracking-widest">Trusted by Clients</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#101010] mb-6">
          Suara Kepercayaan
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Dengarkan pengalaman mereka yang telah mewujudkan visi konstruksinya bersama kami.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
         {/* Gradient Masks - Enhanced for smooth fade */}
         <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-10 pointer-events-none"></div>

         <div className="flex animate-marquee py-4 hover:cursor-grab active:cursor-grabbing">
            {marqueeData.map((item, idx) => (
               <MarqueeCard key={`${item.id}-${idx}`} item={item} />
            ))}
         </div>
      </div>
    </section>
  );
}
