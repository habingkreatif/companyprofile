import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="tentangkami"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#101010] mb-4">
            Tentang Kami
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#B61F2B] to-[#C9A74A] mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-[#3A3A3A] leading-relaxed">
              Di{" "}
              <strong className="text-[#B61F2B] text-xl">
                HABS Konstruksi Karya
              </strong>
              , kami percaya bahwa setiap bangunan bukan hanya struktur,
              melainkan perwujudan visi, nilai, dan masa depan. Itulah alasan
              kami hadir sebagai mitra konstruksi terpercaya yang menghadirkan
              solusi menyeluruh dengan standar kualitas terbaik.
            </p>
            <p className="text-lg text-[#3A3A3A] leading-relaxed">
              Sebagai brand yang berfokus pada inovasi, ketepatan, dan
              keunggulan, Habs Konstruksi Karya menetapkan standar baru dalam
              dunia konstruksi. Kami menggabungkan pengalaman lapangan,
              teknologi, serta pendekatan manajemen modern untuk memastikan
              setiap detail dikerjakan dengan presisi.
            </p>
            <p className="text-lg text-[#3A3A3A] leading-relaxed">
              Dengan tim yang berdedikasi dan berpengalaman, kami tidak
              sekadar membangun, kami menciptakan nilai, mulai dari
              perencanaan visioner, eksekusi konstruksi yang rapi dan aman,
              hingga manajemen proyek yang terukur dan profesional.
            </p>
            <p className="text-lg text-[#3A3A3A] leading-relaxed">
              Komitmen kami sederhana: Mewujudkan karya konstruksi yang kokoh,
              estetis, dan tahan lama, sekaligus membangun kepercayaan yang
              langgeng dengan setiap klien.
            </p>
          </div>

          {/* Image / Illustration */}
          <div className="relative animate-fade-in-right">
            <Image
              src="/background5.png"
              alt="Tentang Kami"
              width={600}
              height={400}
              className=" h-auto rounded-xl shadow-xl object-cover"
            />
            {/* Optional overlay icon atau dekoratif */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#B61F2B] to-[#C9A74A] rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#B61F2B] rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A74A] rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
