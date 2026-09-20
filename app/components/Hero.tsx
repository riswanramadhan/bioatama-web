"use client"; // WAJIB: Karena kita pakai hook useLanguage

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // Import context bahasa
import { ArrowDownRight, Leaf, ShieldCheck } from "lucide-react";

export default function Hero() {
  const { t, language } = useLanguage(); // Ambil data terjemahan

  return (
    <section id="hero" className="section-shell relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#fbfafc]">
      <div className="absolute inset-0 -z-10 soft-grid opacity-70" />
      <div className="absolute -top-40 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-purple-200/35 blur-3xl -z-10" />
      <div className="absolute bottom-[-18rem] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-emerald-100/50 blur-3xl -z-10" />
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 lg:gap-20 items-center max-w-7xl">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-7">
          <div data-aos="fade-up" data-aos-delay="0">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/70 border border-purple-100 text-primary font-extrabold text-[11px] rounded-full uppercase tracking-[.13em] shadow-sm">
              <Leaf size={14} /> {t.hero.tag}
            </span>
          </div>
          
          <h1 className="text-[2.6rem] md:text-5xl lg:text-[4.1rem] font-extrabold text-gray-900 leading-[1.08] tracking-[-.055em]" data-aos="fade-up" data-aos-delay="100">
            {t.hero.headline_1} <span className="text-primary">{t.hero.headline_2}</span> & <span className="text-natural">{t.hero.headline_3}</span> {t.hero.headline_4}
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {t.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up" data-aos-delay="300">
            <Link href="#products" className="px-7 py-3.5 bg-primary text-white rounded-button font-bold text-center hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all inline-flex justify-center items-center gap-2 group">
              {t.hero.cta_primary}<ArrowDownRight size={18} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"/>
            </Link>
            <Link href="#about" className="px-7 py-3.5 bg-white/80 text-gray-700 border border-gray-200 rounded-button font-bold text-center hover:bg-white hover:border-purple-200 transition-all">
              {t.hero.cta_secondary}
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium" data-aos="fade-up" data-aos-delay="400"><ShieldCheck size={16} className="text-natural"/> {language === "en" ? "Natural herbal for your daily wellness." : "Herbal alami untuk rutinitas sehat Anda."}</div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 relative px-3 md:px-0" data-aos="fade-left" data-aos-duration="1000">
          <div className="absolute -inset-3 rounded-[2rem] border border-white bg-white/40 -rotate-3 shadow-sm" />
          <div className="relative z-10 w-full aspect-[4/4.2] md:aspect-[4/4.5] rounded-[1.7rem] overflow-hidden shadow-[0_28px_70px_rgba(67,42,111,.22)] rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image 
              src="/images/hero-product.jpg" 
              alt="Produk BIO ATAMA herbal alami berbahan karang laut dalam kemasan ungu dan hijau"
              fill 
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-2 z-20 rounded-2xl border border-white/70 bg-white/90 backdrop-blur px-4 py-3 shadow-lg">
            <p className="text-[10px] font-bold uppercase tracking-[.14em] text-gray-400">BIO ATAMA</p><p className="text-sm font-extrabold text-gray-800">{language === "en" ? "Natural wellness, naturally." : "Kebaikan alami untuk keseharian."}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
