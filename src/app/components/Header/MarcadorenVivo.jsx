"use client";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGoogle } from "@/app/api/services/fetchGoogleSheet";
import PuntajeVivo from "./PuntajeVivo";

export default function MarcadorenVivo({}) {
  const {
    data: { data },
  } = useQuery(["dataQuery"], fetchGoogle, {
    initialData: {
      data: [],
    },
refetchOnMount:false
,
    refetchInterval: 5000,
  });
  // console.log(dataQuery);

  return (
    <div className="bg-white/70 border  w-11/12 shadow-lg flex-col md:gap-4 justify-center text-center backdrop-blur-sm  rounded mx-auto items-center flex my-2 relative p-2">
      <div className="w-full flex items-center justify-evenly">
        <span className="text-red-500 font-semibold animate-pulse">○ vivo</span>
        <div className=" flex mx-2 items-center justify-center flex-col">
          <h2 className="text-sm font-semibold">Set</h2>
          <span className=" text-xl font-bold  bg-gray-700 px-3 rounded text-gray-50 ">
            5
          </span>
        </div>
      </div>
      <div className="flex w-full mt-1 gap-1 items-center justify-between ">
        {data?.map((equipo, i) => (
          <PuntajeVivo
            className={"peer-first:bg-orange-700 "}
            key={i}
            equipo={equipo}
          />
        ))}
      </div>
    </div>
  );
}
