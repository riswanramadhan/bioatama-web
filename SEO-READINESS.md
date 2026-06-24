# Laporan SEO Readiness BIO ATAMA

Tanggal audit dan implementasi: 24 Juni 2026  
URL production: https://bioatama.dekatlokal.com/

## Ringkasan status

Codebase sudah siap dideploy untuk technical SEO, crawling, indexing, social preview, favicon eligibility, Product snippets, dan pendaftaran Google Search Console. UI, kelas CSS, layout, warna, spacing, section, serta animasi existing tidak diubah.

Pemeriksaan production sebelum perubahan menunjukkan homepage, `robots.txt`, `sitemap.xml`, dan `favicon.ico` sudah merespons HTTP 200. Perubahan di laporan ini baru akan aktif di production setelah deployment terbaru.

## Audit kondisi awal

- Canonical, robots route, sitemap route, dan verifikasi Google Search Console sudah tersedia.
- Title, description, Open Graph, dan Twitter Card memperkuat klaim kesehatan berisiko seperti promil dan kesehatan rahim.
- Open Graph dan Twitter Card belum memiliki image.
- Belum ada JSON-LD untuk WebSite, WebPage, bisnis, produk, penawaran, breadcrumb, atau FAQ aman.
- Belum ada manifest dan rangkaian icon brand yang konsisten.
- Favicon hanya 32x32 sehingga belum memenuhi ukuran 48x48 yang disarankan untuk Google Search.
- Beberapa image alt masih generik dan image `fill` belum memiliki `sizes` yang lengkap.
- CTA WhatsApp umum belum membawa pesan asal/tujuan yang jelas.
- Heading kolaborasi, manfaat, dan item FAQ belum mengikuti hierarki halaman dengan baik.
- Hero sudah memakai `next/image`, memiliki source 1600x1131, dan diprioritaskan; fondasi ini dipertahankan.

## Implementasi

### Metadata dan indexing

- Title: `BIO ATAMA | Herbal Alami Karang Laut - DekatLokal` (49 karakter).
- Meta description: `BIO ATAMA menghadirkan produk herbal alami berbahan karang laut dari Maros, Sulawesi Selatan, dengan pilihan kemasan dan pemesanan via WhatsApp.` (144 karakter).
- Canonical absolute menuju homepage production.
- Robots meta: `index, follow`.
- Googlebot directive mengizinkan large image preview, snippet, dan video preview.
- Tidak ada localhost, IP loopback, atau domain `vercel.app` pada metadata final.
- Verifikasi Google Search Console existing dipertahankan.

### Social preview dan image SEO

- Social preview khusus berukuran 1200x630 dibuat dari hero existing tanpa menghasilkan visual baru.
- `og:image` dan `twitter:image` memakai URL absolute production.
- Width, height, type, dan alt social image tersedia.
- Hero menjadi `primaryImageOfPage` dengan URL, dimensi, dan caption faktual.
- Semua 21 image pada HTML prerender memiliki alt text deskriptif.
- Image hero tetap priority; image bawah fold tetap lazy secara default melalui `next/image`.
- Responsive `sizes` ditambahkan untuk hero, produk, informasi produk, partner, testimoni, dan modal.
- Next Image dikonfigurasi untuk AVIF/WebP dan cache minimum 24 jam.

### Favicon dan manifest

- Favicon diambil dari simbol logo BIO ATAMA existing, bukan logo framework atau DekatLokal.
- `favicon.ico`: 48x48, valid dan crawlable.
- `favicon-48x48.png`: 48x48.
- `apple-touch-icon.png`: 180x180.
- `icon-192.png`: 192x192.
- `icon-512.png` dan `favicon.png`: 512x512.
- `site.webmanifest` valid dan mengacu ke icon BIO ATAMA yang konsisten.
- Semua icon square 1:1 dan tidak diblokir robots.
- Implementasi ini membuat favicon eligible dan dioptimalkan agar berpeluang muncul di Google Search; tampilan akhirnya tetap ditentukan Google.

### Structured data

Satu graph JSON-LD server-rendered memuat:

- WebSite
- ImageObject
- WebPage
- Organization
- LocalBusiness
- OfferCatalog
- Dua Product
- Dua Offer dengan harga IDR 100000 dan IDR 55000
- FAQPage yang hanya memuat tiga pertanyaan nonmedis yang memang terlihat di halaman

Schema tidak memuat `MedicalCondition`, `MedicalTherapy`, `Drug`, `MedicalBusiness`, availability palsu, rating palsu, review palsu, atau klaim penyembuhan. Social profile tidak dimasukkan karena URL valid belum tersedia.

BreadcrumbList sengaja tidak dipasang. Homepage single-page ini tidak memiliki dua level hierarki indexable yang nyata, sedangkan [dokumentasi Google](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) mensyaratkan setidaknya dua `ListItem`. Membuat parent palsu akan bertentangan dengan aturan data faktual.

### Semantik, aksesibilitas, dan link

- Tetap hanya ada satu H1.
- Heading section kolaborasi dan manfaat menjadi H2; pertanyaan FAQ menjadi H3 tanpa perubahan styling.
- Enam internal anchor tervalidasi dan tidak ada anchor yang rusak.
- Google Maps iframe memiliki title aksesibel.
- Kontrol mobile navigation memiliki `aria-expanded` dan `aria-controls`.
- Gallery testimoni dapat diakses dengan keyboard.
- Link DekatLokal pada logo partner dan footer memakai URL HTTPS valid.
- CTA WhatsApp memakai nomor internasional `6285342867522`, pesan natural, nama BIO ATAMA, asal DekatLokal, serta encoding URL yang benar.

### Robots dan sitemap

- `/robots.txt` mengizinkan semua halaman/aset publik, menyatakan host production, dan menunjuk sitemap production.
- `/sitemap.xml` hanya memuat homepage indexable dengan absolute HTTPS URL dan `lastmod` 2026-06-24.
- Homepage, image, icon, manifest, `/_next/image`, dan static assets tidak diblokir.

## Hasil validasi

- `npm run lint`: lulus.
- `npx tsc --noEmit`: lulus.
- `npm run build`: lulus; seluruh route statically prerendered dengan backend Webpack.
- JSON-LD: berhasil diparse, 11 node graph, dua Product, dan tiga FAQ aman.
- HTML prerender: satu H1, satu JSON-LD, 21 image dengan alt, nol `noindex`, nol metadata localhost, dan nol metadata Vercel.
- Social image: 1200x630, sekitar 93 KB.
- Sitemap XML dan web manifest berhasil diparse.
- Favicon ICO berhasil diparse sebagai 48x48.

Catatan tooling lokal: binary SWC Windows yang terpasang di `node_modules` tidak valid. Next.js berhasil memakai fallback WASM dan build Webpack lulus. Instalasi bersih pada Vercel/Linux semestinya memakai binary platform deployment; bila warning muncul setelah clone lokal, hapus lalu instal ulang `node_modules` melalui `npm ci`.

## Product snippets dan Merchant listings

Product snippets sudah disiapkan karena nama, gambar, brand, URL anchor, harga, mata uang, serta CTA terlihat di halaman dan cocok dengan schema.

Merchant listings penuh belum dipaksakan. Data berikut belum tersedia atau belum dapat diverifikasi:

- status stok/availability;
- kebijakan retur;
- ongkos dan SLA pengiriman;
- detail checkout/transaksi selain WhatsApp;
- GTIN/MPN/SKU resmi.

Tambahkan hanya setelah data tersebut tersedia dan tampil konsisten di UI. Untuk kondisi sekarang, prioritaskan laporan Product snippets di Search Console.

## Risiko klaim herbal/YMYL yang masih terlihat

Sesuai instruksi untuk tidak mengubah UI/copy existing, klaim berikut masih terlihat di halaman tetapi sengaja tidak dimasukkan ke metadata atau structured data:

- klaim promil dan “menghancurkan kista” pada `utils/translations.ts`;
- klaim penyembuhan GERD/ISK/kolesterol dan dosis kondisi berat pada `app/components/FooterSections.tsx`;
- klaim keamanan absolut untuk ibu hamil, menyusui, anak, lansia, dan konsumsi jangka panjang;
- klaim testimoni terkait hasil kesehatan.

Risiko ini tetap dapat memengaruhi penilaian kualitas, kepatuhan iklan, dan kepercayaan pengguna walaupun schema sudah aman. Tindak lanjut yang direkomendasikan adalah review copy bersama pemilik produk dan tenaga kepatuhan/kesehatan, lalu netralkan klaim absolut dan tambahkan disclaimer medis yang disetujui. Jangan menambahkan FAQ medis tersebut ke schema sebelum copy dinetralkan.

Legalitas P-IRT dan Halal hanya dipertahankan sebagai teks existing. Link dokumen tidak ditambahkan karena URL dokumen valid belum diberikan. Structured data tidak mengklaim sertifikasi tersebut.

## SOP post-deploy dan Google Search Console

1. Deploy branch terbaru ke Vercel dan pastikan custom domain tetap `bioatama.dekatlokal.com`.
2. Buka homepage dan pastikan HTTP 200 serta HTTPS valid.
3. Buka `/robots.txt` dan pastikan HTTP 200.
4. Buka `/sitemap.xml` dan pastikan HTTP 200.
5. Buka `/favicon.ico`, `/favicon-48x48.png`, `/favicon.png`, `/apple-touch-icon.png`, `/icon-192.png`, dan `/icon-512.png`.
6. Buka `/site.webmanifest` dan social image `/images/bio-atama-social-preview.jpg`.
7. Periksa source HTML, bukan hanya DOM setelah hydration.
8. Pastikan title dan meta description baru tampil.
9. Pastikan declared canonical menuju `https://bioatama.dekatlokal.com/` (serialisasi tanpa slash pada origin tetap ekuivalen).
10. Pastikan robots meta `index, follow` dan tidak ada `noindex` dari header/platform.
11. Pastikan `og:url`, `og:image`, Twitter Card, serta image alt/dimensi tersedia.
12. Pastikan favicon link tags dan manifest link tersedia di head.
13. Pastikan JSON-LD tersedia dan tidak memuat klaim medis berisiko.
14. Uji URL di Schema.org Validator.
15. Uji homepage di Google Rich Results Test dan tinjau Product/FAQ yang terdeteksi.
16. Tambahkan atau gunakan Domain Property `dekatlokal.com` di Google Search Console melalui DNS.
17. Opsional: tambahkan URL-prefix property `https://bioatama.dekatlokal.com/`.
18. Submit `https://bioatama.dekatlokal.com/sitemap.xml`.
19. Jalankan URL Inspection untuk homepage.
20. Jalankan Live Test.
21. Jika live test valid, lakukan Request Indexing satu kali.
22. Setelah data tersedia, bandingkan user-declared canonical dengan Google-selected canonical.
23. Pantau Page Indexing dan penyebab excluded pages.
24. Pantau Enhancements untuk Product snippets dan error structured data.
25. Pantau Merchant listings hanya jika data merchant sudah dilengkapi.
26. Pantau Experience/Core Web Vitals setelah data lapangan tersedia.
27. Pantau Performance: query, impression, click, CTR, average position, device, country, dan search appearance.
28. Pantau Links untuk backlink internal dari domain utama DekatLokal.
29. Periksa image indexing dan large image preview setelah recrawl.
30. Periksa favicon setelah recrawl; Google tidak menjamin langsung menampilkannya.
31. Jika favicon belum diperbarui, pastikan URL asset 200, tunggu recrawl, lalu request indexing homepage secara wajar.
32. Jangan mengirim request indexing berulang dalam waktu singkat.

## Tindakan manual tim DekatLokal

- Vercel: deploy perubahan dan cek tidak ada environment/response header `X-Robots-Tag: noindex`.
- DNS/GSC: verifikasi Domain Property `dekatlokal.com` melalui DNS dan submit sitemap.
- DekatLokal: tambahkan backlink internal dari direktori Teman Lokal dengan anchor `BIO ATAMA - Produk Herbal Alami Karang Laut Maros`.
- Google Business Profile: pasang URL subdomain ini dan samakan NAP (nama, alamat, telepon) dengan website.
- Pemilik produk: berikan URL sosial valid bila ingin ditambahkan sebagai `sameAs`.
- Pemilik produk: berikan link dokumen legalitas yang dapat diverifikasi bila ingin legalitas dibuat clickable.
- Pemilik produk: berikan kebijakan stok, retur, dan pengiriman bila ingin melengkapi Merchant listings.
- Compliance: review dan setujui revisi copy klaim kesehatan serta disclaimer sebelum perubahan UI/content dilakukan.

## Daftar file yang diubah atau ditambahkan

- `app/layout.tsx`
- `app/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/seo.ts`
- `app/structured-data.ts`
- `app/favicon.ico`
- `app/components/AboutAndProducts.tsx`
- `app/components/FooterSections.tsx`
- `app/components/GoogleMaps.tsx`
- `app/components/Hero.tsx`
- `app/components/Navbar.tsx`
- `app/components/SupportedBy.tsx`
- `app/components/Testimonials.tsx`
- `utils/whatsapp.ts`
- `next.config.ts`
- `package.json`
- `public/images/bio-atama-social-preview.jpg`
- `public/favicon.png`
- `public/favicon-48x48.png`
- `public/apple-touch-icon.png`
- `public/icon-192.png`
- `public/icon-512.png`
- `public/site.webmanifest`
