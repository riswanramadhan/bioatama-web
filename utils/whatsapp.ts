const WHATSAPP_NUMBER = "6285342867522";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const generalWhatsAppUrl = createWhatsAppUrl(
  "Halo Kak, saya dapat info dari website DekatLokal BIO ATAMA. Saya ingin bertanya tentang produk dan pemesanan.",
);

export const purpleProductWhatsAppUrl = createWhatsAppUrl(
  "Halo Kak, saya dapat info dari website DekatLokal BIO ATAMA. Saya ingin pesan BIO ATAMA Kemasan Ekstra/Ungu.",
);

export const greenProductWhatsAppUrl = createWhatsAppUrl(
  "Halo Kak, saya dapat info dari website DekatLokal BIO ATAMA. Saya ingin pesan BIO ATAMA Kemasan Ekonomis/Hijau.",
);
