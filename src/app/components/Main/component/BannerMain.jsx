import Image from "next/image";
import Bichito from "../../../../../public/Bichito.jpg";
import MuniFer from "../../../../../public/MuniFer.jpg";
import MyM from "../../../../../public/MyM.jpg";

export default function BannerMain() {
  const arraySponsor = [
    
    {
      src: MuniFer,
      alt: "MuniFer",
      id: 4,
    },
    {
      src: Bichito,
      alt: "Bichito",
      id: 5,
    },
    {
      src: MyM,
      alt: "MyM",
      id: 6,
    },
  ];

  return (
    <div className="md:px-8 py-10 bg-orange-300 text-blue-600">
      <div className="relative w-full flex flex-wrap mx-auto items-center justify-around md:gap-4 gap-2  p-2">
        {arraySponsor.map((sponsor) => (
          <Image
            
            quality={75}
            priority
            key={sponsor.id}
            className="md:h-48 h-24 aspect-video  object-contain object-center bg-gray-50 md:w-[25%] w-[45%] rounded-md p-2"
            src={sponsor.src}
            alt={sponsor.alt}
          />
        ))}
      </div>
    </div>
  );
}
