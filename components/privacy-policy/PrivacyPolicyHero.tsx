import Image from "next/image";
import {urlFor} from "@/sanity/lib/image";

interface PrivacyPolicyHeroProps {
  title: string;
  backgroundImage: any;
}

export function PrivacyPolicyHero({
  title,
  backgroundImage,
}: PrivacyPolicyHeroProps) {
  const imageUrl = urlFor(backgroundImage)
    .width(2400)
    .quality(85)
    .auto("format")
    .url();

  return (
    <section className="relative isolate min-h-[420px] overflow-hidden bg-[#050505] md:min-h-[500px]">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      )}

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl items-center pt-16 md:min-h-[500px] md:px-10 md:pb-20 lg:px-12">
        <div>

          <h1 className="max-w-4xl text-4xl font-black uppercase tracking-[-0.04em] text-[#F5F5F5] sm:text-4xl md:text-4xl lg:text-4xl">
            {title}
          </h1>
                    <div className="mt-5 h-[2px] w-[40%] bg-[#D20A12]" />

        </div>
      </div>
    </section>
  );
}