"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function GoogleMaps() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
          <span className="eyebrow justify-center mb-3">
            {t.googlemaps.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-.04em] text-gray-900">
            {t.googlemaps.title}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {t.googlemaps.subtitle}
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full rounded-[1.75rem] overflow-hidden shadow-[0_18px_50px_rgba(43,30,64,.12)] border-[6px] border-[#faf8fd]" data-aos="fade-up">
          <iframe
            title="Lokasi BIO ATAMA di Moncongloe Lappara, Kabupaten Maros"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.592790719481!2d119.539648!3d-5.169015100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee5187416a8cb%3A0x7795fbf6357e3652!2sBIO%20ATAMA!5e0!3m2!1sid!2sid!4v1768741236295!5m2!1sid!2sid"
            width="100%"
            height="460"
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
