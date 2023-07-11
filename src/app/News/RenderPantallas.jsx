"use client"
import { useState } from 'react';
import FormularioCargaNoticia from './FormularioCargaNoticia';
import GaleriaNoticiasExistentes from './GaleriaNoticiasExistentes';

export default function RenderPantallas({pantalla,setPantalla}) {
const [idSelect, setIdSelect] = useState(null)  
    const editarNews=(id)=>{
        setIdSelect(id)
    }

    switch (pantalla) {
        case "noticias":
            return <GaleriaNoticiasExistentes selectID={editarNews} setPantalla={setPantalla}/>
            break;
        case "cargarNews":
            return <FormularioCargaNoticia idSelect={idSelect}/>
        default:
            break;
    }
}
