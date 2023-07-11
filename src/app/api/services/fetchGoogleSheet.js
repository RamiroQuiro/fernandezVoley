import { useQueries } from "@tanstack/react-query";
import Papa from "papaparse";

const URLPuntaje='https://docs.google.com/spreadsheets/d/e/2PACX-1vTWbnwCbRh2eiBiVhojRaxEzGRz7cYpgb8MZjsZtD768tJ8zGChivgNjOTKo6kjyCPc6GpBrjxgOjVr/pub?gid=0&single=true&output=csv'
const URLNews='https://docs.google.com/spreadsheets/d/e/2PACX-1vTWbnwCbRh2eiBiVhojRaxEzGRz7cYpgb8MZjsZtD768tJ8zGChivgNjOTKo6kjyCPc6GpBrjxgOjVr/pub?gid=1911441261&single=true&output=csv'
const URLGaleria='https://docs.google.com/spreadsheets/d/e/2PACX-1vTWbnwCbRh2eiBiVhojRaxEzGRz7cYpgb8MZjsZtD768tJ8zGChivgNjOTKo6kjyCPc6GpBrjxgOjVr/pub?gid=150095900&single=true&output=csv'

export async function fetchGoogle() {
  
   const respuesta=await fetch(URLPuntaje,
    {
      cache: "no-cache",
      next: {
        revalidate: 10,
      },
    }
  )
    .then((res) => {
        return res.text();
    })
    .then((text) => {
      return Papa.parse(text, {
        header: true,
        
      });
    });
   
  return respuesta;
}

export async function fetchGoogleNews(filtro) {
  
  const respuesta=await fetch(URLNews,
   {
     next: {
       revalidate: 10,
     },
   }
 )
   .then((res) => {
       return res.text();
   })
   .then((text) => {
     return Papa.parse(text, {
       header: true,
       
     });
    })
  
 return respuesta;
}
export async function fetchGoogleGaleria(filtro) {
  
const respuesta=await fetch(URLGaleria,

)
 .then((res) => {
     return res.text();
 })
 .then((text) => {
   return Papa.parse(text, {
     header: true,
     
   });
  })

return respuesta;
}