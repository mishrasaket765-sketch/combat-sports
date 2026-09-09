import Image from 'next/image';
import Link from 'next/link';

const DownloadAppSection = () => {
  return (
    <section className="overflow-hidden bg-[#050505] grid-lines py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column: Content */}
          <div className="mx-auto flex max-w-xl flex-col justify-center text-center lg:mx-0 lg:text-left">
            <h2 className="mb-8 text-3xl font-black uppercase leading-none tracking-tight text-[#F5F5F5] sm:text-3xl lg:text-3xl">
              Download The App
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-[#A1A1AA] sm:text-xl">
              Experience fitness at your fingertips with the Combat Sports Analysis App! Fast-track your access to the club, class schedules, membership management, and more.
            </p>
            
            {/* Store Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link 
                href="#" 
                className="relative block h-12 w-36 transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-44"
              >
                <Image
                  src="/assets/appstore.png"
                  alt="Download on the App Store"
                  fill
                  className="object-contain"
                />
              </Link>

              <Link 
                href="#" 
                className="relative block h-12 w-36 transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-44"
              >
                <Image
                  src="/assets/playstore.png"
                  alt="Get it on Google Play"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Phone Mockups */}
          <div className="relative mt-8 flex w-full justify-center lg:mt-0 lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[550px] rounded-2xl sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/assets/download-img.png"
                alt="Combat Sports Analysis App Interface"
                fill
                className="rounded-4xl object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;