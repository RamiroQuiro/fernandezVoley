import GaleriaFoto from "./GaleriaFoto";

export default function galeria() {
 

  return (
    <div className="w-full container flex items-center mx-auto flex-col gap-5 py-20">
      <h1 className="  md:text-4xl  md:text-start text-center text-2xl z-10 font-bold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr  to-gray-300 from-gray-200 ">
        Galeria{" "}
      </h1>
      <GaleriaFoto/>
    </div>
  );
}
