import React from 'react'
import FormularioCargaImagen from './FormularioCargaImagen';
import FormularioCargaNoticia from './FormularioCargaNoticia';
import GaleriaNoticiasExistentes from './GaleriaNoticiasExistentes';

export default function RenderPantallas({pantalla}) {
  
    

    switch (pantalla) {
        case "noticias":
            return <GaleriaNoticiasExistentes/>
            break;
        case "cargarNews":
            return <FormularioCargaNoticia/>
        default:
            break;
    }
}
