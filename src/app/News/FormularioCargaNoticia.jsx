import React, { useState } from "react";
import { actualizarNoticias } from "../api/services/useFirebase/cargarImagnes";
import useFile from "../hook/useImage";
import Image from "next/image";
export default function FormularioCargaNoticia() {
  const [form, setForm] = useState({});
  const handleForm = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const { handleImage, cargarImagen, previewURL, fileName, file } = useFile();
  const clickGuardar = async (e) => {
    e.preventDefault();
    await actualizarNoticias({ ...form, imgName: fileName }, file).then(() => {
      cargarImagen();
    })
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
            required
            name="titulo"
            onChange={handleForm}
            className="w-full rounded-lg p-2"
            typeof="text"
            value={form?.titulo}
          />
        </label>
        <label className="w-full font-medium">
          Fecha de la noticia
          <input
            value={form?.fecha}
            type="date"
            name="fecha"
            id="fecha"
            className="mx-5 px-2 py-1 rounded-lg"
            onChange={handleForm}
          />
        </label>
        <textarea
          required
          value={form?.textNoticia}
          onChange={handleForm}
          name="textNoticia"
          id="textoNoticia"
          cols="30"
          rows="10"
          className="w-full rounded-lg p-2"
          placeholder="Escribe aqui la noticia"
        ></textarea>
        <div className=" rounded-lg min-w-1/2  mx-auto bg-white flex items-center justify-between my-8 ">
          <label
            htmlFor="galeria"
            className="cursor-pointer bg-gray-700 hover:bg-primary-100 duration-200 p-2 rounded-l-lg text-gray-100 font-semibold text-sm"
          >
            Click para cargar tus imagenes
            <input
              required
              onChange={handleImage}
              type="file"
              name="galeria"
              id="galeria"
              className="hidden"
            />
          </label>
          <span className="text-sm font-medium px-3">{fileName}</span>
        </div>
        {previewURL && (
          <div className="relative h-48 w-1/3 mb-5 mx-auto flex items-center p-5">
            <Image
              className="object-cover object-center rounded-lg "
              fill
              alt={fileName}
              src={previewURL}
            />
          </div>
        )}
        <button
          onClick={clickGuardar}
          type="button"
          className="px-6  mt-5 py-3 text-sm rounded-md hover:underline bg-gray-700 text-gray-200"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
