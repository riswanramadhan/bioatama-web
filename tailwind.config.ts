import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Ini mengarah ke folder app di root
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Ini mengarah ke folder components di root
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6', 
          soft: '#DDD6FE',    
          hover: '#7C3AED',   
        },
        natural: {
          DEFAULT: '#10B981', 
          dark: '#047857',    
          light: '#D1FAE5',   
        },
      },
      borderRadius: {
        'card': '1rem',      
        'button': '9999px',
      },
    },
  },
  plugins: [],
};

export default config;