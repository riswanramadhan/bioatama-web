import {
  absoluteUrl,
  HERO_IMAGE_PATH,
  LOGO_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/app/seo";

const ids = {
  website: `${SITE_URL}/#website`,
  webpage: `${SITE_URL}/#webpage`,
  heroImage: `${SITE_URL}/#primaryimage`,
  organization: `${SITE_URL}/#organization`,
  localBusiness: `${SITE_URL}/#localbusiness`,
  catalog: `${SITE_URL}/#catalog`,
  purpleProduct: `${SITE_URL}/#produk-ekstra-ungu`,
  greenProduct: `${SITE_URL}/#produk-ekonomis-hijau`,
  purpleOffer: `${SITE_URL}/#penawaran-ekstra-ungu`,
  greenOffer: `${SITE_URL}/#penawaran-ekonomis-hijau`,
  faq: `${SITE_URL}/#faq`,
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ids.website,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "id-ID",
      publisher: { "@id": ids.organization },
    },
    {
      "@type": "ImageObject",
      "@id": ids.heroImage,
      url: absoluteUrl(HERO_IMAGE_PATH),
      contentUrl: absoluteUrl(HERO_IMAGE_PATH),
      width: 1600,
      height: 1131,
      caption:
        "Produk BIO ATAMA herbal alami berbahan karang laut dalam kemasan ungu dan hijau",
    },
    {
      "@type": "WebPage",
      "@id": ids.webpage,
      name: "BIO ATAMA | Herbal Alami Karang Laut",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      inLanguage: "id-ID",
      isPartOf: { "@id": ids.website },
      about: { "@id": ids.localBusiness },
      primaryImageOfPage: { "@id": ids.heroImage },
    },
    {
      "@type": "Organization",
      "@id": ids.organization,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(LOGO_PATH),
        width: 512,
        height: 512,
      },
      image: { "@id": ids.heroImage },
    },
    {
      "@type": "LocalBusiness",
      "@id": ids.localBusiness,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description:
        "BIO ATAMA adalah produk herbal alami berbahan karang laut dengan pilihan kemasan dan pemesanan via WhatsApp.",
      image: { "@id": ids.heroImage },
      logo: absoluteUrl(LOGO_PATH),
      telephone: "+6285342867522",
      priceRange: "Rp55.000-Rp100.000",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Perumahan Bina Sarana Residence 2, Blok DO No.6, Moncongloe Lappara",
        addressLocality: "Kabupaten Maros",
        addressRegion: "Sulawesi Selatan",
        postalCode: "90555",
        addressCountry: "ID",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Kabupaten Maros" },
        { "@type": "City", name: "Makassar" },
        { "@type": "AdministrativeArea", name: "Sulawesi Selatan" },
        { "@type": "Country", name: "Indonesia" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      hasOfferCatalog: { "@id": ids.catalog },
      parentOrganization: { "@id": ids.organization },
    },
    {
      "@type": "OfferCatalog",
      "@id": ids.catalog,
      name: "Pilihan Kemasan BIO ATAMA",
      itemListElement: [
        { "@id": ids.purpleOffer },
        { "@id": ids.greenOffer },
      ],
    },
    {
      "@type": "Product",
      "@id": ids.purpleProduct,
      name: "BIO ATAMA Kemasan Ekstra / Ungu",
      description:
        "BIO ATAMA Kemasan Ekstra adalah produk herbal alami berbahan karang laut dalam kemasan premium untuk pemesanan via WhatsApp.",
      image: [absoluteUrl("/images/product-purple.jpg")],
      url: `${SITE_URL}/#produk-ekstra-ungu`,
      brand: { "@id": ids.organization },
      offers: { "@id": ids.purpleOffer },
    },
    {
      "@type": "Offer",
      "@id": ids.purpleOffer,
      url: `${SITE_URL}/#produk-ekstra-ungu`,
      price: 100000,
      priceCurrency: "IDR",
      itemOffered: { "@id": ids.purpleProduct },
      seller: { "@id": ids.localBusiness },
    },
    {
      "@type": "Product",
      "@id": ids.greenProduct,
      name: "BIO ATAMA Kemasan Ekonomis / Hijau",
      description:
        "BIO ATAMA Kemasan Ekonomis adalah produk herbal alami berbahan karang laut dalam kemasan hemat untuk pemesanan via WhatsApp.",
      image: [absoluteUrl("/images/product-green.jpg")],
      url: `${SITE_URL}/#produk-ekonomis-hijau`,
      brand: { "@id": ids.organization },
      offers: { "@id": ids.greenOffer },
    },
    {
      "@type": "Offer",
      "@id": ids.greenOffer,
      url: `${SITE_URL}/#produk-ekonomis-hijau`,
      price: 55000,
      priceCurrency: "IDR",
      itemOffered: { "@id": ids.greenProduct },
      seller: { "@id": ids.localBusiness },
    },
    {
      "@type": "FAQPage",
      "@id": ids.faq,
      isPartOf: { "@id": ids.webpage },
      mainEntity: [
        {
          "@type": "Question",
          name: "Bagaimana cara penggunaannya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Panduan lengkap penggunaan disertakan dalam kemasan. Informasi penggunaan juga dapat ditanyakan melalui WhatsApp admin BIO ATAMA.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah bisa dikirim ke seluruh Indonesia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, BIO ATAMA melayani pengiriman ke seluruh wilayah Indonesia menggunakan layanan ekspedisi.",
          },
        },
        {
          "@type": "Question",
          name: "Apa itu BIO ATAMA dan terbuat dari apa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BIO ATAMA adalah produk herbal alami berbahan tumbuhan karang laut yang diproses secara tradisional.",
          },
        },
      ],
    },
  ],
};
