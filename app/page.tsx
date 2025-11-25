import Image from "next/image";
import Footer from "./sections/Footer";
import WantPart from "./sections/WantPart";
import Testimonials from "./sections/Testimonials";
import Banner from "./sections/Banner";
import Framework from "./sections/Framework";

export default function Home() {
  return (
    <>
      <Testimonials/>
      <WantPart />
      <Footer />
      <Banner/>
      <Framework/>
    </>
  );
}
