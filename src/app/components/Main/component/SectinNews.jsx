"use client";
import CardNoticia from "./CardNoticia";
import { useQuery } from "@tanstack/react-query";
import Skeletor from "../../Skeletor";
import { useEffect, useState } from "react";
import { leerGaleria } from "@/app/api/services/useFirebase/cargarImagnes";

export default function SectinNews() {
  const [verMas, setverMas] = useState(false)
  const [arrayNews, setArrayNews] = useState([]);
  const {
   data,
    error,
    isLoading,isFetching
  } = useQuery(["noticias"], leerGaleria);

  useEffect(() => {
    if (!data) return;
    setArrayNews(data.noticias);
  }, [arrayNews, data]);

  return (
    <section id="noticias" className="bg-gradient-to-t from-gray-100/80 via-gray-100/60 to-transparent backdrop-blur-sm text-gray-100  mx-auto  py-24">
      <h2 className="  md:text-4xl ml-32 md:text-start text-center text-2xl z-10 font-bold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr  to-gray-100 from-gray-200 ">
        Ultimas Noticias
      </h2>
      <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
        {/* Última noticia */}
      {!arrayNews ? (
           < CardNoticia
         
          >
            
          </CardNoticia>
          ) : (  <CardNoticia
          label="titulo"
          id={arrayNews[0]?.id}
          title={arrayNews[0]?.titulo}
          date={arrayNews[0]?.fecha}
          image={arrayNews[0]?.url}
        >
          
          {arrayNews[0]?.textNoticia}
        </CardNoticia>)}
        <div className="flex  flex-wrap duration-200  gap-8 container">
          {!arrayNews ? (
            <Skeletor/>
          ) : (
            arrayNews.slice(1, 7).map((news, i) => (
              <CardNoticia
                label="grid"
                title={news.titulo}
                date={news.fecha}
                image={news.url}
                id={news.id}
                key={i}
              >
                {news.textNoticia}
              </CardNoticia>
            ))
          )}
          {
            verMas&&
            arrayNews?.reverse()?.slice(7,-1).map((news,i)=>(
                <CardNoticia
                label="grid"
                title={news.titulo}
                date={news.fecha}
                image={news.url}
                key={news.id}
                id={news.id}
              >
                {news.textNoticia}

                </CardNoticia>
            ))

          }
        </div>
        <div className="flex justify-center">
          <button
          onClick={()=>setverMas(!verMas)}
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
          >
            Ver Más...
          </button>
        </div>
      </div>
    </section>
  );
}
