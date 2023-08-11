/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 768px) { ... }

      lg: "1150px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        circlesm: {
          "0%": { transform: "rotate(0deg) translateY(20px) rotate(0deg)" },
          "100%": {
            transform: "rotate(-360deg) translateY(20px) rotate(360deg)",
          },
        },
        circlemd: {
          "0%": { transform: "rotate(0deg) translateY(40px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateY(40px) rotate(-360deg)",
          },
        },
        circlelg: {
          "0%": { transform: "rotate(0deg) translateY(70px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateY(70px) rotate(-360deg)",
          },
        },
        circlexl: {
          "0%": { transform: "rotate(0deg) translateY(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(-360deg) translateY(100px) rotate(360deg)",
          },
        },
      },
      animation: {
        pulse1: "pulse 2s linear infinite",
        pulse2: "pulse 4s linear infinite",
        pulse3: "pulse 5s linear infinite",
        circlesm: "circlesm 11s linear infinite",
        circlemd: "circlemd 13s linear infinite",
        circlelg: "circlelg 17s linear infinite",
        circlexl: "circlexl 17s linear infinite",
      },
    },
  },
  plugins: [],
};
