import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { VisualFeatureSection } from "@/components/VisualFeatureSection";
import CombatGallerySection from "@/components/CombatGallerySection";
import DownloadAppSection from "@/components/DownloadAppSection";
import { VisualFeatureRightImg } from "@/components/VisualFeatureRightImg";
export default function HomePage() {
  return (
    <>
    <Navbar/>
    <Hero />
    <VisualFeatureSection/>
    <CombatGallerySection/>
    <VisualFeatureRightImg/>
    <DownloadAppSection/>
    <Footer />
      </>
    
  );
}
