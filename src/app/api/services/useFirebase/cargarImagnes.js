import  { getDoc,  doc, setDoc, updateDoc, arrayUnion }from "firebase/firestore"
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

 const docRef=doc(db,'FVoley/LfRR14tVEccsxIL6jIDU')

const cargarImagenes=async (img,descripcion)=>{

 const fileRef=ref(storage,`Fotos/${descripcion}`)   
 await uploadBytes(fileRef,img).then(async()=>{
    await getDownloadURL(fileRef).then(async(url)=>{
        await updateDoc(docRef,{
            imagenes:arrayUnion({url:url,descripcion:descripcion})
        })
    })
 })

}
const leerGaleria=async()=>{
    const data =await getDoc(docRef)
   return data.data()  //Obtener todo el contenido del documento.

}

export { cargarImagenes,leerGaleria }