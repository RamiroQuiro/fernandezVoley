"use client";
import {
  loginUser,
  userAutenticado,
  sigInGoogle,
} from "@/app/api/services/useFirebase/autenticacion";
import { useState } from "react";
import ContenedorForm from "./ContenedorForm";

export default function FormularioLogin({ handleClick, setActive }) {
 
  const [galeraActiva, setGaleraActiva] = useState(false);
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(userData.email, userData.password, setGaleraActiva);
  };
  const handleSignInGoogle = (e) => {
    e.preventDefault();
    sigInGoogle().then(() => {
      setGaleraActiva(true);
    });
  };

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
            className="border-orange-500  bg-transparent border-2 rounded-xl w-full py-2 px-5 font-medium text-orange-500 hover:text-gray-100 hover:bg-gradient-to-tr  hover:from-orange-500 hover:to-blue-300 duration-200"
          >
            Login
          </button>
          <button
            onClick={handleSignInGoogle}
            className="flex w-full py-2 border rounded-xl items-center justify-around bg-gray-50"
          >
            <span className="font-medium text-md">Ingresar con Google</span>
            <svg
              viewBox="0 0 16 16"
              className="h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#4285F4"
                  d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                ></path>
                <path
                  fill="#34A853"
                  d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                ></path>
                <path
                  fill="#FBBC04"
                  d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </form>
    );
}
