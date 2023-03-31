import React from "react";
import MarcadorenVivo from "./MarcadorenVivo";
import Marcador from "./Marcador";
import { fetchGoogle } from "@/app/api/services/fetchGoogleSheet";

export default async function Header() {

    
const data= await fetchGoogle()
console.log(data)
  return (
    <header className="relative  flex flex-col items-center justify-center w-full h-screen bg-gradient-to-tr from-cyan-900 via-cyan-800 to-orange-700  z-0 text-neutral-600">
      <div className="bg-white/90 border shadow-lg backdrop-blur-sm p-5 mt-0 rounded">
        {data?.data.map((data,i)=>(
        <h1 
        key={i}
        className=" md:text-4xl  text-center text-2xl z-10 font-extrabold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r  to-cyan-600 from-red-800">
          - {data.Equipos} -
        </h1>
        ))
        }
      </div>
      <div className="w-full flex flex-col">
        <MarcadorenVivo
        
        data={data?.data}/>

        <div className="  w-full   md:gap-4 gap-2 justify-around text-center backdrop-blur-sm  mx-auto items-center flex flex-wrap my-2 relative p-2">

       <Marcador
        data={data?.data}
       />
       <Marcador  data={data?.data}/>
       <Marcador  data={data?.data}/>
        </div>
      </div>
    </header>
  );
}
