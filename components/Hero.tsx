import Image from "next/image";
import { Button } from "./Button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="noise relative min-h-[90vh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.svg"
        aria-hidden="true"
      >
        <source src="/assets/hero-bg-video.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(210,10,18,.15),transparent_38%),linear-gradient(90deg,rgba(5,5,5,.88)_0%,rgba(5,5,5,.64)_45%,rgba(5,5,5,.28)_100%)]" />

      {/* Content */}
      <div className="relative z-10 container-shell flex min-h-[80vh] items-end">
        <div className="w-full max-w-5xl pb-10 pt-42 md:pb-14 lg:pb-16">

          {/* Heading */}
          <h1 className="display max-w-3xl text-5xl font-medium uppercase leading-[0.86] tracking-[-0.035em] text-[#F5F5F5]">
            Study the fight.
            <br />
            <span className="text-[#D20A12]">
              Change the outcome.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-[15px] leading-6 text-[#A1A1AA] md:mt-7 md:text-base md:leading-7">
            {site.tagline} Combat Sports Analysis turns training and fight
            information into a clearer performance picture for athletes,
            coaches, and teams.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center">

            <Button href="/about" variant="dark">
              Why we exist
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}