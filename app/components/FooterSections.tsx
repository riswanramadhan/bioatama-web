"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterSection() {
  const { t, language } = useLanguage();

  const faqs = language === "en" ? [
    { q: "Is BIO ATAMA safe?", a: "Very safe. This product is 100% natural from sea coral without chemical preservatives, and has P-IRT license and Halal Certificate." },
    { q: "How to use it?", a: "Complete usage instructions are included in the packaging, or you can consult directly via our Admin WhatsApp." },
    { q: "Can it be shipped throughout Indonesia?", a: "Yes, we serve shipping to all regions of Indonesia using trusted expeditions." },
  ] : [
    { q: "Apakah BIO ATAMA aman?", a: "Sangat aman. Produk ini 100% alami dari tumbuhan karang laut tanpa bahan kimia pengawet, serta sudah memiliki izin P-IRT dan Sertifikat Halal." },
    { q: "Bagaimana cara penggunaannya?", a: "Panduan lengkap penggunaan akan disertakan dalam kemasan atau Anda bisa berkonsultasi langsung via WhatsApp admin kami." },
    { q: "Apakah bisa dikirim ke seluruh Indonesia?", a: "Ya, kami melayani pengiriman ke seluruh wilayah Indonesia menggunakan ekspedisi terpercaya." },
  ];

  const partners = [
    { name: "Dekat Lokal", src: "/images/partners/dekat-lokal.png" },
    { name: "Rumah BUMN Makassar", src: "/images/partners/rumah-bumn.png" },
    { name: "Bank BRI", src: "/images/partners/bank-bri.png" },
  ];

  return (
    <footer>
      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
            {t.footer.faq_title}
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm p-4 [&_summary::-webkit-details-marker]:hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold">
                  <h2>{item.q}</h2>
                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-primary to-natural text-white text-center">
        <div className="container mx-auto px-4" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.footer.cta_title}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">{t.footer.cta_desc}</p>
          <a href="https://wa.me/6285342867522" className="inline-block bg-white text-primary font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {t.footer.cta_button}
          </a>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div id="footer" className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div data-aos="fade-up" data-aos-delay="0">
            <h3 className="text-white text-xl font-bold mb-4">BIO ATAMA</h3>
            <p className="text-sm leading-relaxed mb-4">
               {language === 'en' 
                 ? "Natural herbal solution from the deep sea for the health and harmony of Indonesian women." 
                 : "Solusi herbal alami dari dasar laut untuk kesehatan dan keharmonisan wanita Indonesia."}
            </p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2">✅ <span>Depkes P-IRT:<br/>1107371021161-29</span></li>
              <li className="flex gap-2">✅ <span>Halal ID:<br/>73110008415030723</span></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <p className="text-sm mb-2"><strong>{t.footer.address}:</strong> Perumahan Bina Sarana Residence 2, Blok DO No.6, Moncongloe Lappara, Kabupaten Maros, Sulawesi Selatan 90555</p>
            <p className="text-sm mb-2"><strong>{t.footer.phone}:</strong> 0853-4286-7522</p>
            <p className="text-sm"><strong>{t.footer.hours}:</strong> {t.footer.hours_val}</p>
          </div>

          {/* Kolom Partner */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-4 items-start">
             <h4 className="text-white font-semibold mb-2">{t.footer.partner}</h4>
             
             {/* UPDATE PENTING DI SINI:
                - flex-row: Horizontal di Mobile
                - md:flex-col: Vertikal di Desktop
                - flex-wrap: Agar kalau layar HP kecil, logo turun ke bawah (tidak gepeng)
             */}
             <div className="flex flex-row md:flex-col flex-wrap gap-6 md:gap-8 opacity-80 grayscale hover:grayscale-0 transition-all w-full">
                {partners.map((p, i) => (
                  <div 
                    key={i} 
                    // UKURAN DIPERBESAR:
                    // Mobile: w-36 (144px) - Cukup besar untuk 2 kolom di HP
                    // Desktop: w-48 (192px) - Besar & Jelas
                    className="relative w-36 md:w-48 h-16"
                  >
                    <Image 
                      src={p.src} 
                      alt={p.name} 
                      fill
                      className="object-contain object-left" // object-left agar rapi rata kiri
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                ))}
             </div>
          </div>

        </div>
        
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} BIO ATAMA. All rights reserved | {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}