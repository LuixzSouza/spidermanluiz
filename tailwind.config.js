/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"], 
        oswald: ["var(--font-oswald)", "sans-serif"],
        teko: ["var(--font-teko)", "sans-serif"],
        mohave: ["var(--font-mohave)", "sans-serif"],
        alumnisans: ["var(--font-alumnisans)", "sans-serif"],
        leaguegothic: ["var(--font-leaguegothic)", "sans-serif"],
        robotoflex: ["var(--font-robotoflex)", "sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'bgHero': 'url("/bg_hero.png")',
        'Alterimg1': 'url("/AlterImg1.png")'
      },
      backgroundColor: {
        bgBack: "#000407",
        grayDark1: "#060608",
        grayDark2: "#101014",
        grayDark3: "#1B1B21",
        grayDark4: "#25252E",
        grayDark5: "#2F2F3B",
        grayLight1: "#C0C0CC",
        grayLight2: "#CECED9",
        grayLight3: "#DADAE5",
        grayLight4: "#E6E6F2",
        grayLight5: "#F2F2FF",
        orange1: "#CF3302",
        orange2: "#E54917",
        orange3: "#F55827",
        orange4: "#FF7042",
        orange5: "#FF835C",
      }
    },
  },
  plugins: [],
};
