import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ContactForm from "@/components/contact/ContactForm ";

import {ContactHero} from "@/components/contact/ContactHero";

export const metadata = {
  title: "Contact | Combat Sports Analysis",
  description:
    "Get in touch with Combat Sports Analysis for professional combat sports analysis and insights.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHero />
        <ContactForm/>
      </main>

      <Footer />
    </>
  );
}
