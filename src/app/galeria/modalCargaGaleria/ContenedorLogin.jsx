import React from "react";
import ButtonAgregar from "../buttonAgregar";
import FormularioLogin from "./FormularioLogin";

export default function ContenedorLogin({ handleClick, setActive }) {
  return (
    <div className="animate-aparecerCostado fixed w-full h-screen top-0 left-0 bg-gray-800/80 z-[60] flex items-center justify-center mx-auto">
      <ButtonAgregar
        className={"absolute top-5 right-5"}
        handleClick={handleClick}
      />
      <FormularioLogin handleClick={handleClick} setActive={setActive} />
    </div>
  );
}
