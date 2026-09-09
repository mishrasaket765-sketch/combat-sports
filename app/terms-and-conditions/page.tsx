import { notFound } from "next/navigation";

import { getTerms } from "@/lib/cms";
import { Footer } from "@/components/Footer";

import { TermsHero } from "@/components/terms/TermsHero";
import { TermsTableOfContents } from "@/components/terms/TermsTableOfContents";
import { TermsContent } from "@/components/terms/TermsContent";
import { ContactSection } from "@/components/terms/ContactSection";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Terms & Conditions | Combat Sports Analysis",
  description:
    "Terms & Conditions governing the use of Combat Sports Analysis.",
};

export default async function TermsPage() {
  const data = await getTerms();

  if (!data) {
    notFound();
  }

  return (
    <>
    <Navbar/>
     <TermsHero
        title={data.title || "Terms & Conditions"}
        effectiveDate={data.effectiveDate}
        lastUpdated={data.lastUpdated}
        logoSrc="/logo.jpg"
        bgImageSrc="/assets/termshero.png"
      />
    <main className="min-h-screen bg-[#050505] grid-lines text-[#F5F5F5]">
           <section className="bg-[#050505]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:py-24">
          {/* Table of Contents */}
          <TermsTableOfContents
            sections={data.sections ?? []}
          />

          {/* Main Content */}
          <TermsContent
            sections={data.sections ?? []}
          />
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>

    </>
    
  );
}