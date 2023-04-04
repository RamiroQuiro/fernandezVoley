import React from "react";

export default function PuntajeVivo({ equipo, className }) {
  return (
    <div
      className={`${className} w-3/6 flex items-center peer bg-cyan-700 justify-center flex-col  p-1 text-gray-100 rounded`}
    >
      <h2 className="text-sm md:text-xl font-bold ">{equipo.Equipos}</h2>
      <span className="md:text-[8rem] text-6xl font-bold ">
        {equipo?.set_2}
      </span>
    </div>
  );
}
