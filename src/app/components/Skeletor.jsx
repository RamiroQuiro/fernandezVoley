import React from "react";

export default function Skeletor() {
  return (
    <section className="text-gray-600 h-screen flex  bg-gray-50 w-full items-center justify-center z-40">
    <div className="flex flex-col md:flex-row m-8 p-5 rounded shadow-md w-10/12 bg-gray-400 animate-pulse h-4/5">
      <div className="h-full md:w-1/2 w-full rounded-t bg-gray-500"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 animate-pulse bg-gray-100">
        <div className="w-full h-6 rounded animate-pulse bg-gray-500"></div>
        <div className="w-3/4 h-6 rounded animate-pulse bg-gray-500"></div>
      </div>
    </div>
    </section>
  );
}
