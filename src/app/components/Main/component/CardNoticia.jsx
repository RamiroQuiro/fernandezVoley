import React from 'react'

export default function CardNoticia({children,title,date,image}) {
  return (
    <div
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-100 text-gray-700 p-3"
        >
          <img
            src={image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
             {title}
            </h3>
            <span className="text-xs text-gray-400">{date}</span>
            <p>
             {children}
            </p>
          </div>
        </div>
  )
}
