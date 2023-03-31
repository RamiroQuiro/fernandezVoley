import React from "react";

export default function Marcador({data}) {
  return (
    <div className="flex w-[48%] bg-white/80 rounded backdrop-blur-sm pb-1 flex-col items-center justify-between">
          <div className=" flex mx-2 items-center justify-center ">
              <h2 className="text-sm font-semibold">Set 4</h2>
              
            </div>
<div className="flex">
      <div className="w-3/6 flex items-center justify-center flex-col bg-cyan-700 p-1 text-gray-100 rounded">
        <h2 className="text-sm">{data[0]?.Equipos}</h2>
        <span className="md:text-6xl text-3xl font-bold ">{data[0]?.Set_4}</span>
      </div>
      <div className=" w-3/6 flex items-center justify-center flex-col bg-orange-700 p-1 text-gray-100 rounded">
          <h2 className="text-sm">{data[1]?.Equipos}</h2>
        <span className="md:text-6xl text-3xl font-bold ">{data[1]?.Set_4}</span>
      </div>
    </div>
    </div>      
  );
}
