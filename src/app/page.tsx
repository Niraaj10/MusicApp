import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
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
        <Instructors />
        <Footer />

      </main>
    </>
  );
}
