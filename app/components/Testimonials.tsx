"use client";

import Image from "next/image";
import { Star, Quote, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="testimonials"
      className="section-shell py-20 md:py-28 bg-[#f9f7fc] overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <span className="eyebrow justify-center mb-3">
            {t.testimonials.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-.04em] text-gray-900">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* === GRID TESTIMONI TEKS (3 ORANG) === */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-7 mb-16 md:mb-20">
          {t.testimonials.items.map((review, index) => (
            <div
              key={index}
              className="lift-card bg-white/90 p-7 rounded-[1.5rem] shadow-[0_12px_35px_rgba(68,45,104,.08)] border border-white relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Quote className="absolute top-6 right-6 text-purple-100 w-10 h-10" />

              {/* Rating */}
              <div className="flex gap-1 mb-5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* User */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 ring-4 ring-purple-50 flex items-center justify-center text-primary font-bold">
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

        {/* === GRID IMAGE TESTIMONI === */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {testimonialImages.map((src, index) => (
            <div
              key={index}
              className="lift-card group w-full rounded-[1.25rem] bg-white p-2 shadow-[0_10px_24px_rgba(68,45,104,.10)] hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(src)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedImage(src);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Buka gambar testimoni pelanggan BIO ATAMA ${index + 1}`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="flex items-center justify-center w-full rounded-[.9rem] bg-gradient-to-b from-gray-50 via-white to-gray-50 shadow-inner overflow-hidden aspect-[3/4]">
                <Image
                  src={src}
                  alt={`Testimoni pelanggan BIO ATAMA ${index + 1}`}
                  width={600}
                  height={800}
                  sizes="(max-width: 767px) 50vw, 33vw"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* === MODAL IMAGE VIEWER === */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-gray-950/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative bg-white rounded-[1.5rem] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close image"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Image Container - Adjusts to image size */}
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt={`Testimoni pelanggan BIO ATAMA ${testimonialImages.indexOf(selectedImage) + 1}`}
                  width={800}
                  height={1000}
                  sizes="90vw"
                  className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
            </div>
      
    </section>
  );
}
