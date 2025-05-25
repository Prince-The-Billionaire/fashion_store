import ChildrenDayBanner from "@/components/Banner";
import Experience3D from "@/components/Experience3D";
import Exquisite from "@/components/Exquisite";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageReveal from "@/components/ImageReveal";
import JoinWhatsAppForm from "@/components/JoinWhatsAppForm";
import Sidebar from "@/components/Sidebar";
import SocialProof from "@/components/SocialProof";
import Store from "@/components/Store";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Sidebar/>
      <Hero/>
      <SocialProof/>
      {/* <Exquisite/> */}
      <ImageReveal/>
      <Store/>
      <div className="px-12">
        <ChildrenDayBanner />
        <JoinWhatsAppForm/>
      </div>
      {/* <Experience3D/> */}
      <Footer/>
    </main>
  );
}
