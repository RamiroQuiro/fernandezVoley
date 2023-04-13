/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glitch2: {
          " 0%": {
            clip: "rect(87px, 9999px, 9px, 0)",
            transform: "skew(0.42deg)",
          },
          "5%": {
            clip: "rect(5px, 9999px, 37px, 0)",
            transform: " skew(0.07deg)",
          },
          "10%": {
            clip: "rect(2px, 9999px, 97px, 0)",
            transform: "skew(0.63deg)",
          },
          "15%": {
            clip: "rect(5px, 9999px, 30px, 0)",
            transform: "skew(0.98deg)",
          },
          " 20% ": {
            clip: " rect(5px, 9999px, 33px, 0)",
            transform: "skew(0.02deg)",
          },
          "25%": {
            clip: "rect(93px, 9999px, 10px, 0)",
            transform: "skew(0.47deg)",
          },
          "30%": {
            clip: "rect(82px, 9999px, 69px, 0)",
            transform: " skew(0.13deg)",
          },
          "35%": {
            clip: "rect(98px, 9999px, 83px, 0)",
            transform: "skew(0.18deg)",
          },
          " 40%": {
            clip: "rect(76px, 9999px, 4px, 0)",
            transform: "skew(0.83deg)",
          },
          " 45%": {
            clip: "rect(85px, 9999px, 2px, 0)",
            transform: "skew(0.34deg)",
          },
          "50%": {
            clip: "rect(51px, 9999px, 71px, 0)",
            transform: "skew(0.53deg)",
          },
          "55%": {
            clip: "rect(13px, 9999px, 86px, 0)",
            transform: "skew(0.16deg)",
          },
          "60% ": {
            clip: "rect(33px, 9999px, 46px, 0)",
            transform: "skew(0.45deg)",
          },
          "65%": {
            clip: "rect(4px, 9999px, 8px, 0)",
            transform: " skew(0.57deg)",
          },
          "70%": {
            clip: "rect(6px, 9999px, 84px, 0)",
            transform: " skew(0.12deg)",
          },
          "75%": {
            clip: "rect(16px, 9999px, 47px, 0)",
            transform: "skew(0.02deg)",
          },
          "80%": {
            clip: "rect(99px, 9999px, 85px, 0)",
            transform: "skew(0.34deg)",
          },
          "85%": {
            clip: "rect(78px, 9999px, 36px, 0)",
            transform: "skew(0.22deg)",
          },
          "90%": {
            clip: "rect(88px, 9999px, 58px, 0)",
            transform: "skew(0.77deg)",
          },
          "95%": {
            clip: "rect(79px, 9999px, 50px, 0)",
            transform: " skew(0.32deg)",
          },
        },
        gilth: {
          "0%": { textShadow: "##F38632 0px 0px, #e1e1e2 0px 0px" },
          "48%": { textShadow: "#c1c1c1 0px 0px,#1871B7 0px 0px" },
          "49%": {
            textShadow: "#c1c1c1 0px 0px, #e1e1e2 0px 0px",
            transform: "translateX(-2px)",
            transform: "skew(0.02deg)",
          },
          "50%": {
            textShadow: "#fffccc -2px 0px, #ff2020 2px 0px",
            transform: "translateX(-5px)",
              transform: " skew(0.32deg)",
          },
          "52%": {
            textShadow: "#c1c1c1 0px 0px, #e1e1e2 0px 0px",
            transform: "translateX(2px)",
            transform: "skew(0.77deg)",
          },
          "52%": { textShadow: "#c1c1c1 0px 0px, #1871B7 0px 0px" },
          "0%": { textShadow: "#F38632 0px 0px, #1871B7 0px 0px" },
        },
        sliceDown: {
          "0%": { maxHeight: "300px", opacity: "1" },
          "100%": { maxHeight: "0px", opacity: "0" },
        },
        sliceUp: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "300px", opacity: "1" },
        },
        aparecer: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hoverFilter: {
          "0%": { Height: "50px" },
          "100%": { Height: "auto" },
        },
        aparecerDeAbajo: {
          "0%": { opacity: "0", transform: "translateY(50%)" },
          "100%": { opacity: "1", transform: "translateY(0%) " },
        },
        aparecerDeArriba: {
          "0%": { opacity: "0", transform: "translateY(-50%)" },
          "100%": { opacity: "1", transform: "translateY(0%) " },
        },
        desaparecer: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        aparecerCote: {
          "0%": { transform: "translateX(100%)", opacity: "0", },
          "98%": { transform: "translateX(-1%)", opacity: "0.5", },
          "99%": { transform: "translateX(1%)", opacity: "1", },
          "100%": { transform: "translateX(0%)", opacity: "1", },
        },
        desaparecerCote: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        glitch: "gilth 5s infinite linear alternate-reverse ",
        aparecer: "aparecer 1s ease-out ",
        aparecerCostado: "aparecerCote .3s ease-in ",
        desaparecerCostado: "desaparecerCote .3s ease-in ",
      },
    },
  },
  plugins: [],
};
