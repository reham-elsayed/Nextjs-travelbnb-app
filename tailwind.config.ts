import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        sm:'576px',
        md:'768px',
        lg:'1200px',
        '2xl':'1400px',
      },
      container: {
        padding: '5px',
        center: true,
        // Add max-width if needed
       
      }
    },
  },
  plugins: [],
};
export default config;
