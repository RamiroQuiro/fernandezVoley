import Image from "next/image";

export default function BannerMain() {
  const arraySponsor = [
    
    {
      src: '/MuniFer.jpg',
      alt: "MuniFer",
      id: 4,
    },
    {
      src: '/publicite.jpg',
      alt: "Publicite",
      id: 5,
    },
    // {
    //   src: MyM,
    //   alt: "MyM",
    //   id: 6,
    // },
  ];

  return (
    <div className="md:px-8 py-10 bg-orange-300 text-blue-600">
      <div className="relative w-full flex flex-wrap mx-auto items-center justify-around md:gap-4 gap-2  p-2">
        {arraySponsor.map((sponsor) => (
          <Image
            width={100}
            height={100}
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
