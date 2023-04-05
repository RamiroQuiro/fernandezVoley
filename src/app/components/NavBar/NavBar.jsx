import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-red-500/90 backdrop-blur-cm z-40 mb-24 flex items-center fixed justify-evenly w-full py-3">
          <ul className="flex items-center justify-evenly gap-3 w-full">
            <li className=' uppercase font-medium text-sm cursor-pointer  text-gray-100 hover:text-gray-50 hover:scale-105 duration-150'>home</li>
            <li className=' uppercase font-medium text-sm cursor-pointer text-gray-100 hover:text-gray-50 hover:scale-105 duration-150 '>servicios</li>
            <li className=' uppercase font-medium text-sm cursor-pointer text-gray-100 hover:text-gray-50 hover:scale-105 duration-150 '>nosotros</li>
            <li className=' uppercase font-medium text-sm cursor-pointer text-gray-100 hover:text-gray-50 hover:scale-105 duration-150 '>contacto</li>
          </ul>
        </nav>
  )
}
