import { useQueries } from "@tanstack/react-query";
import Papa from "papaparse";

export async function fetchGoogle() {
  
   const respuesta=await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTWbnwCbRh2eiBiVhojRaxEzGRz7cYpgb8MZjsZtD768tJ8zGChivgNjOTKo6kjyCPc6GpBrjxgOjVr/pub?gid=0&single=true&output=csv',
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
  
  const respuesta=await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTWbnwCbRh2eiBiVhojRaxEzGRz7cYpgb8MZjsZtD768tJ8zGChivgNjOTKo6kjyCPc6GpBrjxgOjVr/pub?gid=1911441261&single=true&output=csv',
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
    })
  //   .then((res)=>{
  //     const filt= res.data.filter(e=>e.id==filtro)
  //     filt.length()>0? filt:res
  // })
  
 return respuesta;
}
