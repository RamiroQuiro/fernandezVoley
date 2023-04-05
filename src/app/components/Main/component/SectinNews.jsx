"use client";
import CardNoticia from "./CardNoticia";
import { useQuery } from "@tanstack/react-query";
import { fetchGoogleNews } from "@/app/api/services/fetchGoogleSheet";

export default function SectinNews() {
  const {
    data: { data },
    error,
    isLoading,
  } = useQuery(["NewsQuery"], fetchGoogleNews, {
    initialData: {
      data: [],
    },
    refetchOnMount: false,
    staleTime: 0,
    cacheTime: "Infinity",
    refetchInterval: 5000,
  });

  console.log(data);

  return (
    <section className="bg-gradient-to-t from-gray-100/80 via-gray-100/60 to-transparent backdrop-blur-sm text-gray-100  mx-auto  py-24">
      <h2 className="  md:text-4xl ml-32 md:text-start text-center text-2xl z-10 font-bold leading-none tracking-tight  lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr  to-gray-100 from-gray-200 ">
        Ultimas Noticias
      </h2>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {/* Última noticia */}
        <CardNoticia
          title={data[0]?.titulo}
          date={data[0]?.fecha}
          image={data[0]?.imagen}
        >
          {data[0]?.noticia}
        </CardNoticia>
        <div className="grid justify-center grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-100 text-gray-700"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500"
              src="https://source.unsplash.com/random/480x360?1"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-400">January 21, 2021</span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-100 text-gray-700"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500"
              src="https://source.unsplash.com/random/480x360?2"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-400">January 22, 2021</span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-100 text-gray-700"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500"
              src="https://source.unsplash.com/random/480x360?3"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-400">January 23, 2021</span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-100 text-gray-700 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500"
              src="https://source.unsplash.com/random/480x360?4"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-400">January 24, 2021</span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-100 text-gray-700 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500"
              src="https://source.unsplash.com/random/480x360?5"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-400">January 25, 2021</span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-100 text-gray-700 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500"
              src="https://source.unsplash.com/random/480x360?6"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-400">January 26, 2021</span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
}
