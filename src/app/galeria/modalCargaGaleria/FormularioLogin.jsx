"use client"

import loginUser from "@/app/api/services/useFirebase/autenticacion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ContenedorForm from "./ContenedorForm";

export default function FormularioLogin({handleClick,setActive}) {
    const router=useRouter()
    const [galeraActiva, setGaleraActiva] = useState(false)
    const [userData, setUserData] = useState({})
    const handleChange=(e)=>{
        setUserData({...userData,
            [e.target.name]:e.target.value
        })
    }
const handleLogin=(e)=>{
    e.preventDefault()
    loginUser(userData.email,userData.password,setGaleraActiva)
}


if(!galeraActiva)
  return (
    <form className="md:w-6/12 md:h-4/6 w-11/12 h-4/6 p-2 relative bg-gray-100 rounded-lg flex group flex-col text-gray-700 items-center  justify-around mx-auto">
      <div className=" group-hover:opacity-100  group-active:opacity-100 flex justify-center mx-auto items-center animate-aparecer opacity-20">
        <i className="absolute border-2 mx-auto inset-0 md:w-8/12 h-full group-hover:border-2 group-hover:drop-shadow-online rounded-online group-hover:border-orange-500/80 duration-300  group-hover:animate-[rotacion_30s_infinite]"></i>
        <i className="absolute border-2 mx-auto inset-0 md:w-8/12 h-full group-hover:border-2 group-hover:drop-shadow-online2 rounded-online2 group-hover:border-blue-500/80 duration-150  group-hover:animate-[rotacion_50s_infinite]"></i>
        <i className="absolute border-2 mx-auto inset-0 md:w-8/12 h-full group-hover:border-2 group-hover:drop-shadow-online rounded-online3 group-hover:border-orange-500/80 duration-500 delay-75  group-hover:animate-[rotacion_40s_infinite]"></i>
      </div>
      <div className="absolute flex justify-center items-center flex-col gap-5">
        <h2 className="block text-lg font-medium">Accede para poder Subir</h2>{" "}
        <label htmlFor="email">
          <input
          onChange={handleChange}
            type="email"
            name="email"
            id="email "
            placeholder="correo@mail.com"
            className="py-2 px-5 rounded-xl bg-transparent border-2 border-gray-400 outline-none placeholder:text-gray-400"
          />
        </label>
        <label htmlFor="password">
          <input
          onChange={handleChange}
            type="password"
            name="password"
            id="password "
            placeholder="contraseña"
            className="py-2 px-5 rounded-xl bg-transparent border-2 border-gray-400 outline-none placeholder:text-gray-400"
          />
        </label>
        <button 
        onClick={handleLogin}
        className="border-orange-500  bg-transparent border-2 rounded-xl w-full py-2 px-5 font-medium text-orange-500 hover:text-gray-100 hover:bg-gradient-to-tr  hover:from-orange-500 hover:to-blue-300 duration-200">
          login
        </button>
        <div htmlFor="password">ingerar con cuenta google</div>
      </div>
    </form>
  )
  if(galeraActiva)
  return (
    <ContenedorForm handleClick={handleClick} setActive={setActive}/>
  )
}
