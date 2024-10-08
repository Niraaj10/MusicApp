import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased">
        {/* <h1>HELLO I"MM NIRAAAAAAJ</h1> */}

        <HeroSection />
        <FeaturedCourses />

      </main>
    </>
  );
}
