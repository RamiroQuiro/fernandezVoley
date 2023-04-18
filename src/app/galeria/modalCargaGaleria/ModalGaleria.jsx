"use client";
import { useState } from "react";
import ButtonAgregar from "../buttonAgregar";
import ContenedorForm from "./ContenedorForm";

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
        <ContenedorForm handleClick={handleClick} setActive={setActive}/>
    }
    
        <ButtonAgregar handleClick={handleClick} />
      
    </>
  );
}
