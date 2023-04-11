import Image from "next/image";
import Escudo from "../../../../public/Fv01.png";
export default function Hero() {
  return (
    <section className="h-full w-full">
      <div className="bg-gradient-to-b from-gray-800/80 backdrop-blur-sm via-gray-800/50 to-transparent h-[80vh]">
        <div className="container flex flex-col items-center px-4 py-32 mx-auto text-center">
          <h1 className=" md:text-7xl  text-center text-5xl  font-extrabold leading-none tracking-tight  text-transparent bg-clip-text bg-gradient-to-r  from-orange-500 via-blue-400  to-orange-500">
            Fernandez Voley
          </h1>
          <p className="mt-6 mb-8 text-lg font-semibold sm:mb-12 xl:max-w-3xl text-gray-500">
            Más que un club, una Familia!
          </p>
        </div>
        <div className="md:w-2/5 w-1/2 h-1/2 md:h-2/3 mx-auto -mt-20 relative 20 rounded-lg ">
          <Image
            src={Escudo}
            alt="Fernandez Voley"
            quality={50}
            fill
            sizes="150"
            className="object-contain mx-auto  rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
