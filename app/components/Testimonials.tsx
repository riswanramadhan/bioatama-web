"use client"; // WAJIB: Agar bisa pakai hook bahasa

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Import context

export default function Testimonials() {
  const { t } = useLanguage(); // Ambil data terjemahan

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
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

        {/* Grid Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mapping data review dari translation file */}
          {t.testimonials.items.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay otomatis: 0, 100, 200 dst
            >
              <Quote className="absolute top-6 right-6 text-purple-100 w-12 h-12" />
              
              {/* Rating Bintang (Static 5 Star) */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Isi Review */}
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10 italic">
                "{review.text}"
              </p>

              {/* Profil User */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}