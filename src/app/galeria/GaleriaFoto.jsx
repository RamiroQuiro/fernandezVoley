"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchGoogleGaleria } from "../api/services/fetchGoogleSheet";
import Image from "next/image";
import Link from "next/link";
import { leerGaleria } from "../api/services/useFirebase/cargarImagnes";

export default function GaleriaFoto() {
  const myLoader = ({ src, width, quality }) => {
    return `https://drive.google.com/uc?export=view&id=${src}`;
  };
  const { data, error } = useQuery(["GaleriaOmpleta"], leerGaleria);

  if (error) return <div>Carga de galerias fallida</div>;
  return (
    <div className="container h-full  flex  items-center  flex-wrap justify-center md:gap-6 mx-auto bg-gray-50/50 backdrop-blur-sm md:px-5 px-2 py-10 gap-2 rounded">
      {data?.imagenes?.reverse().map((img, i) => (
        <Link
          target="_blank"
          href={img.url}
          key={i}
          className="relative md:w-[20%] w-[48%] overflow-hidden  hover:-translate-x-2  hover:-translate-y-2 hover:shadow-lg bg-gray-50 group flex-auto hover:saturate-100 sature-50 rounded  hover:border-orange-500/80 bg-transparent duration-150 hover:border-dotted "
        >
          <Image
            width={500}
            height={500}
            src={img.url}
            alt={"foto"}
            className="object-contain bg-gray-50 w-full duration-200  shadow-md rounded hover:  aspect-square"
          />{" "}
           <div className="hidden animate-[aparecer_.2s] group-hover:flex mx-auto text-center items-center justify-center absolute w-full h-1/2 top-1/2 left-0 bg-gradient-to-b from-neutral-800/60 via-neutral-700/40 to-transparent ">
        <span className="w-10/12 font-medium text-lg text-gray-50 text-center mx-auto ">{img.descripcion}</span>
      </div>
        </Link>
      ))}
     
    </div>
  );
}
