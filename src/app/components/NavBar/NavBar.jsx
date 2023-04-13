import React from "react";

export default function NavBar() {
  return (
    // <nav className="bg-gradient-to-tr from-orange-500/90 via-orange-400/80 to-blue-500 backdrop-blur-cm z-40 mb-24 flex items-center fixed justify-evenly w-full py-3">
    <nav className="bg-gradient-to-tr from-orange-500/90 via-orange-400/80 to-blue-500 backdrop-blur-cm z-40 md:mb-24 flex items-center w-16 h-16 rounded-full bottom-0 right-3 fixed md:justify-evenly  py-3">
      <div className="z-40 relative">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
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
                  fill="#000000"
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
                  fill="#000000"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <ul className=" items-center justify-evenly gap-3 w-full hidden md:flex">
        <li className=" uppercase font-medium text-sm cursor-pointer  text-gray-100 hover:text-gray-50 hover:scale-105 duration-150">
          home
        </li>
        <li className=" uppercase font-medium text-sm cursor-pointer text-gray-100 hover:text-gray-50 hover:scale-105 duration-150 ">
          servicios
        </li>
        <li className=" uppercase font-medium text-sm cursor-pointer text-gray-100 hover:text-gray-50 hover:scale-105 duration-150 ">
          nosotros
        </li>
        <li className=" uppercase font-medium text-sm cursor-pointer text-gray-100 hover:text-gray-50 hover:scale-105 duration-150 ">
          contacto
        </li>
      </ul>
    </nav>
  );
}
