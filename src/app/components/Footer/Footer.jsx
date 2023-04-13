import Image from "next/image";
import React from "react";
import logo from "../../../../public/Fv01.png";

export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-gray-700 text-gray-300 flex flex-col md:block ">
      <div className="container flex md:flex-row flex-col items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex md:flex-row flex-col md:pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center  w-16 h-16 mx-auto rounded-full dark:bg-orange-400">
            <Image src={logo} width={100} height={200} alt="logo" />
          </div>
          <ul className="flex gap-5 items-center mx-auto">
              <p  >
                ¿Quieres Publicitar en Nuestro Club?
              </p>
              <p  >
                Contactanos mediante el formulario anterior
              </p>
          </ul>
        </div>
        <ul className="flex flex-wrap  space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="https://www.instagram.com/voleyfernandez/" target='_blank'>
              Instagram
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/voley.fernandez' rel="noopener noreferrer" target='_blank'>
              Facebook
            </a>
          </li>
          
        </ul>
      </div>
      <div
       className="py-6 text-sm text-center my-10 cursor-pointer">
       <a target="_blank" href="https://ramiroquiroga.vercel.app">
        <pre>Design -► Ramiro Quiroga </pre>
        <pre> Developer Web. All rights reserved.</pre>
       </a>
      </div>
    </footer>
  );
}
