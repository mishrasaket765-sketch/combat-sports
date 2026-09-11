import { notFound } from "next/navigation";

import { getAbout } from "@/lib/cms";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { AboutHero } from "@/components/about/AboutHero";
import { PerformanceSection } from "@/components/about/PerformanceSection";
import { ProgressSection } from "@/components/about/ProgressSection";
import { AboutFeatureGrid } from "@/components/about/AboutFeatureGrid";
import { ModernAthleteSection } from "@/components/about/ModernAthleteSection";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata = {
  title: "About | Combat Sports Analysis",
  description:
    "Learn more about Combat Sports Analysis and how our platform helps combat sports athletes measure performance, track progress, set goals, analyze training, and improve.",
};

export const revalidate = 60;

export default async function AboutPage() {
  const data = await getAbout();

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
              {data.hero && <AboutHero {...data.hero} />}


      <main>

        {data.performance && (
          <PerformanceSection {...data.performance} />
        )}

        
        {data.progress && (
          <ProgressSection {...data.progress} />
        )}

       
        {data.features && (
          <AboutFeatureGrid {...data.features} />
        )}

       
        {data.modernAthlete && (
          <ModernAthleteSection {...data.modernAthlete} />
        )}

        
        {data.cta && <AboutCTA {...data.cta} />}
      </main>

      <Footer />
    </>
  );
}