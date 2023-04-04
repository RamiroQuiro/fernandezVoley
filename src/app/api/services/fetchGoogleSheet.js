import { useQueries } from "@tanstack/react-query";
import Papa from "papaparse";

export async function fetchGoogle(filtro) {
   const respuesta=await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTWbnwCbRh2eiBiVhojRaxEzGRz7cYpgb8MZjsZtD768tJ8zGChivgNjOTKo6kjyCPc6GpBrjxgOjVr/pub?output=csv',
  // const respuesta = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTnjfQL8sfhn4eXSDxFAwX2-98yvZ-fwqny5_sDjbsOGjfIuYw5QXWqTbs2aUsX63IUz83fe2EQ0I-c/pub?gid=944575946&single=true&output=csv ',
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
        // console.log(text)
      return Papa.parse(text, {
        header: true,
        
      });
    });
  return respuesta;
}


export async function fetGoogleReactQuery(){
 

}