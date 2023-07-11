import  { getDoc,  doc, setDoc, updateDoc, arrayUnion }from "firebase/firestore"
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

 const docRef=doc(db,'FVoley/LfRR14tVEccsxIL6jIDU')

const cargarImagenes=async (img,descripcion,isFunction)=>{

 const fileRef=ref(storage,`Fotos/${descripcion}`)   
 await uploadBytes(fileRef,img).then(async()=>{
    await getDownloadURL(fileRef).then(async(url)=>{
        await updateDoc(docRef,{
            imagenes:arrayUnion({url:url,descripcion:descripcion})
        })
        isFunction(false)
    })
 })

}
const leerGaleria=async()=>{
    const data =await getDoc(docRef)
   return data.data()  //Obtener todo el contenido del documento.

}


const actualizarNoticias=async(obj,img)=>{
    const uuidv=uuidv4().slice(0, 4) 
    const fileRef=ref(storage,`Fotos/${obj.imgName}`)   
    obj={...obj,...{id:uuidv}}
    
    await uploadBytes(fileRef,img).then(async()=>{
       await getDownloadURL(fileRef).then(async(url)=>{
           await updateDoc(docRef,{
               noticias:arrayUnion({...obj,url:url})
           })
       })
    })
}


export { cargarImagenes,leerGaleria ,actualizarNoticias}
