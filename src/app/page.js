import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <Header/>
    <Main/>
    <Footer/>
    </>
  );
}
