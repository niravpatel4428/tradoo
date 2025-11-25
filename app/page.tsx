import Image from "next/image";
import Footer from "./sections/Footer";
import WantPart from "./sections/WantPart";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <Testimonials/>
      <WantPart />
      <Footer />
    </>
  );
}
