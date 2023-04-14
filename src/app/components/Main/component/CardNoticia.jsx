
import Link from "next/link";
import Image from "next/image";
import ButtonVolver from "./buttonVolver";
export default function CardNoticia({
  label,
  children,
  title,
  date,
  image,
  id,
}) {


  if (label == "titulo")
    return (
      <Link
        href={"https://fernandezvoley.vercel.app/News/" + id}
        className=" w-full gap-3 mx-auto  group hover:no-underline focus:no-underline  grid grid-cols-1 lg:grid-cols-12 bg-gray-100 text-gray-700 p-3"
      >
        <div className="object-cover w-full h-64 relative rounded sm:h-96 lg:col-span-7 bg-gray-500">
          <Image
            src={image}
            alt={title}
            className="object-cover"
            quality={50}
            fill
          />
        </div>
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">{date}</span>
          <p className="truncate ...">{children}</p>
        </div>
      </Link>
    );

  if (label == "grid")
    return (
      <Link
        href={"https://fernandezvoley.vercel.app/News/" + id}
        className="md:max-w-xs min-w-[30%] w-full  mx-auto group hover:no-underline focus:no-underline animate-[aparecerDeArriba_1s] bg-gray-100 text-gray-700"
      >
        <div className=" w-full rounded h-52 relative bg-gray-500">
          <Image
            src={image}
            alt={title}
            className="object-cover"
            quality={50}
            fill
          />
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">{date}</span>
          <p className="truncate ...">{children}</p>
        </div>
      </Link>
    );
  if (label == "news")
    return (
      <section className="text-gray-600 min-h-screen flex py-16 flex-col bg-gray-50 w-full items-center justify-center">
      
        <div className="lg:w-4/5  px-5 py-24 mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 w-full relative">
            <Image
              src={image}
              alt={title}
              className="h-auto w-full object-cover"
              quality={100}
              fill
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {date}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>

            <p className="leading-relaxed">{children}</p>

            <div className="flex items-center justify-between">
              <span className="title-font font-medium text-2xl mr-5 text-gray-900"></span>
            </div>
          </div>
        </div>
        <ButtonVolver/>
      </section>
    );

  return (
    <section className="text-gray-600 min-h-screen flex  bg-gray-50 w-full items-center justify-center"></section>
  );
}
