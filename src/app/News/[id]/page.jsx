"use client"
import { fetchGoogle, fetchGoogleNews } from '@/app/api/services/fetchGoogleSheet';
import { leerGaleria } from '@/app/api/services/useFirebase/cargarImagnes';
import CardNoticia from '@/app/components/Main/component/CardNoticia';
import Skeletor from '@/app/components/Skeletor';
import { useQuery } from '@tanstack/react-query';

export default function News({params}) {
    const { id } = params;
    const { data, error,isLoading } = useQuery(["traerNoti"], leerGaleria);
 
    const news=data?.noticias?.filter(e=>e.id==id)[0]

    
if(isLoading && !news)return(

  <Skeletor/>
)
return(  <CardNoticia  
  label='news'
  id={id} 
 title={news?.titulo}
 date={news?.fecha}
 image={news?.url}
 >
   {news?.textNoticia}
 </CardNoticia>
)
}
