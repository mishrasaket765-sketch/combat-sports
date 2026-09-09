export function ContactSection() {
  return (
    <section className="bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">

          {/* Title */}
          <h2 className="text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
            CONTACT US
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-base leading-7 text-[#A1A1AA]">
            If you have questions regarding these Terms, the Service, your
            account, or your subscription, please get in touch with Combat
            Sports Tech LLC through our support team.
          </p>

          {/* Action Button */}
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#D20A12] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#b0080f] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D20A12] active:scale-[0.98]"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}