import Image from "next/image";
import Banner from "./sections/Banner";
import CleanRisk from "./components/CleanRisk";
import Framework from "./sections/Framework";
import Investment from "./sections/investment";
import Benifits from "./sections/Benifits";
import WealthManagement from "./sections/WealthManagement";
import Testimonials from "./sections/Testimonials";
import WantPart from "./sections/WantPart";

export default function Home() {
  return (
    <main>
      <Banner/>
      <CleanRisk/>
      <WealthManagement/>
      <Framework/>
      <Investment/>
      <Benifits/>
      <Testimonials/>
      <WantPart />
    </main>
  );
}
