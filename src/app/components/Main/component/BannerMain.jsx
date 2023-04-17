import Image from "next/image";
import chacon from "../../../../../public/Chacon.png";
import chononos from "../../../../../public/Chononos.png";
import Cifra from "../../../../../public/Cifra.png";
import MasDeporte from "../../../../../public/MasDeporte.png";
import shell from "../../../../../public/shell.png";
import Fusion from "../../../../../public/Fusion.png";

export default function BannerMain() {
  const arraySponsor = [
    {
      src: chacon,
      alt: "chacon",
      id: 1,
    },
    {
      src: chononos,
      alt: "Chonono",
      id: 2,
    },
    {
      src: Cifra,
      alt: "/cifra",
      id: 3,
    },
    {
      src: Fusion,
      alt: "Fusion",
      id: "4",
    },
    {
      src: MasDeporte,
      alt: "MasDeporte",
      id: 5,
    },
    {
      src: shell,
      alt: "shell",
      id: 6,
    },
  ];

  return (
    <div className="md:px-8 py-10 bg-orange-300 text-blue-600">
      <div className="relative w-full flex flex-wrap mx-auto items-center justify-around md:gap-4 gap-2  p-2">
        {arraySponsor.map((sponsor) => (
          <Image
            height={100}
            width={100}
            quality={75}
            priority
            key={sponsor.id}
            className="md:h-48 h-24 aspect-video  object-coveer object-center bg-gray-50 md:w-[25%] w-[45%] rounded-md p-2"
            src={sponsor.src}
            alt={sponsor.alt}
          />
        ))}
      </div>
    </div>
  );
}
