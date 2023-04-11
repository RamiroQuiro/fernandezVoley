import { fetchGoogle } from "@/app/api/services/fetchGoogleSheet";
import Hero from "./Hero";

export default async function Header() {
  const {data} = await fetchGoogle();

  return (
    <header className="relative  flex flex-col items-center justify-center w-full h-screen  z-0 text-neutral-600">
  <Hero/>
  
    </header>
  );
}
