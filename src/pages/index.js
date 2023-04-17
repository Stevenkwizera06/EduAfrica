import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoText from "@/components/VideoText";
import GridMenu from "@/components/GridMenu";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <GridMenu styles={"md:hidden"} />
      <AboutUs />
      <VideoText />
      <Footer />
    </div>
  );
}
