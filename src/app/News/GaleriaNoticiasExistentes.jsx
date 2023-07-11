"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { leerGaleria, removeImage } from "../api/services/useFirebase/cargarImagnes";
import Link from "next/link";

export default function GaleriaNoticiasExistentes() {
  const { data, error } = useQuery(["GaleriaOmpleta"], leerGaleria);
  const [arrayImagenes, setArrayImagenes] = useState([]);

  useEffect(() => {
    if (!data) return;
    setArrayImagenes(data?.noticias);
  }, [arrayImagenes, data]);

  const removeImageFirestore = (id,imgName) => {
    let newArray = (arrayImagenes).filter((img) => img.id != id)

    removeImage(id,imgName,newArray);
  };


  return (
    <div className="flex flex-wrap w-full  items-center   justify-evenly mx-auto gap-4 mt-10">

      {!arrayImagenes.filter((img) => img.nombre !== "perfil") ? (
        <span>No hay imagenes cargadas</span>
      ) : (
        arrayImagenes?.map((news) => (
          <div
            key={news?.id}
            className="w-1/4 flex-grow h-[500px] p-5 bg-white border border-gray-200 rounded-lg shadow relative group"
          >
            <div className="bg-gray-200 gap-x-2 px-2 py-1  z-30 rounded-lg absolute hidden group-hover:flex items-center justify-between right-2 top-1 animate-[aparecer_.2s]">
              <button onClick={() => removeImageFirestore(news?.id,news?.imgName)} className="hover:bg-white p-1 text-xs rounded-full">❌</button>
              <button onClick={() => removeImageFirestore(news?.id,news?.imgName)}  className="hover:bg-white p-1 text-xs rounded-full">✏️</button>
            </div>
            <div className="relative w-full h-1/2">
              <Image
                fill
                quality={75}
                alt={news?.imgName}
                src={news?.url}
                className="object-cover object-center w-full rounded-lg"
              />
            </div>
            <div className=" flex flex-col w-full items-center justify-between mx-auto p-5">
              {news?.fecha}
              <h3 className="mb-2 text-2xl w-full font-bold tracking-tight text-gray-900}">
                {news?.titulo}
              </h3>
              <p className="mb-3 truncate w-full  h-full font-normal text-gray-700 ">
                {" "}
                {news?.textNoticia}
              </p>
            </div>
            <Link href={"//localhost:3000/News/" + news?.id} className="font-medium text-orange-400">Ver mas ►</Link>
          </div>
        ))
      )}
    </div>
  );
}
