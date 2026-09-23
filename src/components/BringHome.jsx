import React from 'react';
import { motion } from 'framer-motion';


export default function BringHome() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center bg-[#EFE5D3]">
      {/* 
        ========================================================================
        DEVELOPER NOTE: ADJUST BRING HOME BACKGROUND IMAGE ALIGNMENT (ABOVE FOOTER) HERE
        - You can change `object-center` to a custom alignment class (e.g., `object-[20%_center]`
          or `object-[50%_60%]`) to adjust the background image positioning visible behind
          the rounded top corners of the footer.
        ========================================================================
      */}
      <img
        src="/assets/elixora last page-image.png"
        alt="Trusted by families"
        className="absolute inset-0 w-full h-full object-cover object-[20%_center] md:object-[20%_center]"
      />


      {/* Gradient Overlay for Text Readability - Fading right-to-left */}
      <div className="absolute inset-0 bg-black/30 md:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#20120c]/90 md:from-[#20120c]/85 via-[#20120c]/60 md:via-[#20120c]/40 to-transparent" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-left flex flex-col items-start"
        >
          <h2 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight drop-shadow-md">
            Bring Home the <br />
            Essence of <br />
            <span className="italic font-normal">Pure Living</span>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-brand-cream hover:bg-brand-gold text-brand-brown font-serif text-base font-medium rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-103 active:scale-97">
              Shop Now
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-brand-cream hover:bg-brand-gold text-brand-brown font-serif text-base font-medium rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-103 active:scale-97">
              Explore More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
