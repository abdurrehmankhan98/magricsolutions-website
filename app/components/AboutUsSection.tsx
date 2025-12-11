import Image from 'next/image';
import { WhatsAppButton } from './WhatsAppButton'; 

const AboutUsSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-6 bg-[#F7FFE9]">
      {/* Decorative Dots - Left */}
      <div className="absolute top-40 left-20 opacity-30">
        <div className="grid grid-cols-2 gap-3">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-lime-400" />
          ))}
        </div>
      </div>

      {/* Decorative Dots - Top Right */}
      <div className="absolute top-20 right-32 opacity-20">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          ))}
        </div>
      </div>

      {/* Background Glow - Left */}
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-lime-300 opacity-30 blur-3xl rounded-full" />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-full bg-amber-300 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-800 shadow-2xl border-yellow-300 border-2">
              About MagricSolutions
            </div>

            {/* Heading */}
            <h2 className="mb-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-4xl font-heading">
              We build personal brand websites
              <br />
              that feel clear, premium{' '}
              <span className="text-amber-500">&amp; trustworthy.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-xl">
              Most coaches and creators don&apos;t have a website problem — they have a
              clarity problem. The offer is strong, but the site doesn&apos;t explain
              it in a way that feels focused, confident and easy to trust.
            </p>
            <p className="text-gray-600 text-base mb-10 leading-relaxed max-w-xl">
              MagricSolutions helps personal brands turn messy, scattered online
              presence into a single, conversion-focused website that looks premium and
              makes it simple for people to say:{' '}
              <span className="font-semibold">&quot;Yes, I want to work with you.&quot;</span>
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Completed Sites */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-black text-lime-400 mb-3">50+</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Personal Brand Sites
                </h3>
                <p className="text-gray-600">launched for coaches &amp; creators</p>
              </div>

              {/* Satisfaction */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-black text-lime-400 mb-3">98%</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Client Satisfaction
                </h3>
                <p className="text-gray-600">based on delivered website projects</p>
              </div>
            </div>

            {/* CTA Button → WhatsApp */}
            <WhatsAppButton label="Book a Strategy Call" className="mt-2" />
          </div>

          {/* Right Content - Visuals */}
          <div className="relative w-full">
            {/* Testimonial Card 1 */}
            <div className="absolute top-0 left-0 z-20">
              <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 max-w-sm border border-lime-400/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_50px_rgba(0,0,0,0.10)]">
                <div className="flex items-start gap-4 mb-3">
                  {/* ROUND IMAGE */}
                  <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-lime-400">
                    <Image
                      src="/Mahmoud-Bartawi.png"
                      alt="Client Testimonial"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TEXT AREA */}
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      Mahmoud Bartawi
                    </h4>
                    <p className="text-sm text-gray-500">Host of BXB Podcast</p>

                    <div className="flex gap-1 mt-1 text-lime-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  “Before this, my online presence was scattered. The new website finally
                  feels like one clear home for my brand and makes it easy for listeners
                  to work with me.”
                </p>

                {/* Decorative Quote */}
                <div className="flex justify-end mt-3">
                  <div className="text-lime-400 text-3xl opacity-30 font-bold">❝</div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="absolute top-32 right-0 z-10">
              <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 max-w-sm border border-lime-400/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_50px_rgba(0,0,0,0.10)]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-16 h-16 rounded-full border-2 border-lime-400" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      Ahmad Kamal
                    </h4>
                    <p className="text-sm text-gray-500">Research &amp; Development</p>
                    <div className="flex gap-1 mt-1 text-lime-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  “We didn’t just design something beautiful — we built a website that
                  actually supports how we get leads and present our work.”
                </p>

                <div className="flex justify-end mt-3">
                  <div className="text-lime-400 text-3xl opacity-30 font-bold">❝</div>
                </div>
              </div>
            </div>

            {/* Lottie Illustration (optional, if you later uncomment) */}
            <div className="ml-16 transition-transform duration-300 hover:scale-105">
              <div className="relative w-64 md:w-72 lg:w-xl mt-96">
                {/* <Lottie animationData={laptopAnimation} loop autoplay /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
