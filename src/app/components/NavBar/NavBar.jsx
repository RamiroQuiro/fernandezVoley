"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BotonFace from "./BotonFace";
import BotonInsta from "./BotonInsta";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const handleScroll = () => {
    setScrollTop(0);
    const position = window.pageYOffset;
    if (position > 350) setScrollTop(position);
  };
  const Items = ({ text, href }) => (
    <a
      onClick={() => {
        setTimeout(() => {
          setToggle(false);
        }, 500);
      }}
      href={href}
      className={`${
        scrollTop > 250 ? "scale-[80] duration-200" : "duration-200"
      } uppercase font-medium md:text-sm text-base py-2 md:py-0 text-center border-b border-gray-100/20 hover:border-orange-400 w-full md:border-0 hover:text-orange-400 cursor-pointer   text-gray-100  hover:scale-105 md:hover:scale-110 duration-200`}
    >
      {text}
    </a>
  );

  const arrayItems = [
    {
      href: "/",
      id: 1,
      text: "HOME",
    },
    {
      href: "/#noticias",
      id: 1,
      text: "noticias",
    },
    {
      href: "#s",
      id: 1,
      text: "actividades",
    },
    {
      href: "/#multimedia",
      id: 1,
      text: "Galeria",
    },
    {
      href: "/#contacto",
      id: 1,
      text: "contacto",
    },
  ];

  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        className={`${
          toggle && " -rotate-45 duration-300 scale-95"
        } w-16 h-16 md:hidden  duration-300 rounded-full bg-gradient-to-tr from-orange-500/80 to-blue-500/80 fixed bottom-5 right-5 z-50 p-2.5`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${toggle && " -scale-y-75"}`}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="style=doutone">
              {" "}
              <g id="menu-hamburger">
                {" "}
                <path
                  id="vector (Stroke)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6Z"
                  fill="#F38632"
                ></path>{" "}
                <path
                  id="vector (Stroke)_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12Z"
                  fill="#BFBFBF"
                ></path>{" "}
                <path
                  id="vector (Stroke)_3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H21C21.4142 17.25 21.75 17.5858 21.75 18C21.75 18.4142 21.4142 18.75 21 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z"
                  fill="#F38632"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
      <nav
        className={`${
          !toggle
            ? "translate-x-full opacity-0 md:translate-x-0 md:opacity-100"
            : "translate-x-0 opacity-100"
        } duration-300 top-0 left-0 bg-neutral-800/80 backdrop-blur-sm border-b border-blue-500/70 z-40 md:mb-24 flex flex-col md:flex-row h-full md:h-auto items-center fixed md:justify-evenly justify-center w-full py-3 `}
      >
        <ul className="flex flex-col md:flex-row h-1/3 md:h-auto items-center md:justify-evenly justify-between gap-3 w-full px-10">
          {arrayItems.map((item) => (
            <Items href={item.href} text={item.text} key={item.id} />
          ))}
        </ul>
        <div
          className={`md:hidden mt-28  bottom-4 flex items-center justify-evenly w-10/12 mx-auto`}
        >
          <BotonFace/>
          <BotonInsta/>
        
        </div>
      </nav>
    </>
  );
}
