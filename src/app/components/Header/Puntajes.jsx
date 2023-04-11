import React from "react";
import MarcadorenVivo from "./MarcadorenVivo";
import Marcador from "./Marcador";

export default function Puntajes({data}) {
  return (
    <>
      {" "}
      <div className="bg-white/90 border mt-20 shadow-lg backdrop-blur-sm p-5 md:mt-48 rounded -translate-y-20">
        {data?.map((data, i) => (
          <h1
            key={i}
            className=" md:text-4xl  text-center text-2xl z-10 font-extrabold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r  to-cyan-600 from-red-800"
          >
            - {data.Equipos} -
          </h1>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <MarcadorenVivo />

        <div className="  w-full   md:gap-4 gap-2 justify-around text-center backdrop-blur-sm  mx-auto items-center flex flex-wrap my-2 relative p-2">
          <Marcador data={data} />
          <Marcador data={data} />
        </div>
      </div>
    </>
  );
}
