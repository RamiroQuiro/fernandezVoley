"use client";
import { useQuery } from "@tanstack/react-query";
import FilasGaleria from "./FilasGaleria";
import {
  fetchGoogleGaleria,
  fetchGoogleNews,
} from "@/app/api/services/fetchGoogleSheet";
import { useState } from "react";

export default function MultimediaGaleriaFotos() {
  const [images, setImages] = useState(false);
  const { data, error } = useQuery(["Galeria"], fetchGoogleGaleria);

  return (
    <div className="container h-full my-14 flex md:flex-row flex-col items-center group  justify-center gap-6 mx-auto">
      <FilasGaleria arrayImagenes={data?.data?.reverse().slice(0, 3)} />
      <FilasGaleria arrayImagenes={data?.data?.reverse().slice(3, 7)} />
    </div>
  );
}
