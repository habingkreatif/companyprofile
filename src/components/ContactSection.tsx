"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ArrowRight, 
  Copy, 
  CheckCircle2,
  ExternalLink,
  Building2,
  Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="hubungikami" className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Contact Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm w-fit mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Open for Projects</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-[#101010] mb-6 leading-tight tracking-tight">
              Start Your <br/>
              <span className="text-[#B61F2B]">Transformation.</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
              Konsultasikan visi konstruksi Anda bersama kami. Kami siap memberikan solusi teknis terbaik yang efisien dan presisi.
            </p>

            <div className="space-y-6">
              {/* WhatsApp Button (Highlight) */}
              <motion.a
                href="https://wa.me/6285326566522"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-between p-6 bg-[#25D366] rounded-2xl shadow-xl transition-all border border-[#25D366] cursor-pointer overflow-hidden"
              >
                 <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                 <div className="flex items-center gap-5">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                       <MessageCircle className="w-8 h-8 text-[#25D366]" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white leading-none mb-1.5">Chat WhatsApp</h3>
                       <p className="text-white/90 text-sm font-medium">Respon Cepat (Online)</p>
                    </div>
                 </div>
                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white" />
                 </div>
              </motion.a>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email Card */}
                <div className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-[#B61F2B]/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-[#B61F2B]/5 transition-colors">
                       <Mail className="w-6 h-6 text-indigo-600 group-hover:text-[#B61F2B]" />
                    </div>
                    <button 
                      onClick={() => handleCopy("habingkreatif@gmail.com", "email")}
                      className="text-slate-300 hover:text-[#B61F2B] transition-colors"
                    >
                      <AnimatePresence mode="wait">
                         {copied === "email" ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                      </AnimatePresence>
                    </button>
                  </div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Inquiry</h4>
                  <p className="text-slate-900 font-bold truncate text-sm">habingkreatif@gmail.com</p>
                </div>

                {/* Phone Card */}
                <div className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-[#B61F2B]/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-[#B61F2B]/5 transition-colors">
                        <Phone className="w-6 h-6 text-orange-600 group-hover:text-[#B61F2B]" />
                     </div>
                     <button 
                        onClick={() => handleCopy("085326566522", "phone")}
                        className="text-slate-300 hover:text-[#B61F2B] transition-colors"
                     >
                       <AnimatePresence mode="wait">
                         {copied === "phone" ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                       </AnimatePresence>
                     </button>
                  </div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Center</h4>
                  <p className="text-slate-900 font-bold text-sm">0853 2656 6522</p>
                </div>
              </div>

               {/* Office Hours */}
               <div className="flex items-center gap-3 text-slate-400 text-sm font-medium mt-4 bg-white/50 p-3 rounded-lg w-fit border border-slate-100">
                  <Clock className="w-4 h-4 text-[#C9A74A]" />
                  <span>Senin - Sabtu, 08:00 - 17:00 WIB</span>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Integrated Map */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex-1 min-h-[500px] relative"
          >
             {/* Map Container */}
             <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3395765194737!2d110.3211642!3d-7.9638151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b01005f4dbf85%3A0xa13691bc2bf342d1!2sHABS%20KONSTRUKSI%20KARYA!5e0!3m2!1sen!2sid!4v1764558686848!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[2rem] w-full h-full min-h-[500px] bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700"
                  title="Lokasi Kantor"
                />

                {/* Floating Location Card - Minimalist Light */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white rounded-2xl shadow-[0_20px_40px_-5px_arxiv(0,0,0,0.1)] border border-slate-100 z-20 flex items-center justify-between gap-4">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#101010] flex items-center justify-center text-white shrink-0 shadow-lg">
                         <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900 leading-tight">Kantor Pusat</h4>
                         <p className="text-xs text-slate-500 line-clamp-1 font-medium">Jl. Parangtritis KM 20, Bantul, DIY</p>
                      </div>
                   </div>
                   <a 
                     href="https://maps.google.com/?q=Jl.+Parangtritis+KM+20+Gedangan,+Panjangrejo,+Pundong,+Bantul"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-600 border border-slate-200 transition-colors"
                   >
                     <ExternalLink className="w-5 h-5" />
                   </a>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
