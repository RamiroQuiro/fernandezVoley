import Image from "next/image";
import React from "react";

export default function Multimedia() {
  return (
    <section className="py-14 ">
         <div className="container mt-14 flex items-center justify-center gap-2 mx-auto">
      <h2 className="  md:text-4xl  text-start text-2xl z-10 font-extrabold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r  to-cyan-600 from-blue-700">
        Galeria{" "}
      </h2>
      </div>
      <div className="container mt-14 flex items-center justify-center  mx-auto">
        <div className="w-1/2 max-h-full flex-col items-center mx-auto  py-3 gap-3">
          <div className="  w-full flex flex-wrap gap-2 items-center justify-center mx-auto">
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-[45%] rounded   bg-gray-500"
            />{" "}
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover  w-[45%] rounded  bg-gray-500"
            />{" "}
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover  w-[45%] rounded  bg-gray-500"
            />{" "}
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover  w-[45%] rounded  bg-gray-500"
            />
          </div>
          <div className="h-1/2 p-6 w-full mx-auto">
            <img
              alt=""
              className="w-full h-auto object-cover rounded mx-auto"
              src="https://source.unsplash.com/random/200x200/?7"
            />
          </div>
        </div>
        <div className="w-1/2 max-h-full flex-col items-center mx-auto  py-3 gap-3">
          <div className="h-1/2 pb-6 px-6 w-full mx-auto">
            <img
              alt=""
              className="w-full h-auto object-cover rounded mx-auto"
              src="https://source.unsplash.com/random/200x200/?7"
            />
          </div>
          <div className=" gap-2 w-full flex flex-wrap  items-center justify-center mx-auto">
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-[45%] rounded   bg-gray-500"
            />{" "}
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover  w-[45%] rounded  bg-gray-500"
            />{" "}
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover  w-[45%] rounded  bg-gray-500"
            />{" "}
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover  w-[45%] rounded  bg-gray-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
