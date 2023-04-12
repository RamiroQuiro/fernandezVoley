"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchGoogleGaleria } from '../api/services/fetchGoogleSheet';
import Image from 'next/image';

export default function GaleriaFoto() {
    const myLoader = ({ src, width, quality }) => {
        return `https://drive.google.com/uc?export=view&id=${src}`;
      };
       const { data, error } = useQuery(["GaleriaOmpleta"], fetchGoogleGaleria);
    
      if (error) return <div>Carga de galerias fallida</div>;
  return (
    <div className="container h-full  flex md:flex-row flex-col items-center group flex-wrap justify-center gap-6 mx-auto bg-gray-50/50 backdrop-blur-sm px-5 py-10 rounded">
    {data?.data?.reverse().map((img, i) => (
      <div
        key={i}
        className="relative w-[30%] flex-auto hover:saturate-100 sature-50 rounded  hover:border-orange-500/80 bg-transparent duration-150 hover:border-dotted border-2 border-inherit"
      >
        <Image
          width={500}
          height={500}
          loader={myLoader}
          src={img.src}
          alt={"foto"}
          className="object-contain w-full duration-200 cursor-pointer hover:-translate-x-2 hover:-translate-y-2 hover:shadow-lg shadow-md rounded hover: dark:bg-gray-500 aspect-square"
        />{" "}
      </div>
    ))}
  </div>
  )
}
