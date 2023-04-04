import Image from "next/image";
import React from "react";

export default function Multimedia() {
  return (
    <section className="pb-28">
      <div className="container  flex items-center justify-center gap-2 mx-auto">
        <div className="w-1/2 max-h-full flex-col bg-red-500">
          <div className=" grid w-full grid-cols-2 h-1/2 grid-rows-2 gap-2">
          <Image
            quality={50}
            sizes="320"
            fill
            alt={"title"}
            src="https://source.unsplash.com/random/301x301/"
            className=" object-cover  object-center rounded"
          />
            <img
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
             src="https://source.unsplash.com/random/301x301/"
              alt="ss"
            />
            <img alt="" src="https://source.unsplash.com/random/200x200/?0" />
            <img src="https://source.unsplash.com/random/301x301/" alt="" />
            <img alt="" src="https://source.unsplash.com/random/200x200/?0" />
          </div>
          <div className="h-1/2 w-full">
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?7"
            />
          </div>
        </div>
        <div className="w-1/2 flex-col bg-green-500">
          <div>
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?7"
            />
          </div>
          <div className=" grid grid-cols-2 grid-rows-2 gap-2">
            <img src="https://source.unsplash.com/random/301x301/" alt="" />
            <img alt="" src="https://source.unsplash.com/random/200x200/?0" />
            <img src="https://source.unsplash.com/random/301x301/" alt="" />
            <img alt="" src="https://source.unsplash.com/random/200x200/?0" />
          </div>
        </div>
      </div>
    </section>
  );
}
