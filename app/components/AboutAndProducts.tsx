"use client"; // WAJIB: Agar bisa pakai hook bahasa

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Import context

export default function AboutAndProducts() {
  const { t } = useLanguage(); // Ambil data terjemahan

  return (
    <>
      {/* SECTION TENTANG */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
          <p className="text-lg text-gray-600 leading-loose">
            <strong className="text-primary">BIO ATAMA</strong> {t.about.desc_part1}{" "}
            <span className="text-red-500 font-semibold">{t.about.desc_part2}</span>{" "}
            {t.about.desc_part3}
          </p>
        </div>
      </section>

      {/* SECTION KHASIAT */}
      <section className="py-16 bg-natural-light/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div data-aos="fade-right">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{t.about.benefits_title}</h3>
                <div className="grid gap-4">
                  {/* Mapping benefits dari file translation */}
                  {t.about.benefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <CheckCircle2 className="text-natural shrink-0" />
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
                <Image src="/images/product-section.jpg" alt="Detail Bio Atama" fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION PRODUK */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-gray-500">{t.products.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1: Ekstra (Ungu) */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-purple-100 hover:border-primary transition-colors flex flex-col" data-aos="fade-up" data-aos-delay="0">
              <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden bg-purple-50">
                <Image src="/images/product-purple.jpg" alt="Bio Atama Ungu" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.products.purple.badge}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t.products.purple.name}</h3>
              <p className="text-gray-500 mt-2 mb-6">{t.products.purple.desc}</p>
              <div className="mt-auto">
                <p className="text-3xl font-extrabold text-primary mb-4">
                    {t.products.purple.price} <span className="text-sm font-normal text-gray-400">{t.products.purple.unit}</span>
                </p>
                <Link href="https://wa.me/6285342867522?text=Halo%20Admin,%20saya%20mau%20order%20Bio%20Atama%20Kemasan%20Ungu" className="block w-full py-3 bg-primary text-white text-center font-bold rounded-xl hover:bg-primary-hover transition-colors">
                  {t.products.cta}
                </Link>
              </div>
            </div>

            {/* Card 2: Ekonomis (Hijau) */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:border-natural transition-colors flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden bg-green-50">
                <Image src="/images/product-green.jpg" alt="Bio Atama Hijau" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-natural text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.products.green.badge}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t.products.green.name}</h3>
              <p className="text-gray-500 mt-2 mb-6">{t.products.green.desc}</p>
              <div className="mt-auto">
                <p className="text-3xl font-extrabold text-natural mb-4">
                    {t.products.green.price} <span className="text-sm font-normal text-gray-400">{t.products.green.unit}</span>
                </p>
                <Link href="https://wa.me/6285342867522?text=Halo%20Admin,%20saya%20mau%20order%20Bio%20Atama%20Kemasan%20Ekonomis" className="block w-full py-3 bg-natural text-white text-center font-bold rounded-xl hover:bg-natural-dark transition-colors">
                  {t.products.cta}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}