import { notFound } from "next/navigation";

import { getPrivacyPolicy } from "@/lib/cms";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { PrivacyPolicyHero } from "@/components/privacy-policy/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "@/components/privacy-policy/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy | Combat Sports Analysis",
  description: "Privacy Policy for Combat Sports Analysis.",
};

export const revalidate = 60;

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicy();

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />

      {data.hero && <PrivacyPolicyHero {...data.hero} />}

      <main>
        <PrivacyPolicyContent
          effectiveDate={data.effectiveDate}
          lastUpdated={data.lastUpdated}
          introduction={data.introduction}
          sections={data.sections}
        />
      </main>

      <Footer />
    </>
  );
}