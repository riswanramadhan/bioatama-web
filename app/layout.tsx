import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Font modern & profesional
import AOSInit from "@/app/components/AOSInit";
import { LanguageProvider } from "@/context/LanguageContext";

const siteUrl = "https://bioatama.dekatlokal.com";
const siteName = "BIO ATAMA";

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "BIO ATAMA | Solusi Herbal Alami Kesehatan Wanita",
    template: "%s | BIO ATAMA",
  },
  description: "BIO ATAMA adalah herbal alami dari tumbuhan karang laut untuk kesehatan wanita, nyeri haid, promil, dan keharmonisan pasutri. Terdaftar Depkes & Halal.",
  keywords: ["bio atama", "herbal wanita alami", "produk kesehatan wanita sulawesi selatan", "obat nyeri haid alami", "promil herbal maros"],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "BIO ATAMA | Solusi Herbal Alami Kesehatan Wanita",
    description: "Solusi alami tanpa bahan kimia untuk kesehatan rahim dan keharmonisan keluarga.",
    url: siteUrl,
    siteName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIO ATAMA | Solusi Herbal Alami Kesehatan Wanita",
    description: "Solusi alami tanpa bahan kimia untuk kesehatan rahim dan keharmonisan keluarga.",
  },
  verification: {
    google: "xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo", // google console verification
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${fontSans.variable} font-sans antialiased text-gray-800 bg-gray-50`}>
        <AOSInit />
        <LanguageProvider> {/* <--- Bungkus di sini */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
