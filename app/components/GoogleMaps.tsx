"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function GoogleMaps() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Lokasi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Kunjungi Kami
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Temukan lokasi kami di peta dan kunjungi fasilitas kami
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.592790719481!2d119.539648!3d-5.169015100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee5187416a8cb%3A0x7795fbf6357e3652!2sBIO%20ATAMA!5e0!3m2!1sid!2sid!4v1768741236295!5m2!1sid!2sid"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
