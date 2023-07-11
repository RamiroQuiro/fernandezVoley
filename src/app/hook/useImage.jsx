"use client"
import { useEffect, useState } from "react";

export default function useFile() {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  const handleImage = (e) => {
     setFileName(e.target.files[0].name);
     setFile(e.target.files[0]);
  };

  const cargarImagen = (e) => {
    // guardarImages(file, fileName)
    setPreviewURL(null)
    setFileName(null)
  }

  return { handleImage, cargarImagen, previewURL, fileName,file,setPreviewURL };
}
