import React from "react";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      id="layanan"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F5F5] to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#101010] mb-4">
            Layanan Kami
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full mb-4"></div>
          <p className="text-[#3A3A3A] max-w-2xl mx-auto text-lg">
            Berbagai layanan konstruksi profesional untuk kebutuhan proyek Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E2E2E2] hover:border-[#B61F2B] hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#B61F2B]/10 to-[#C9A74A]/10 rounded-bl-full"></div>
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#101010] mb-3 group-hover:text-[#B61F2B] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#3A3A3A] text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
