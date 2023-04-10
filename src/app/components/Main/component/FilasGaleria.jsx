import React from "react";

export default function FilasGaleria({ className }) {
  return (
    <div
      className={` md:w-1/2 w-10/12 flex flex-col items-center justify-center mx-auto peer gap-5 peer-first:flex-col-reverse`}
    >
      <div className="  w-full flex h-1/2 gap-5  items-center justify-between mx-auto ">
        <div className=" hover:saturate-100 sature-50 rounded  hover:border-orange-500/80 bg-transparent duration-150 hover:border-dotted border-2 border-inherit">
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full duration-200 cursor-pointer hover:-translate-x-2 hover:-translate-y-2 hover:shadow-lg shadow-md rounded hover: dark:bg-gray-500 aspect-square"
          />{" "}
        </div>
        <div className=" hover:saturate-100 sature-50 rounded  hover:border-blue-500/80 bg-transparent duration-150 hover:border-dotted border-2 border-inherit">
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded dark:bg-gray-500 aspect-square duration-200 cursor-pointer hover:-translate-x-2 hover:-translate-y-2 hover:shadow-lg hover:saturate-100 sature-50  shadow-md "
          />
        </div>
      </div>
      <div className="h-1/2  w-full mx-auto">
        <div className=" hover:saturate-100 sature-50 rounded  hover:border-red-500/80 bg-transparent duration-150 hover:border-dotted border-2 border-inherit">
          <img
            alt=""
            className="w-full h-64 object-cover rounded mx-auto duration-200 cursor-pointer hover:-translate-x-2 hover:-translate-y-2 hover:shadow-lg hover:saturate-100 sature-50  shadow-md "
            src="https://source.unsplash.com/random/200x200/?7"
          />
        </div>
      </div>
    </div>
  );
}