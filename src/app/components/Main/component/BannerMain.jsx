import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logoFV.png";

export default function BannerMain() {
  return (
    <div className="p-6 py-12 bg-orange-400 text-blue-600">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
            <Image
            alt="logo"
            src={logo}
            width={200}
            height={100}
            />
          <h2  className=" md:text-4xl  text-center text-2xl z-10 font-extrabold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r  to-cyan-600 from-blue-700">
            Más que un club, una familia!!!
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            {/* <span>Mas que un Club, una Familia!</span> */}
          </div>
          {/* <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Shop Now</a> */}
        </div>
      </div>
    </div>
  );
}
