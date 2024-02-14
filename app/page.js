import Image from "next/image";
import Hero from "./(pages)/Hero";
import Award from "./(pages)/Award";
import Services from "./(pages)/Services";
import Companies from "./(pages)/Companies";
import Footer from "./(components)/Footer";
import Industries from "./(pages)/Industries";
import PartWrapper from "./(pages)/PartWrapper";
import Carousal from "./(pages)/Carousal";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="">
      <Carousal/>
        <Award/>
        <Services/>
        <Companies/>  
        <Industries/>
        
        <PartWrapper/>
      </div>
      <Footer/>
    </main>
  );
}
