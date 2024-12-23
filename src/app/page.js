import { AllInfosSection } from "@/components/allinfos";
import { CharactersSection } from "@/components/characters";
import { DiferentsImages } from "@/components/diferentesimg";
import { DisponiblePlayStore } from "@/components/disponiblePS";
import { FooterSection } from "@/components/footer";
import { HeaderSection } from "@/components/header";
import { HomeSection } from "@/components/home";
import { LastVideosSection } from "@/components/lastVideos";
import { SlidesSection } from "@/components/slide";

export default function Home() {
  return (
    <>
      <HeaderSection/>
      <HomeSection/>
      <LastVideosSection/>
      <DiferentsImages/>
      <DisponiblePlayStore/>
      <CharactersSection/>
      <SlidesSection/>
      <AllInfosSection/>
      <FooterSection/>
    </>
  );
}
