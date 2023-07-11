import React, { useState } from "react";
import { actualizarNoticias } from "../api/services/useFirebase/cargarImagnes";
import useFile from "../hook/useImage";
import Image from "next/image";
export default function FormularioCargaNoticia() {
  const [form, setForm] = useState({});
  const handleForm = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const { handleImage, cargarImagen, previewURL, fileName,file } = useFile();
  const clickGuardar = async (e) => {
    e.preventDefault();
    await actualizarNoticias({...form,imgName:fileName},file); //llamada al servicio para guardar en firebase el
    cargarImagen()
    setForm({});
  };


  return (
    <div className="my-5">
      <form
        action=""
        className="flex flex-col rounded-lg p-5 items-center justify-between w-full mx-auto gap-3 "
      >
        <label className="w-full font-medium">
          Titulo de noticia:
          <input
            name="titulo"
            onChange={handleForm}
            className="w-full rounded-lg p-2"
            typeof="text"
          />
        </label>
        <textarea
          onChange={handleForm}
          name="textNoticia"
          id="textoNoticia"
          cols="30"
          rows="10"
          className="w-full rounded-lg p-2"
          placeholder="Escribe aqui la noticia"
        ></textarea>
        <div className=" rounded-lg w-full  mx-auto  flex items-center justify-evenly my-8">
          <label
            htmlFor="galeria"
            className="cursor-pointer bg-gray-700 hover:bg-primary-100 duration-200 p-2 rounded-l-lg text-gray-100 font-semibold text-sm"
          >
            Click para cargar tus imagenes
            <input
              onChange={handleImage}
              type="file"
              name="galeria"
              id="galeria"
              className="hidden"
            />
          </label>
          <span className="text-sm font-medium">{fileName}</span>
     
      
        {previewURL && (
          <div className="relative h-48 w-48 mb-5 mx-auto flex items-center p-5">
            <Image
              className="object-cover object-center rounded-lg "
              fill
              alt={fileName}
              src={previewURL}
            />
          </div>
        )}  </div>
        <button
          onClick={clickGuardar}
          type="button"
          className="px-6  mt-5 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
