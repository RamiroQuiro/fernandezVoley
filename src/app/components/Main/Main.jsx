import React from "react";
import SectinNews from "./component/SectinNews";
import BannerMain from "./component/BannerMain";
import Multimedia from "./component/Multimedia";
import BannerSponsor from "./component/BannerSponsor";
import Contact from "./component/Contact";

export default function Main() {
  return (
    <main>
      <SectinNews />
      <BannerMain />
      <Multimedia />
      <BannerSponsor />
      <Contact/>
    </main>
  );
}
