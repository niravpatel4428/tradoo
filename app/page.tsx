import Image from "next/image";
import Banner from "./sections/Banner";
import Framework from "./sections/Framework";
import WantPart from "./sections/WantPart";
import CleanRisk from "./components/CleanRisk/CleanRisk";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Banner/>
      <CleanRisk/>
      <Framework/>
      <Testimonials/>
      <WantPart />
      <Footer />
    </>
  );
}
