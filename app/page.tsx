import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SupportedBy from "@/app/components/SupportedBy";
import AboutAndProducts from "@/app/components/AboutAndProducts";
import Testimonials from "@/app/components/Testimonials"; // Component Testimoni aktif
import GoogleMaps from "@/app/components/GoogleMaps"; // Component Google Maps
import FooterSection from "@/app/components/FooterSections"; // Pastikan nama file sesuai (singular/plural)
import { structuredData } from "@/app/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <SupportedBy />
        <AboutAndProducts />
        <Testimonials />
        <GoogleMaps />
        <FooterSection />
      </main>
    </>
  );
}
