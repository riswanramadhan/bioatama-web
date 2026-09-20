"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SupportedBy() {
  const { t, language } = useLanguage();

  const partners = [
    { name: "DekatLokal", src: "/images/partners/dekat-lokal.png", href: "https://dekatlokal.com/" },
    { name: "Rumah BUMN Makassar", src: "/images/partners/rumah-bumn.png" },
    { name: "Bank BRI", src: "/images/partners/bank-bri.png" },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#fbfafc] border-y border-purple-50">
      <div className="container mx-auto px-4 text-center">
        
        <div data-aos="fade-up">
          <span className="eyebrow justify-center mb-3">{language === "en" ? "Collaboration" : "Kolaborasi"}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-.035em] text-gray-900 mb-4">
            {t.collaboration.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-8">
            {t.collaboration.desc}
          </p>
        </div>

        {/* LOGO SECTION - UKURAN JUMBO */}
        <div 
          className="flex flex-wrap justify-center items-center gap-3 md:gap-5 max-w-5xl mx-auto"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative w-[calc(50%-0.5rem)] sm:w-52 md:w-60 h-24 md:h-28 flex items-center justify-center rounded-2xl border border-gray-100 bg-white px-5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:border-purple-200 hover:shadow-lg transition-all duration-500"
            >
              {partner.href ? (
                <Link href={partner.href} target="_blank" rel="noopener noreferrer" aria-label="Kunjungi website DekatLokal" className="relative block h-full w-full">
                  <Image src={partner.src} alt="Logo DekatLokal partner digital BIO ATAMA" fill className="object-contain" sizes="(max-width: 768px) 200px, 320px" />
                </Link>
              ) : (
                <Image src={partner.src} alt={`Logo ${partner.name} pendukung BIO ATAMA`} fill className="object-contain" sizes="(max-width: 768px) 200px, 320px" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
