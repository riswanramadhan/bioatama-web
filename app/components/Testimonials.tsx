"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const testimonialImages = [
  "/images/testi/testi1.jpg",
  "/images/testi/testi2.jpg",
  "/images/testi/testi3.jpg",
  "/images/testi/testi4.jpg",
  "/images/testi/testi5.jpg",
  "/images/testi/testi6.jpg",
  "/images/testi/testi7.jpg",
  "/images/testi/testi8.jpg",
  "/images/testi/testi9.jpg",
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            {t.testimonials.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* === GRID TESTIMONI TEKS (3 ORANG) === */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {t.testimonials.items.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Quote className="absolute top-6 right-6 text-purple-100 w-12 h-12" />

              {/* Rating */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === GRID IMAGE TESTIMONI (TIDAK DIUBAH) === */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {testimonialImages.map((src, index) => (
            <div
              key={index}
              className="mx-auto w-full max-w-xs rounded-2xl bg-white p-3 shadow-lg hover:scale-[1.02] transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="flex items-center justify-center h-[420px] rounded-xl bg-gradient-to-b from-gray-50 via-white to-gray-50 shadow-inner">
                <Image
                  src={src}
                  alt={`Testimoni ${index + 1}`}
                  width={600}
                  height={800}
                  className="max-h-full w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
