"use client"; // WAJIB: Agar bisa pakai hook bahasa

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Import context
import {
  greenProductWhatsAppUrl,
  purpleProductWhatsAppUrl,
} from "@/utils/whatsapp";

export default function AboutAndProducts() {
  const { t, language } = useLanguage(); // Ambil data terjemahan

  return (
    <>
      {/* SECTION TENTANG */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl" data-aos="fade-up">
          <span className="eyebrow justify-center mb-4">{language === "en" ? "About us" : "Tentang kami"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-.04em] text-gray-900 mb-6">{t.about.title}</h2>
          <p className="text-base md:text-lg text-gray-600 leading-8 md:leading-loose">
            <strong className="text-primary">BIO ATAMA</strong> {t.about.desc_part1}{" "}
            <span className="text-red-500 font-semibold">{t.about.desc_part2}</span>{" "}
            {t.about.desc_part3}
          </p>
        </div>
      </section>

      {/* SECTION KHASIAT */}
<section className="section-shell py-20 md:py-28 bg-[#f5fbf8] overflow-hidden">
  <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-natural-light/60 blur-3xl -z-0" />
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div data-aos="fade-right" className="relative z-10">
        <span className="eyebrow text-natural-dark mb-4">{language === "en" ? "Natural goodness" : "Kebaikan alami"}</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-.04em] mb-8 text-gray-900">
          {t.about.benefits_title}
        </h2>
        <div className="grid gap-3">
          {/* Mapping benefits dari file translation */}
          {t.about.benefits.map((item, i) => (
            <div
              key={i}
              className="lift-card flex items-start gap-3.5 p-4 bg-white/90 rounded-2xl shadow-[0_10px_25px_rgba(20,83,45,.05)] border border-white hover:border-natural/30 hover:shadow-[0_16px_32px_rgba(20,83,45,.1)]"
            >
              <span className="mt-0.5 rounded-full bg-natural-light p-1"><CheckCircle2 size={16} className="text-natural-dark shrink-0" /></span>
              <span className="font-semibold text-gray-700 text-[15px]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6" data-aos="zoom-in">
        <div className="relative h-72 md:h-[26rem] rounded-[1.5rem] overflow-hidden shadow-xl mt-8 md:mt-12">
          <Image
            src="/images/product-section.jpg"
            alt="Detail produk BIO ATAMA herbal alami berbahan karang laut"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>

        <div className="relative h-72 md:h-[26rem] rounded-[1.5rem] overflow-hidden shadow-xl mb-8 md:mb-12">
          <Image
            src="/images/tambahan-foto-manfaat.jpg"
            alt="Informasi produk herbal karang laut BIO ATAMA"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* SECTION PRODUK */}
      <section id="products" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <span className="eyebrow justify-center mb-4">{language === "en" ? "Our products" : "Pilihan produk"}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-.04em] text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t.products.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Ekstra (Ungu) */}
            <div id="produk-ekstra-ungu" className="lift-card group bg-[#fdfcff] rounded-[1.75rem] p-4 md:p-5 shadow-[0_18px_45px_rgba(77,50,119,.1)] border border-purple-100 hover:border-primary/50 flex flex-col" data-aos="fade-up" data-aos-delay="0">
              <div className="relative h-64 md:h-72 w-full mb-6 rounded-[1.25rem] overflow-hidden bg-purple-50">
                <Image src="/images/product-purple.jpg" alt="BIO ATAMA Kemasan Ekstra Ungu" fill className="object-cover" sizes="(max-width: 767px) 100vw, 50vw" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary text-[11px] font-extrabold tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                    {t.products.purple.badge}
                </div>
              </div>
              <div className="px-2"><h3 className="text-2xl font-extrabold tracking-[-.035em] text-gray-900">{t.products.purple.name}</h3>
              <p className="text-gray-500 text-[15px] mt-2 mb-6 leading-relaxed">{t.products.purple.desc}</p>
              <div className="mt-auto">
                <p className="text-3xl font-extrabold tracking-[-.04em] text-primary mb-4">
                    {t.products.purple.price} <span className="text-sm font-normal text-gray-400">{t.products.purple.unit}</span>
                </p>
                <Link href={purpleProductWhatsAppUrl} aria-label="Pesan BIO ATAMA Kemasan Ekstra Ungu melalui WhatsApp" className="block w-full py-3.5 bg-primary text-white text-center font-bold rounded-xl hover:bg-primary-hover transition-colors group-hover:shadow-lg group-hover:shadow-primary/20">
                  <span className="inline-flex items-center gap-1.5">{t.products.cta}<ArrowUpRight size={17}/></span>
                </Link>
              </div></div>
            </div>

            {/* Card 2: Ekonomis (Hijau) */}
            <div id="produk-ekonomis-hijau" className="lift-card group bg-[#fbfefc] rounded-[1.75rem] p-4 md:p-5 shadow-[0_18px_45px_rgba(20,83,45,.1)] border border-emerald-100 hover:border-natural/60 transition-colors flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-64 md:h-72 w-full mb-6 rounded-[1.25rem] overflow-hidden bg-green-50">
                <Image src="/images/product-green.jpg" alt="BIO ATAMA Kemasan Ekonomis Hijau" fill className="object-cover" sizes="(max-width: 767px) 100vw, 50vw" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-natural-dark text-[11px] font-extrabold tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                    {t.products.green.badge}
                </div>
              </div>
              <div className="px-2"><h3 className="text-2xl font-extrabold tracking-[-.035em] text-gray-900">{t.products.green.name}</h3>
              <p className="text-gray-500 text-[15px] mt-2 mb-6 leading-relaxed">{t.products.green.desc}</p>
              <div className="mt-auto">
                <p className="text-3xl font-extrabold tracking-[-.04em] text-natural mb-4">
                    {t.products.green.price} <span className="text-sm font-normal text-gray-400">{t.products.green.unit}</span>
                </p>
                <Link href={greenProductWhatsAppUrl} aria-label="Pesan BIO ATAMA Kemasan Ekonomis Hijau melalui WhatsApp" className="block w-full py-3.5 bg-natural text-white text-center font-bold rounded-xl hover:bg-natural-dark transition-colors group-hover:shadow-lg group-hover:shadow-natural/20">
                  <span className="inline-flex items-center gap-1.5">{t.products.cta}<ArrowUpRight size={17}/></span>
                </Link>
              </div></div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
