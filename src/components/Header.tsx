"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav
      className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50 
  border-b border-[#E0E0E0] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-[50px] h-[50px]">
              <div className="relative w-full h-full p-1.5 rounded-full overflow-hidden">
                <Image
                  src="/55.png"
                  alt="Logo Habs Konstruksi Karya"
                  width={60}
                  height={60}
                  className="object-cover mt-0.5 rounded-full transition-transform duration-300"
                />
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-[#B61F2B]" />
            </div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:opacity-90 transition-all duration-300">
              <span className="text-[#101010]">Habs</span>{" "}
              <span className="text-[#B61F2B]">Konstruksi Karya</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["Tentang", "Layanan", "Kontak"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#3A3A3A] hover:text-[#B61F2B] transition-all duration-300 font-medium relative
            before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 
            hover:before:w-full before:bg-[#B61F2B] before:transition-all"
              >
                {item}
              </a>
            ))}

            <a
              href="https://wa.me/6285326566522"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#B61F2B] text-white rounded-lg font-semibold hover:bg-[#8E1A22] 
          transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Hubungi
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
