import Image from "next/image";
import React from "react";
import logo from "../../../../public/Fv01.png";

export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-gray-700 text-gray-300">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-orange-400">
         <Image
         src={logo}
         width={100}
         height={200}
         alt="logo"
         />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Nuestro Equipo
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Quieres Publicitar en Nuestro Club
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Facebook
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div  className="py-6 text-sm text-center my-10 ">
      <pre>Design   -►   Ramiro Quiroga </pre>
        <pre> Developer Web. All rights reserved.</pre>

      </div>
    </footer>
  );
}
