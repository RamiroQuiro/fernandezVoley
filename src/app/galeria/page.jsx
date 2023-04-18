import GaleriaFoto from "./GaleriaFoto";
import Toastering from "./Toastering";
import ModalGaleria from "./modalCargaGaleria/ModalGaleria";

export default function galeria() {
  return (
    <div className="w-full container flex items-center mx-auto flex-col gap-5 md:py-20 py-10 min-h-screen">
      <h1 className="  text-4xl  md:text-start text-center  z-10 font-bold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr  to-gray-300 from-gray-200 ">
        Galeria{" "}
      </h1>
      <GaleriaFoto />
      <ModalGaleria />
      <Toastering/>
    </div>
  );
}
