import Image from "next/image";
import React from "react";
import MultimediaGaleriaFotos from "./MultimediaGaleriaFotos";

export default function Multimedia() {
  return (
    <section className="bg-neutral-100/80 backdrop-blur-sm text-gray-100  mx-auto py-24">
      <h2 className="  md:text-4xl ml-32 md:text-start text-center text-2xl z-10 font-bold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr  to-gray-700 from-gray-800 ">
        Galeria{" "}
      </h2>

     <MultimediaGaleriaFotos/>
    </section>
  );
}
