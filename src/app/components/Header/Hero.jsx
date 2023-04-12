import Image from "next/image";
import Escudo from "../../../../public/Fv01.png";
export default function Hero() {
  return (
    <section className="h-full w-full relative">
      
      <div className="bg-gradient-to-b from-gray-800/80 backdrop-blur-sm via-gray-800/50 to-transparent h-[80vh] z-30 relative">
        <div className="container flex flex-col items-center px-4 py-32 mx-auto text-center">
          <h1 className="animate-glitch md:text-7xl  text-center text-5xl  font-extrabold leading-none tracking-tight  text-transparent bg-clip-text bg-gradient-to-r  from-orange-500 via-blue-400  to-orange-500">
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
      <div className="absolute w-full opacity-75 h-[100vh] top-0 left-0 overflow-hidden">
        <video className=" w-full h-[100vh] object-cover relative opacity-75" autoPlay='true'  muted='false' loop>
          <source src={"/voleyFernandez.mp4"}  />
        </video>
      </div>
    </section>
  );
}
