import Image from "next/image";
import Banner from "./sections/Banner";
import CleanRisk from "./components/CleanRisk/CleanRisk";
import Framework from "./sections/Framework";
import WealthManagement from "./sections/WealthManagement";
import Testimonials from "./sections/Testimonials";
import WantPart from "./sections/WantPart";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Banner/>
      <CleanRisk/>
      <Framework/>
      <WealthManagement/>
      <Testimonials/>
      <WantPart />
      <Footer />
    </>
  );
}
