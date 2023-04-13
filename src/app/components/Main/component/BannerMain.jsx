import Image from "next/image";
import chacon from "../../../../../public/Chacon.png";
import chononos from "../../../../../public/Chononos.png";
import Cifra from "../../../../../public/Cifra.png";
import MasDeporte from "../../../../../public/MasDeporte.png";
import shell from "../../../../../public/shell.png";
import Fusion from "../../../../../public/Fusion.png";


export default function BannerMain() {


const arraySponsor=[
  {
    src:chacon,
    alt:'chacon',
    id:1,
  },
  {
    src:chononos,
    alt:'Chonono',
    id:2,
  },
  {
    src:Cifra,
    alt:'/cifra',
    id:3,
  },
  {
    src:Fusion,
    alt:'Fusion',
    id:'4',
  },
  {
    src:MasDeporte,
    alt:'MasDeporte',
    id:5,
  },
  {
    src:shell,
    alt:'shell',
    id:6,
  },

]


  return (
    <div className="px-8 py-20 bg-orange-400 text-blue-600">
      <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
       
       {

        arraySponsor.map(sponsor=>(

          <Image
          height={100}
          width={100}
          quality={100}
          key={sponsor.id}
          className="h-48 aspect-video rounded-sm object-scale-down object-center bg-gray-100 w-1/2"
          src={sponsor.src}
          alt={sponsor.alt}
          />
          ))
         }
    
      </div>
    </div>
  );
}
