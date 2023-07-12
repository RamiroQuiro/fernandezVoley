"use client";
import { useQuery } from "@tanstack/react-query";
import FilasGaleria from "./FilasGaleria";
import { leerGaleria } from "@/app/api/services/useFirebase/cargarImagnes";

export default function MultimediaGaleriaFotos() {
  const { data, error } = useQuery(["Galeria"], leerGaleria);
  return (
    <div className="container h-full my-14 flex md:flex-row flex-col items-center group  justify-center gap-6 mx-auto">
      <FilasGaleria arrayImagenes={data?.imagenes?.reverse().slice(0, 3)} />
      <FilasGaleria arrayImagenes={data?.imagenes?.slice(3, 6)} />
    </div>
  );
}
