import React from "react";

export function VisualFeatureRightImg({
  imageSrc = "assets/feature-right-img.png",
  imageAlt = "Athlete training analysis",
  features = [
    "Create Fighters for Life",
    "Forge Mental Toughness",
    "Build Strength"
  ],
}) {
  return (
    <section className="grid-lines bg-[#050505] py-20 md:py-32">
      <div className="container-shell">
        <div className="grid overflow-hidden rounded border border-[#262626] bg-[#141414] lg:grid-cols-[1fr_1fr]">
          
          {/* Left Side: Image Container */}
          <div className="relative min-h-[320px] bg-[#050505] lg:min-h-[580px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover opacity-85"
            />
            
            {/* Visual Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,10,18,.18),transparent_40%),linear-gradient(to_bottom,rgba(5,5,5,.05)_20%,rgba(5,5,5,.88)_100%)]" />
          </div>

          {/* Right Side: Content Container */}
          <div className="flex flex-col justify-between bg-[#141414] p-8 md:p-12 lg:p-16">
            <div>
              <h2 className="mt-4 text-3xl font-semibold font-black capitalize tracking-tight text-[#d20a12] md:text-4xl lg:text-4xl">
                THE MISSION
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#A1A1AA] md:text-base">
                At <b className="text-[#F5F5F5]">Combat Sports Analysis</b>, our mission is to build stronger, more disciplined, and confident individuals through the power of MMA and combat sports. We develop your skills, fitness, mindset, and resilience so you can face every challenge with strength and determination. Train hard, grow stronger, and become the fighter you are capable of being.
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