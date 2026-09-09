import React from 'react';

const professionalImages = [
  {
    id: 1,
    src: '/assets/gallary3.png',
    title: 'Technical Execution Insight',
    caption: 'Detailed visualization of technique for precision adjustments.'
  },
  {
    id: 2,
    src: '/assets/gallary2.png',
    title: 'Identifying Athlete Tendencies',
    caption: 'Analyze and adapt based on historical performance patterns.'
  },
  {
    id: 3,
    src: '/assets/gallary.png',
    title: 'Drill-to-Fight Connection',
    caption: 'Evaluate how specific training translates to real results.'
  }
];

const CombatGallerySection = () => {
  return (
    <section id="gallery" className="grid-lines bg-[#050505] py-14 md:py-12">
      <div className="container-shell">
        
        {/* 3-Image Row Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {professionalImages.map((image) => (
            <article
              key={image.id}
              className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[2rem] border border-[#262626] bg-[#0D0D0D] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:border-[#3A3A3A] hover:shadow-[0_16px_45px_rgba(0,0,0,0.5)] sm:p-8"
            >
              
              {/* Absolute Background Image */}
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,.08)_15%,rgba(5,5,5,.18)_42%,rgba(5,5,5,.9)_100%)]" />

              {/* Bottom Content: Title and Caption */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-black uppercase tracking-tight text-[#F5F5F5]">
                  {image.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  {image.caption}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CombatGallerySection;