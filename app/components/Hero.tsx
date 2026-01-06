"use client"; // WAJIB: Karena kita pakai hook useLanguage

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // Import context bahasa

export default function Hero() {
  const { t } = useLanguage(); // Ambil data terjemahan

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <div data-aos="fade-up" data-aos-delay="0">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-primary font-bold text-xs rounded-full uppercase tracking-wider">
              {t.hero.tag}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight" data-aos="fade-up" data-aos-delay="100">
            {t.hero.headline_1} <span className="text-primary">{t.hero.headline_2}</span> & <span className="text-natural">{t.hero.headline_3}</span> {t.hero.headline_4}
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {t.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up" data-aos-delay="300">
            <Link href="#products" className="px-8 py-4 bg-primary text-white rounded-button font-bold text-center hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all">
              {t.hero.cta_primary}
            </Link>
            <Link href="#about" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-button font-bold text-center hover:bg-gray-50 transition-all">
              {t.hero.cta_secondary}
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 relative" data-aos="fade-left" data-aos-duration="1000">
          <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image 
              src="/images/hero-product.jpg" 
              alt="Produk Bio Atama" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-200/30 blur-3xl rounded-full -z-10" />
        </div>

      </div>
    </section>
  );
}