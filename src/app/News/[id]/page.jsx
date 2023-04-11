"use client"
import { fetchGoogleNews } from '@/app/api/services/fetchGoogleSheet';
import CardNoticia from '@/app/components/Main/component/CardNoticia';
import Skeletor from '@/app/components/Skeletor';
import { useQuery } from '@tanstack/react-query';

export default function News({params}) {
    const { id } = params;
    const {data,error,isLoading,isFetching} = useQuery([id], fetchGoogleNews);
 
  const news=data?.data?.filter(e=>e.id==id)

if(isLoading && !news)return(

  <Skeletor/>
)
return(  <CardNoticia  
  label='news'
  id={id} 
 title={news[0].titulo}
 date={news[0].fecha}
 image={news[0].imagen}
 >
   {news[0].noticia}
 </CardNoticia>
)
}
