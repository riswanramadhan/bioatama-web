export const SITE_URL = "https://bioatama.dekatlokal.com";
export const SITE_NAME = "BIO ATAMA";
export const SITE_TITLE =
  "BIO ATAMA | Herbal Alami Karang Laut - DekatLokal";
export const SITE_DESCRIPTION =
  "BIO ATAMA menghadirkan produk herbal alami berbahan karang laut dari Maros, Sulawesi Selatan, dengan pilihan kemasan dan pemesanan via WhatsApp.";
export const SOCIAL_TITLE = "BIO ATAMA | Herbal Alami Karang Laut";
export const SOCIAL_DESCRIPTION =
  "Produk herbal alami BIO ATAMA berbahan karang laut dengan pilihan kemasan ungu dan hijau, tersedia untuk pemesanan via WhatsApp.";
export const HERO_IMAGE_PATH = "/images/hero-product.jpg";
export const SOCIAL_IMAGE_PATH = "/images/bio-atama-social-preview.jpg";
export const LOGO_PATH = "/icon-512.png";

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
