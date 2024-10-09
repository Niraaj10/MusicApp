import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicCards from "@/components/MusicCards";
import UpcomingWeb from "@/components/UpcomingWeb";
import WhyUsSection from "@/components/WhyUsSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased">
        {/* <h1>HELLO I"MM NIRAAAAAAJ</h1> */}

        <HeroSection />
        <FeaturedCourses />
        <WhyUsSection />
        <MusicCards />
        <UpcomingWeb />

      </main>
    </>
  );
}
