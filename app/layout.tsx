import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import AOSInit from "@/app/components/AOSInit";
import { LanguageProvider } from "@/context/LanguageContext";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_DESCRIPTION,
  SOCIAL_IMAGE_PATH,
  SOCIAL_TITLE,
} from "@/app/seo";

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: "%s | BIO ATAMA",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "BIO ATAMA",
    "Bio Atama Maros",
    "herbal alami Maros",
    "produk herbal karang laut",
    "herbal alami Sulawesi Selatan",
    "UMKM herbal Maros",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: "/",
    siteName: `${SITE_NAME} - DekatLokal`,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: SOCIAL_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Produk BIO ATAMA herbal alami berbahan karang laut dalam kemasan ungu dan hijau",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE_PATH,
        alt: "Produk BIO ATAMA herbal alami berbahan karang laut dalam kemasan ungu dan hijau",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo",
  },
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
