import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SupportedBy from "@/app/components/SupportedBy";
import AboutAndProducts from "@/app/components/AboutAndProducts";
import Testimonials from "@/app/components/Testimonials"; // Component Testimoni aktif
import GoogleMaps from "@/app/components/GoogleMaps"; // Component Google Maps
import FooterSection from "@/app/components/FooterSections"; // Pastikan nama file sesuai (singular/plural)

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SupportedBy />
      <AboutAndProducts />
      
      
      {/* Bagian ini sekarang mengambil dari file Testimonials.tsx */}
      <Testimonials />
      
      {/* Google Maps Section */}
      <GoogleMaps />
      
      <FooterSection />
    </main>
  );
}