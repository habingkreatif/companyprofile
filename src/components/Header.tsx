"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValueEvent 
} from "framer-motion";
import { 
  Menu, 
  X, 
  PhoneCall, 
  Info, 
  Briefcase, 
  Layers, 
  MessageSquare,
  Home
} from "lucide-react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  const navLinks = [
    { label: "Beranda", href: "#", icon: <Home className="w-5 h-5" /> },
    { label: "Tentang Kami", href: "#tentangkami", icon: <Info className="w-5 h-5" /> },
    { label: "Layanan", href: "#layanan", icon: <Layers className="w-5 h-5" /> },
    { label: "Portofolio", href: "#portofolio", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Legalitas", href: "#legalitas", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Testimoni", href: "#testimoni", icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-md p-0.5">
                  <Image
                    src="/55.png"
                    alt="HABS Logo"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg sm:text-xl font-black tracking-tight leading-none ${scrolled ? "text-slate-900" : "text-white mix-blend-difference"}`}>
                  HABS
                </span>
                <span className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase leading-none ${scrolled ? "text-[#B61F2B]" : "text-white/90 mix-blend-difference"}`}>
                  Konstruksi Karya
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center space-x-1 ${scrolled ? "text-slate-600" : "text-slate-800"}`}>
               {/* Nav Links Container - Added background for readability when not scrolled if needed, but keeping clean for now */}
               <div className={`flex items-center px-6 py-2 rounded-full ${!scrolled && "bg-white/90 backdrop-blur-sm shadow-sm"}`}>
                  {navLinks.slice(1, 5).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-bold hover:text-[#B61F2B] transition-colors group"
                    >
                      {item.label}
                      <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#B61F2B] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300 rounded-full"></span>
                    </a>
                  ))}
               </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/6285326566522"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 flex items-center gap-2 px-6 py-2.5 bg-[#B61F2B] text-white rounded-full font-bold text-sm hover:bg-[#901822] hover:shadow-lg hover:shadow-red-900/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Konsultasi Gratis</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden p-2 rounded-full ${scrolled ? "bg-slate-100 text-slate-900" : "bg-white/20 backdrop-blur-md text-slate-900"}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl md:hidden flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden border border-slate-200">
                     <Image src="/55.png" alt="Logo" fill className="object-cover" />
                  </div>
                  <span className="font-bold text-slate-900">Menu</span>
               </div>
               <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-[#B61F2B] transition-colors"
               >
                  <X className="w-6 h-6" />
               </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
               {navLinks.map((item, idx) => (
                  <motion.a
                     key={item.label}
                     href={item.href}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     onClick={() => setMobileMenuOpen(false)}
                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors border border-transparent hover:border-slate-100"
                  >
                     <div className="w-10 h-10 rounded-full bg-red-50 text-[#B61F2B] flex items-center justify-center">
                        {item.icon}
                     </div>
                     <span className="text-lg font-bold text-slate-800">{item.label}</span>
                  </motion.a>
               ))}
            </div>

            {/* Mobile Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100">
               <a
                  href="https://wa.me/6285326566522"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#B61F2B] text-white rounded-xl font-bold shadow-lg shadow-red-900/10 active:scale-95 transition-all"
               >
                  <PhoneCall className="w-5 h-5" />
                  Hubungi Sekarang
               </a>
               <p className="text-center text-xs text-slate-400 mt-4">
                  © 2024 Habs Konstruksi Karya. All rights reserved.
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
