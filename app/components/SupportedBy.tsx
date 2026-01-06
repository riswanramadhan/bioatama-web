"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function SupportedBy() {
  const { t } = useLanguage();

  const partners = [
    { name: "Dekat Lokal", src: "/images/partners/dekat-lokal.png" },
    { name: "Rumah BUMN Makassar", src: "/images/partners/rumah-bumn.png" },
    { name: "Bank BRI", src: "/images/partners/bank-bri.png" },
  ];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        
        <div data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            {t.collaboration.title}
          </h3>
          <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-14">
            {t.collaboration.desc}
          </p>
        </div>

        {/* LOGO SECTION - UKURAN JUMBO */}
        <div 
          className="flex flex-wrap justify-center items-center gap-10 md:gap-20"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {partners.map((partner, index) => (
            <div 
              key={index} 
              // UPDATE: w-52 (Mobile) & w-80 (Desktop) -> Sangat Besar
              // h-28 agar logo punya ruang vertikal yang cukup
              className="relative w-52 md:w-80 h-28 flex items-center justify-center grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image 
                src={partner.src} 
                alt={partner.name} 
                fill 
                className="object-contain" // Gambar akan mengisi penuh kotak w-80 tanpa terpotong
                sizes="(max-width: 768px) 200px, 320px"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}