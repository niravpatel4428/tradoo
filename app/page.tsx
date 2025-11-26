import Image from "next/image";
import Banner from "./sections/Banner";
import Framework from "./sections/Framework";
import Investment from "./sections/investment";
import Benifits from "./sections/Benifits";

export default function Home() {
  return (
    <>
      <Banner/>
      <Framework/>
      <Investment/>
      <Benifits/>
    </>
  );
}
