"use client";
import CardNoticia from "./CardNoticia";
import { useQuery } from "@tanstack/react-query";
import { fetchGoogleNews } from "@/app/api/services/fetchGoogleSheet";
import Skeletor from "../../Skeletor";
import { useState } from "react";

export default function SectinNews() {
  const [verMas, setverMas] = useState(false)
  const {
    data: { data },
    error,
    isLoading,isFetching
  } = useQuery(["NewsQuery"], fetchGoogleNews, {
    initialData: {
      data: [],
    },
    refetchInterval: 15000,
  });


  return (
    <section className="bg-gradient-to-t from-gray-100/80 via-gray-100/60 to-transparent backdrop-blur-sm text-gray-100  mx-auto  py-24">
      <h2 className="  md:text-4xl ml-32 md:text-start text-center text-2xl z-10 font-bold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr  to-gray-100 from-gray-200 ">
        Ultimas Noticias
      </h2>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {/* Última noticia */}
        <CardNoticia
          label="titulo"
          id={data[0]?.id}
          title={data[0]?.titulo}
          date={data[0]?.fecha}
          image={data[0]?.imagen}
        >
          {data[0]?.noticia}
        </CardNoticia>
        <div className="grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 duration-200">
          
          {!data ? (
            <Skeletor/>
          ) : (
            data.slice(1, 7).map((news, i) => (
              <CardNoticia
                label="grid"
                title={news.titulo}
                date={news.fecha}
                image={news.imagen}
                id={news.id}
                key={i}
              >
                {news.noticia}
              </CardNoticia>
            ))
          )}
          {
            verMas&&
            data.slice(7,-1).map((news,i)=>(
                <CardNoticia
                label="grid"
                title={news.titulo}
                date={news.fecha}
                image={news.imagen}
                key={news.id}
                id={news.id}
              >
                {news.noticia}

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
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
}
