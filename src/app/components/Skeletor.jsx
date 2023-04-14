import React from "react";

export default function Skeletor() {
  return (
    <section className="text-gray-600 min-h-screen flex  bg-gray-50 w-full items-center justify-center z-40">
    <div className="flex flex-col m-8 rounded shadow-md w-full bg-gray-400 animate-pulse h-screen">
      <div className="h-full rounded-t bg-gray-700"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
        <div className="w-full h-6 rounded bg-gray-700"></div>
        <div className="w-full h-6 rounded bg-gray-700"></div>
        <div className="w-3/4 h-6 rounded bg-gray-700"></div>
      </div>
    </div>
    </section>
  );
}
