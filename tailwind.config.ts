import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- hỗ trợ đầy đủ tsx
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "16px",
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
