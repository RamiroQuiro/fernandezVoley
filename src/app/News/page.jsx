import React from 'react'
import SectinNews from '../components/Main/component/SectinNews'
import CargarNoticias from './CargarNoticias'


export default function News() {

  return (
    <section className="text-gray-600 min-h-screen flex py-16  flex-col relative bg-gray-50 w-full items-center justify-center ">
      
<CargarNoticias/>
    </section>
  )
}
