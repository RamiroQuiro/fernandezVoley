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
       gilth:{
          '0%':{textShadow:'#c1c1c1 0px 0px, #e1e1e2 0px 0px',},
          '49%':{textShadow:'#c1c1c1 0px 0px, #e1e1e2 0px 0px',},
          '50%':{textShadow:'#fffccc -2px 0px, #ff2020 2px 0px',},
          '55%':{textShadow:'#c1c1c1 0px 0px, #e1e1e2 0px 0px',},
          '0%':{textShadow:'#c1c1c1 0px 0px, #e1e1e2 0px 0px',},
       },
        sliceDown: {
          "0%": { maxHeight: "300px",opacity:"1" },
          "100%": { maxHeight: "0px",opacity:"0" },
        },
        sliceUp: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "300px", opacity: "1" },
        },
        aparecer: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hoverFilter:{
          "0%": { Height: "50px", },
          "100%": { Height: "auto",},
        },
        aparecerDeAbajo: {
          "0%": { opacity: "0",transform:"translateY(50%)" },
          "100%": { opacity: "1",transform:"translateY(0%) "},
        },
        aparecerDeArriba: {
          "0%": { opacity: "0",transform:"translateY(-50%)" },
          "100%": { opacity: "1",transform:"translateY(0%) "},
        },
        desaparecer: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        aparecerCote: {
          "0%": { transform: "translateX(150%)" },
          "100%": { transform: "translateX(0%)" },
        },
        desaparecerCote: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        glitch:"gilth .5s linear infinite ",
        aparecer: "aparecer 1s ease-out ",
        aparecerCostado: "aparecerCote .3s ease-in ",
        desaparecerCostado: "desaparecerCote .3s ease-in ",
      },

    },
  },
  plugins: [],
}