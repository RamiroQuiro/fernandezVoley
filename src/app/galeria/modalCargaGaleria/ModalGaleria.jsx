"use client";
import { useState } from "react";
import ButtonAgregar from "../buttonAgregar";
import ContenedorForm from "./ContenedorForm";
import ContenedorLogin from "./ContenedorLogin";

export default function ModalGaleria() {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <>
    {
        active&&
        <ContenedorLogin handleClick={handleClick} setActive={setActive}/>
        // <ContenedorForm handleClick={handleClick} setActive={setActive}/>
    }
    
        <ButtonAgregar handleClick={handleClick} />
      
    </>
  );
}
