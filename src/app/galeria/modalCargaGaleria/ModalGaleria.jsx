"use client";
import { useState } from "react";
import ButtonAgregar from "../buttonAgregar";
import ContenedorForm from "./ContenedorForm";
import ContenedorLogin from "./ContenedorLogin";
import { userAutenticado } from "@/app/api/services/useFirebase/autenticacion";
import { auth } from "@/app/api/firebase";

export default function ModalGaleria() {
  const user=auth.currentUser;

  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  console.log(user); //false es nvvueva autenticación  //true es actualización de token  //null es nula
  return (
    <>
    {
        active?
        !user?
        <ContenedorLogin handleClick={handleClick} setActive={setActive}/>:
        <ContenedorForm handleClick={handleClick} setActive={setActive}/>
        :null
      }
      
        <ButtonAgregar handleClick={handleClick} />
      
    </>
  );
}
