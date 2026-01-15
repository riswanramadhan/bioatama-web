"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterSection() {
  const { t, language } = useLanguage();

  const faqs =
    language === "en"
      ? [
          {
            q: "Is BIO ATAMA safe?",
            a: "Very safe. BIO ATAMA is a 100% natural herbal product made from sea coral plants, without chemical preservatives. It is officially licensed with P-IRT and certified Halal.",
          },
          {
            q: "How do I use BIO ATAMA?",
            a: "Complete usage instructions are included inside the packaging. You can also consult directly with our WhatsApp admin for personal guidance.",
          },
          {
            q: "Can BIO ATAMA be shipped throughout Indonesia?",
            a: "Yes. We provide nationwide shipping across Indonesia using trusted and reliable courier services.",
          },
          {
            q: "What is BIO ATAMA and what is it made from?",
            a: "BIO ATAMA is a natural herbal product made from sea coral plants harvested from the deepest waters around Java and Madura. It is hand-picked by Madurese fishermen and sun-dried naturally without preservatives or chemical additives to maintain its purity.",
          },
          {
            q: "Is BIO ATAMA safe and legally certified?",
            a: "Absolutely safe. BIO ATAMA is Halal certified by MUI (ID 73110008415030723) and has an official P-IRT distribution license (1107371021161-29). It is non-addictive and safe for long-term consumption because it is 100% herbal.",
          },
          {
            q: "What nutrients does BIO ATAMA contain?",
            a: "BIO ATAMA contains high marine minerals such as Zinc, Magnesium, and Calcium, along with natural antioxidants, amino acids, collagen, and natural phytoestrogens that support cell regeneration, bone health, and hormonal balance.",
          },
          {
            q: "What are the main benefits of BIO ATAMA for women?",
            a: "BIO ATAMA primarily supports reproductive health from within, including relieving menstrual pain, vaginal discharge, and odor. It helps improve fertility (pregnancy program), tightens feminine areas and breasts, delays early menopause, and balances hormones naturally.",
          },
          {
            q: "Can men consume BIO ATAMA?",
            a: "Yes, absolutely. For men, BIO ATAMA helps improve stamina, enhance sperm quality, boost libido, and support overall health such as relieving gastritis, high cholesterol, gout, and muscle or joint pain.",
          },
          {
            q: "Can BIO ATAMA help with other health conditions?",
            a: "Yes. BIO ATAMA is effective in supporting recovery from acid reflux (GERD), balancing cholesterol levels, helping urinary tract infections (UTI), strengthening bones and teeth, and improving sleep quality for insomnia sufferers.",
          },
          {
            q: "What is the recommended dosage of BIO ATAMA?",
            a: "General dosage: 3–5 tablets per serving. Time: Flexible, morning, afternoon, or night (recommended before bedtime). Method: Dissolve in warm water. For married couples: Consume 2 hours before intimacy to maximize stamina and desire.",
          },
          {
            q: "How should I consume BIO ATAMA if I have stomach acid or gastritis?",
            a: "For people with sensitive stomachs or acid reflux, it is recommended to consume BIO ATAMA after meals using warm water to reduce stomach discomfort.",
          },
          {
            q: "What is the dosage for serious conditions such as cysts, myoma, or fertility programs?",
            a: "A higher dosage is recommended, such as 5 tablets per serving or twice daily (morning and night) with 3 tablets each time for more optimal results.",
          },
          {
            q: "Can BIO ATAMA be consumed during menstruation?",
            a: "Highly recommended. Menstruation is actually the best time for BIO ATAMA to help cleanse the uterus (detox process). Heavier flow or blood clots are normal and indicate the cleansing process.",
          },
          {
            q: "Is BIO ATAMA safe for pregnant and breastfeeding mothers?",
            a: "Breastfeeding mothers: Highly beneficial for improving milk flow and quality (thicker milk) and helping firm the breasts. Pregnant mothers: Safe due to its AA and DHA content that supports fetal development. Start with a low dose (2 tablets). However, stop consumption during the final trimester before delivery.",
          },
          {
            q: "Is BIO ATAMA safe for children and the elderly?",
            a: "Yes. BIO ATAMA is safe for all ages, from children who can consume soft foods to the elderly. For seniors, it helps strengthen bones and teeth and prevents fatigue.",
          },
        ]
      : [
          {
            q: "Apakah BIO ATAMA aman?",
            a: "Sangat aman. Produk ini 100% alami dari tumbuhan karang laut tanpa bahan kimia pengawet, serta sudah memiliki izin P-IRT dan Sertifikat Halal.",
          },
          {
            q: "Bagaimana cara penggunaannya?",
            a: "Panduan lengkap penggunaan akan disertakan dalam kemasan atau Anda bisa berkonsultasi langsung via WhatsApp admin kami.",
          },
          {
            q: "Apakah bisa dikirim ke seluruh Indonesia?",
            a: "Ya, kami melayani pengiriman ke seluruh wilayah Indonesia menggunakan ekspedisi terpercaya.",
          },
          {
            q: "Apa itu Bio Atama dan terbuat dari apa?",
            a: "Bio Atama adalah herbal alami berbahan dasar tumbuhan karang laut dari dasar laut terdalam di perairan Jawa dan Madura. Dipetik oleh nelayan Madura dan dikeringkan secara tradisional menggunakan sinar matahari langsung tanpa bahan pengawet atau kimia tambahan, sehingga kemurniannya tetap terjaga.",
          },
          {
            q: "Apakah Bio Atama aman dan legal?",
            a: "Sangat aman. Bio Atama telah bersertifikat Halal MUI (ID 73110008415030723) dan memiliki Izin Edar Depkes P-IRT (1107371021161-29). Produk ini tidak menyebabkan ketergantungan dan aman dikonsumsi jangka panjang karena 100% herbal alami.",
          },
          {
            q: "Kandungan apa saja yang ada di dalamnya?",
            a: "Bio Atama mengandung mineral laut tinggi (Zinc, Magnesium, Kalsium), Antioksidan alami, Asam Amino, Kolagen, dan Phytoestrogen alami yang baik untuk regenerasi sel, tulang, dan keseimbangan hormon.",
          },
          {
            q: "Apa manfaat utama Bio Atama untuk wanita?",
            a: "Fokus utamanya adalah merawat sistem reproduksi dari dalam, seperti: Mengatasi nyeri haid, keputihan, dan bau tidak sedap. Menyuburkan kandungan (Promil). Merapatkan dan mengencangkan area kewanitaan serta payudara. Menunda menopause dini dan menyeimbangkan hormon.",
          },
          {
            q: "Apakah pria boleh mengonsumsi Bio Atama?",
            a: "Boleh dan sangat bagus! Untuk pria, Bio Atama bermanfaat meningkatkan stamina, memperbaiki kualitas sperma, membangkitkan libido, serta mengatasi keluhan kesehatan seperti maag, kolesterol, asam urat, dan nyeri pegal-pegal.",
          },
          {
            q: "Apakah bisa untuk mengobati penyakit lain selain masalah reproduksi?",
            a: "Bisa. Bio Atama ampuh membantu penyembuhan asam lambung (Maag/GERD), menormalkan kolesterol, menyembuhkan Infeksi Saluran Kemih (ISK), memperkuat tulang & gigi, hingga mengatasi insomnia (susah tidur).",
          },
          {
            q: "Bagaimana aturan minum Bio Atama?",
            a: "Dosis Umum: 3–5 keping sekali minum. Waktu: Bebas, bisa pagi, siang, atau malam (disarankan menjelang tidur). Cara: Seduh dengan air hangat. Untuk Pasutri: Minum 2 jam sebelum berhubungan agar stamina dan hasrat meningkat maksimal.",
          },
          {
            q: "Saya punya riwayat Maag/Asam Lambung, bagaimana cara minumnya?",
            a: "Untuk penderita maag atau lambung sensitif, disarankan meminumnya setelah makan dengan menggunakan air hangat untuk mengurangi nyeri lambung.",
          },
          {
            q: "Bagaimana dosis untuk pengobatan berat (Kista/Miom/Promil)?",
            a: "Disarankan dosis lebih tinggi, misalnya 5 keping sekali minum atau 2 kali sehari (pagi dan malam) sebanyak 3 keping agar hasilnya lebih maksimal.",
          },
          {
            q: "Apakah boleh diminum saat sedang Haid?",
            a: "Sangat dianjurkan. Justru saat haid adalah waktu terbaik bagi Bio Atama untuk bekerja membersihkan rahim (detoks). Jika darah keluar lebih banyak atau ada gumpalan, itu normal karena proses pembersihan kotoran dalam rahim.",
          },
          {
            q: "Apakah aman untuk Ibu Hamil dan Menyusui?",
            a: "Ibu Menyusui (Busui): Sangat bagus untuk memperlancar dan meningkatkan kualitas ASI (lebih kental), serta mengencangkan payudara kembali. Ibu Hamil: Aman karena mengandung AA dan DHA yang baik untuk janin. Mulailah dengan dosis kecil (2 keping). Namun, hentikan sementara jika sudah memasuki semester akhir (jelang melahirkan).",
          },
          {
            q: "Apakah anak-anak dan lansia boleh minum?",
            a: "Boleh. Bio Atama aman untuk semua usia, mulai dari anak yang sudah bisa makan makanan lunak hingga lansia. Bagi lansia/jompo, herbal ini membantu menguatkan tulang, gigi, dan mencegah tubuh cepat letih.",
          },
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
          <h2 className="text-3xl font-bold text-center mb-10">
            {t.footer.faq_title}
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl shadow-sm p-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold">
                  <h2>{item.q}</h2>
                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-primary to-natural text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.footer.cta_title}
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t.footer.cta_desc}
          </p>
          <a
            href="https://wa.me/6285342867522"
            className="inline-block bg-white text-primary font-bold text-lg px-8 py-4 rounded-full"
          >
            {t.footer.cta_button}
          </a>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div
        id="footer"
        className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div data-aos="fade-up" data-aos-delay="0">
            <h3 className="text-white text-xl font-bold mb-4">BIO ATAMA</h3>
            <p className="text-sm leading-relaxed mb-4">
              {language === "en"
                ? "Natural herbal solution from the deep sea for the health and harmony of Indonesian women."
                : "Solusi herbal alami dari dasar laut untuk kesehatan dan keharmonisan wanita Indonesia."}
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white font-semibold mb-4">
              {t.footer.legal}
            </h4>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2">
                ✅ <span>Depkes P-IRT:<br />1107371021161-29</span>
              </li>
              <li className="flex gap-2">
                ✅ <span>Halal ID:<br />73110008415030723</span>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold mb-4">
              {t.footer.contact}
            </h4>
            <p className="text-sm mb-2">
              <strong>{t.footer.address}:</strong> Perumahan Bina Sarana
              Residence 2, Blok DO No.6, Moncongloe Lappara, Kabupaten Maros,
              Sulawesi Selatan 90555
            </p>
            <p className="text-sm mb-2">
              <strong>{t.footer.phone}:</strong> 0853-4286-7522
            </p>
            <p className="text-sm">
              <strong>{t.footer.hours}:</strong> {t.footer.hours_val}
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col gap-4 items-start"
          >
            <h4 className="text-white font-semibold mb-2">
              {t.footer.partner}
            </h4>
            <div className="flex flex-row md:flex-col flex-wrap gap-6 md:gap-8 opacity-80 grayscale hover:grayscale-0 transition-all w-full">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="relative w-36 md:w-48 h-16"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} BIO ATAMA. All rights reserved |{" "}
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
