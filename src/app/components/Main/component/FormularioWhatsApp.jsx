"use client"

import { enviar } from "@/app/api/services/mandarWhat";
import { useState } from "react"

export default function FormularioWhatsApp() {
const [mensaje, setMensaje] = useState({})

const handleChange=(e)=>{
    const {name, value} = e.target;
    setMensaje({... mensaje, [name]: value})

}
const numeroMEnsaje='3854042794'

const mandar=()=>{
    enviar(numeroMEnsaje,mensaje.name,mensaje.mensaje)
}

  return (
   
    <form className="p-6 flex flex-col justify-center">
    <div className="flex flex-col">
        <label htmlFor="name" className="hidden">Tu Nombre</label>
        <input type="name" name="name" id="name" onChange={handleChange} placeholder="Tu Nombre" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
    </div>

 

    <div className="flex flex-col mt-2">
        <label htmlFor="tel" className="hidden"></label>
        <textarea name="mensaje" id="tel" onChange={handleChange} placeholder="Escribe aqui tu Mensaje" rows={10} className="w-100 mt-2  py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
    </div>

    <button type="button" onClick={()=>mandar()} className="md:w-32 bg-green-600  hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-3  transition ease-in-out duration-300">
        Enviar
    </button>
</form>
  )
}
