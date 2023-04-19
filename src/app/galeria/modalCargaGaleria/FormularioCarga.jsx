"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  cargarImagenes,
  leerGaleria,
} from "../../api/services/useFirebase/cargarImagnes";
import { toast } from "react-hot-toast";

export default function FormularioCarga({ setActive }) {
  const [imagen, setImagen] = useState(false);
  const [descripcion, setDescripcion] = useState(false);
  const [previewImg, setPreviewImg] = useState(false);

  useEffect(() => {
    if (!imagen) {
      return;
    }

    const reader = new FileReader();
    //instancia de la clase FileReader.
    reader.onloadend = () => {
      //callback de la funcion onloadend.
      setPreviewImg(reader.result); //elimino el valor del estado de imagen.
    }; //end onloadend.
    reader.readAsDataURL(imagen);
  }, [imagen]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const handleSubir = async (e) => {
    e.preventDefault();
    await cargarImagenes(imagen, descripcion, setActive).then(() => {
      toast.success("Imagen cargada correctamente");
    });
  };

  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  return (
    <form className="w-10/12 h-4/6 p-2 bg-gray-100 rounded flex flex-col text-gray-700 items-center  justify-around mx-auto">
      <h2 className="block text-lg font-medium">Subir Imagen</h2>
      {previewImg ? (
        <div className="w-10/12 md:w-1/2  relative h-2/6 md:h-1/2 rounded-lg shadow-lg p-5 bg-white">
          <Image
            fill
            src={previewImg}
            alt="cargar"
            quality={75}
            className="object-cover rounded-lg"
          />
        </div>
      ) : (
        <label
          htmlFor="files"
          className="block text-sm font-medium  bg-white px-8 py-12 border-2 border-dashed rounded-md border-gray-700 text-gray-500 text-center  w-10/12 h-2/6"
        >
          <input
            onChange={handleFileUpload}
            type="file"
            name="files"
            id="files"
            className="hidden"
          />
          Pulse aquí para elegir tu archivo
        </label>
      )}

      <label htmlFor="descripcion">
        <textarea
          onChange={handleDescripcion}
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Descripción de la Foto"
          cols={100}
          rows={3}
          className="px-3 shadow-lg py-2 rounded w-full"
        />
      </label>
      <button
        className="bg-orange-500 rounded shadow-lg py-2 px-5 font-medium text-gray-100 hover:bg-orange-600 duration-200"
        onClick={handleSubir}
      >
        Subir
      </button>
    </form>
  );
}
