import Papa from "papaparse";

export async function fetchGoogle(filtro) {
  // const respuesta=await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTnjfQL8sfhn4eXSDxFAwX2-98yvZ-fwqny5_sDjbsOGjfIuYw5QXWqTbs2aUsX63IUz83fe2EQ0I-c/pub?gid=944575946&single=true&output=csv ',{
  const respuesta = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTnjfQL8sfhn4eXSDxFAwX2-98yvZ-fwqny5_sDjbsOGjfIuYw5QXWqTbs2aUsX63IUz83fe2EQ0I-c/pub?gid=944575946&single=true&output=csv ',
    {
      cache: "no-store",
      next: {
        revalidate: 60,
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
