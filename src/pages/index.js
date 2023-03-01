import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoText from "@/components/VideoText";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <AboutUs />
      <VideoText />
      <Footer />
    </div>
  );
}
