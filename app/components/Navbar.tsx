"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Import Hook

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage(); // Gunakan Hook
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#hero" }, // Mengambil teks dari file translations
    { name: t.nav.about, href: "#about" },
    { name: t.nav.products, href: "#products" },
    { name: t.nav.testimonials, href: "#testimonials" },
    { name: t.nav.faq, href: "#faq" },
    { name: t.nav.contact, href: "#footer" },
  ];

  return (
    <header 
      // Tambahkan AOS di sini agar navbar turun dari atas saat load
      data-aos="fade-down" 
      data-aos-duration="1000"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.jpg" alt="Logo BIO ATAMA" width={50} height={50} className="rounded-full object-cover" />
          <span className="font-bold text-xl text-primary-hover tracking-tight hidden sm:block">BIO ATAMA</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            
            {/* --- LOGIC SWITCH BAHASA --- */}
            <button 
              onClick={toggleLanguage} 
              className="text-xs font-bold text-gray-500 hover:text-primary transition-colors flex gap-1 border border-gray-200 px-3 py-1.5 rounded-full bg-white/50"
              aria-label="Ganti Bahasa"
            >
              <span className={language === 'id' ? "text-primary font-extrabold" : "text-gray-400"}>ID</span>
              <span className="text-gray-300">|</span>
              <span className={language === 'en' ? "text-primary font-extrabold" : "text-gray-400"}>EN</span>
            </button>
            {/* --------------------------- */}

            <Link href="https://wa.me/6285342867522" className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-hover shadow-lg shadow-primary/30 transform hover:scale-105 transition-all">
              {t.nav.cta}
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle & Switch */}
        <div className="flex items-center gap-4 md:hidden">
            {/* Switch Bahasa di Mobile */}
            <button onClick={toggleLanguage} className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-700 hover:bg-gray-200 transition">
               {language.toUpperCase()}
            </button>
            
            {/* Burger Menu Button */}
            <button className="text-gray-700" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4"
          // Tambahkan animasi fade down untuk menu mobile
          data-aos="fade-down"
          data-aos-duration="400"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-700 font-medium py-3 border-b border-gray-50 hover:text-primary transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="https://wa.me/6285342867522" className="w-full text-center bg-primary text-white py-3 rounded-xl font-bold mt-2 shadow-md">
            {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}