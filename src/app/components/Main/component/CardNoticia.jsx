import React from 'react'
import Skeletor from '../../Skeletor'

export default function CardNoticia({label,children,title,date,image,id}) {
 
 if (label=="titulo") 
  return (
    <a
        
    href={"http://localhost:3000/News/"+id}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-100 text-gray-700 p-3"
        >
          <img
          width={100}
          height={100}
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
        </a>
  )

if (label=="grid") 
return (
<a
            rel="noopener noreferrer"
            href={"http://localhost:3000/News/"+id}
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline animate-[aparecerDeArriba_1s] bg-gray-100 text-gray-700"
          >
            <img
              className="object-cover w-full rounded h-44 bg-gray-500"
              src={image}
              alt={title}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
               {title}
              </h3>
              <span className="text-xs text-gray-400">{date}</span>
              <p>
              {children}
              </p>
            </div>
          </a>
)
if (label=="news") 
return (
  <section className="text-gray-600 min-h-screen flex  bg-gray-50 w-full items-center justify-center">
      <div className="lg:w-4/5  px-5 py-24 mx-auto flex  items-stretch justify-between">
        <div className="w-1/2">
          <img src={image} alt={title} className='h-auto w-full object-cover' />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            {date}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {title}
          </h1>
       
          <p className="leading-relaxed">{children}</p>
          
          <div className="flex items-center justify-between">
            <span className="title-font font-medium text-2xl mr-5 text-gray-900">
            </span>
        
          </div>
        </div>
    </div>
  </section>)

  return (
    <section className="text-gray-600 min-h-screen flex  bg-gray-50 w-full items-center justify-center">
      </section>)
      }