"use client"
import { useQuery } from "@tanstack/react-query";
import FilasGaleria from "./FilasGaleria";
import { fetchGoogleGaleria, fetchGoogleNews } from "@/app/api/services/fetchGoogleSheet";
import { useState } from "react";

export default function MultimediaGaleriaFotos() {

const [images, setImages] = useState(false)
  const {data,error}=useQuery(['Galeria'],fetchGoogleGaleria)

  return (
    <div className="container  my-14 flex md:flex-row flex-col items-center group  justify-center gap-6 mx-auto">
    
    <FilasGaleria arrayImagenes={data?.data?.slice(1,3)}/>
    <FilasGaleria arrayImagenes={data?.data?.slice(3,7)}/>
    </div>
  );
}
