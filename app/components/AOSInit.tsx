"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      duration: 800,
      once: true, // Animasi hanya berjalan sekali saat scroll ke bawah
      offset: 50,
    });
  }, []);

  return null;
}