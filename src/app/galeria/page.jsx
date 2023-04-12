"use client"
import FilasGaleria from '../components/Main/component/FilasGaleria'
import { useQuery } from '@tanstack/react-query';
import { fetchGoogleGaleria } from '../api/services/fetchGoogleSheet';

export default function galeria() {
  const { data, error } = useQuery(["GaleriaOmpleta"], fetchGoogleGaleria)
console.log(data?.data?.length /3)

  if (error) return <div>Carga de galerias fallida</div>;

  return (
    <div className='w-full container flex items-center mx-auto flex-col gap-5 py-20'>
       <h1 className="  md:text-4xl  md:text-start text-center text-2xl z-10 font-bold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr  to-gray-300 from-gray-200 ">
        Galeria{" "}
      </h1>
      <div className="container h-full  flex md:flex-row flex-col items-center group  justify-center gap-6 mx-auto bg-gray-50/50 backdrop-blur-sm px-5 py-10 rounded">
      <FilasGaleria arrayImagenes={data?.data?.reverse().slice(0, 3)} />
      <FilasGaleria arrayImagenes={data?.data?.slice(3, 6)} />
    </div>
  </div>)
}
