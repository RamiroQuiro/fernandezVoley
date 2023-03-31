import React from "react";

export default function MarcadorenVivo() {
  return (
    <div className="bg-white/70 border  w-11/12 shadow-lg flex-col md:gap-4 justify-center text-center backdrop-blur-sm  rounded mx-auto items-center flex my-2 relative p-2">
          <span className="text-red-500 font-semibold animate-pulse">
            ○ vivo
          </span>
          <div className="flex w-full items-center justify-between">
            <div className="w-3/6 flex items-center justify-center flex-col bg-cyan-700 p-1 text-gray-100 rounded">
              <h2 className="text-sm">Fernandez Voley</h2>
              <span className="md:text-[8rem] text-6xl font-bold ">50</span>
            </div>

            <div className=" flex mx-2 items-center justify-center flex-col">
              <h2 className="text-sm font-semibold">Set</h2>
              <span className=" text-xl font-bold  bg-gray-700 px-1 rounded text-gray-50 ">
                1
              </span>
              <div className=" flex items-center justify-center">
                <span className=" text-xl font-bold ">2</span>
                <span className="text-lg font-bold ">-</span>
                <span className="text-xl font-bold ">1</span>
              </div>
            </div>
            <div className=" w-3/6 flex items-center justify-center flex-col bg-orange-700 p-1 text-gray-100 rounded">
              <h2 className="text-sm">Olimpico</h2>
              <span className="md:text-[8rem] text-6xl font-bold ">50</span>
            </div>
          </div>
        </div>
  );
}
