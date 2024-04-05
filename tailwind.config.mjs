import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
      fontFamily: {
        serif: ["Basteleur Moonlight", ...defaultTheme.fontFamily.serif],
        display: ["Basteleur Bold", ...defaultTheme.fontFamily.serif],
        lithops: ["Lithops", "Young Serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    darkTheme: "skeletor",
    themes: [
      "light",
      "dracula",
      {
        skeletor: {
          primary: "#84FBA2",

          secondary: "#BD93F9",

          accent: "#F3E4A2",

          neutral: "#48445A",

          "base-100": "#2B2836",

          info: "#93B4FF",

          success: "#84FBA2",

          warning: "#FFB793",

          error: "#F36A66",
          "base-content": "#CEDEFF",
        },
      },
    ],
  },
};
