import Image from "next/image";
import React from "react";
import ramacode from "../../../../../public/webdeveloper.gif";

export default function BannerSponsor() {
  return (
    <section className="container py-12 px-6 flex  items-center justify-center mx-auto bg-gray-100 text-gray-700">
      <div className="  my-10 mx-auto h-full text-center items-center justify-around gap-5 flex flex-col w-1/2">
        <h2 className="text-4xl font-bold text-orange-500/80">RamiroCode</h2>
        <span className="font-medium "> Desarrollo y Diseño Web</span>
        <p className="text-xs w-10/12">
          Desarrollo Web con experiencia en la creación de sitios web y
          aplicaciones atractivas y funcionales. Especializado en React, Node.js
          y TailwindCSS.
        </p>
        <a href="https://ramiroquiroga.vercel.app/contacto" className="text-sm font-medium text-blue-900">ramiroquiroga.vercel.app</a>
      </div>
      <div className=" flex flex-wrap justify-center mx-auto text-gray-400">
        <div className="realtive">
          <Image
            src={ramacode}
            alt="Descripción del GIF"
            width={500}
            height={500}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
}
