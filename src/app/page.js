import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div class="-z-0 relative flex h-screen w-full bg-black">
      <div class="w-full h-full shadow-innerLeftTop">
        <Image
          src="/images/bg-landing-page.jpeg"
          fill
          class="-z-50 w-full h-full top-0 left-0 object-cover rounded-2xl "
        />
        <div>
          {/* <Header /> */}
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
