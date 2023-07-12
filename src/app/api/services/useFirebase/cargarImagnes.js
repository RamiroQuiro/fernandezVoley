import {
  getDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  collectionGroup,
  onSnapshot,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const docRef = doc(db, "FVoley/LfRR14tVEccsxIL6jIDU");

const cargarImagenes = async (img, descripcion, isFunction) => {
  const fileRef = ref(storage, `Fotos/${descripcion}`);
  await uploadBytes(fileRef, img).then(async () => {
    await getDownloadURL(fileRef).then(async (url) => {
      await updateDoc(docRef, {
        imagenes: arrayUnion({ url: url, descripcion: descripcion }),
      });
      isFunction(false);
    });
  });
};
const leerGaleria = async () => {
  const data=await getDoc(docRef).then((data)=>{
    const imagenes= (data.data())?.imagenes?.reverse()
    const noticias= (data?.data())?.noticias?.reverse()
    return { imagenes, noticias}
  })
  return data
};

const cargarNoticia = async (obj, img) => {
  const uuidv = uuidv4().slice(0, 4);
  const fileRef = ref(storage, `Fotos/${obj.imgName}`);
  obj = { ...obj, ...{ id: uuidv } };

  await uploadBytes(fileRef, img).then(async () => {
    await getDownloadURL(fileRef).then(async (url) => {
      await updateDoc(docRef, {
        noticias: arrayUnion({ ...obj, url: url }),
      }).then(() => {
        toast.success("Noticia Cargada");
      }).catch((err)=>toast.error('no se pudo cargar'))
    });
  });
};

const removeImage = async (uid, fileName, newData) => {
  const fileRef = ref(storage, `Fotos/${fileName}`);
  deleteObject(fileRef)
    .then(() => {
      updateDoc(docRef, {
        noticias: newData,
      });
      toast.success("Eliminado", {
        duration: "350",
      });
    })
    .catch((err) => console.log(err));
};

const actualizarNoticias=async(array)=>{
  updateDoc(docRef, {
    noticias: array,
  }).then(()=>{
    toast.success("Modificado", {
      duration: "350",
    });
  })
}
export { cargarImagenes, leerGaleria, actualizarNoticias,cargarNoticia, removeImage };
