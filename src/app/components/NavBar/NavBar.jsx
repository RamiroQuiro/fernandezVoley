import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-red-500 flex items-center justify-evenly w-full py-3">
          <ul className="flex items-end justify-evenly gap-3">
            <li>home</li>
            <li>servicios</li>
            <li>nosotros</li>
            <li>contacto</li>
          </ul>
        </nav>
  )
}
