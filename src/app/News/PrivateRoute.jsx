"use client";
import { useState } from "react";
import { auth } from "@/app/api/firebase";
import FormularioLogin from "../galeria/modalCargaGaleria/FormularioLogin";
import CargarNoticias from "./CargarNoticias";
import { userAutenticado } from "../api/services/useFirebase/autenticacion";
import { onAuthStateChanged } from "firebase/auth";

export default function PrivateRoute() {
    const [user, setUser] = useState(false) 
    onAuthStateChanged(auth, (user) => {
        //se eu realmente autenticar, retorna true e nao false
        if (user) {
         setUser(user.uid)
        } else {
          return false;
        }
      });
  

  return (
    <>
      {!user ? (
        <div className="h-[75vh] w-2/3 ">
          <FormularioLogin />
        </div>
      ) : (
        <CargarNoticias />
      )}
    </>
  );
}
