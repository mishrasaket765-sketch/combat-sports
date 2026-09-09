import React from "react";

export function VisualFeatureSection({
  imageSrc = "/assets/home-feature.png",
  imageAlt = "Athlete training analysis",
  features = [
    "In-Depth Fight Breakdowns",
    "Data-Driven Performance Insights",
    "MMA, Boxing & Kickboxing Analysis",
  ],
}) {
  return (
    <section className="grid-lines bg-[#050505] py-20 md:py-32">
      <div className="container-shell">
        <div className="overflow-hidden rounded border border-[#262626] bg-[#141414] grid lg:grid-cols-[1fr_1fr]">
          {/* Left Side: Image Container */}
          <div className="relative min-h-[320px] bg-[#050505] lg:min-h-[580px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover opacity-85"
            />

            {/* Visual Overlays matching the Combat Sports Analysis brand */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,10,18,.18),transparent_40%),linear-gradient(to_t,rgba(5,5,5,.9)_0%,transparent_60%)]" />
          </div>

          {/* Right Side: Content Container */}
          <div className="flex flex-col justify-between bg-[#141414] p-8 md:p-12 lg:p-16">
            <div>
              <h2 className="mt-4 text-3xl font-semibold font-black capitalize tracking-tight text-[#F5F5F5] md:text-3xl lg:text-3xl">
                See the Fight <span className="text-[#d20a12]">Beyond the Final Bell</span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#A1A1AA] md:text-base">
                Every fight tells a story. <b className="text-[#F5F5F5]">Combat Sports Analysis</b> helps you
                understand it. We break down the techniques, tactics,
                statistics, and key moments that shape MMA, boxing, and
                kickboxing. From a perfectly timed counter to the strategy
                behind a dominant performance, our analysis goes deeper than the
                scorecard to show what happened, how it happened, and why it
                mattered. Watch smarter. Analyze deeper. Understand the fight.
              </p>

              {/* Feature Highlights */}
              <div className="mt-8 border-t border-[#262626] pt-8">
                <ul className="space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#D20A12]" />
                      <span className="text-sm font-semibold text-[#F5F5F5]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}