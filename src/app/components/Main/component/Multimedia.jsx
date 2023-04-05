import Image from "next/image";
import React from "react";
import MultimediaGaleriaFotos from "./MultimediaGaleriaFotos";

export default function Multimedia() {
  return (
    <section className="bg-gray-100/90 backdrop-blur-sm text-gray-100  mx-auto py-24">
      <h2 className="  md:text-4xl ml-32 text-start text-2xl z-10 font-bold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr  to-gray-700 from-gray-800 ">
        Galeria{" "}
      </h2>

     <MultimediaGaleriaFotos/>
    </section>
  );
}
