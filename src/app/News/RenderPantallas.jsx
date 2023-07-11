import React from 'react'
import FormularioCargaImagen from './FormularioCargaImagen';
import FormularioCargaNoticia from './FormularioCargaNoticia';

export default function RenderPantallas({pantalla}) {
  
    

    switch (pantalla) {
        case "noticias":
            return <FormularioCargaImagen/>
            break;
        case "cargarNews":
            return <FormularioCargaNoticia/>
        default:
            break;
    }
}
