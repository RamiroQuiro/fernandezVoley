import Image from "next/image";
import React from "react";

export default function FilasGaleria({ arrayImagenes }) {
  return (
    <div
      className={` md:w-1/2 w-10/12 flex flex-col items-center justify-center mx-auto peer gap-5 peer-first:flex-col-reverse`}
    >
      <div className="  w-full flex h-1/2 gap-5  items-center justify-between mx-auto ">
        
          {
            arrayImagenes?.slice(0,2).map((img,i)=>(
              <div 
              key={i}
              className="relative w-1/2 hover:saturate-100 sature-50 rounded  hover:border-orange-500/80 bg-transparent duration-150 hover:border-dotted border-2 border-inherit">
              <Image
              width={500}
              height={500}
              src={img.image_url}
              alt={"foto"+i}
              className="object-contain w-full duration-200 cursor-pointer hover:-translate-x-2 hover:-translate-y-2 hover:shadow-lg shadow-md rounded hover: dark:bg-gray-500 aspect-square"
            />{" "}
            </div>
            ))
          }
         
       
      </div>
      <div className="h-1/2  w-full mx-auto">
        <div className=" relative hover:saturate-100 sature-50 rounded  hover:border-red-500/80 bg-transparent duration-150 hover:border-dotted border-2 border-inherit">
          <Image
          width={500}
          height={500}
            alt={"foto"}
            className="w-full h-64 object-cover rounded mx-auto duration-200 cursor-pointer hover:-translate-x-2 hover:-translate-y-2 hover:shadow-lg hover:saturate-100 sature-50  shadow-md "
            src={arrayImagenes? arrayImagenes[2]?.image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pr%C3%A4torianer.jpg/250px-Pr%C3%A4torianer.jpg"}
          />
        </div>
      </div>
    </div>
  );
}
