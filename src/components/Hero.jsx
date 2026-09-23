import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="sticky top-0 h-screen pt-20 md:pt-0 flex items-center justify-end overflow-hidden bg-brand-sand z-0"
    >
      {/* 
        ========================================================================
        DEVELOPER NOTE: ADJUST BACKGROUND IMAGE ALIGNMENT / VIEWPORT POSITION HERE
        - On mobile, `bg-[20%_center]` shifts the image horizontally by 20% to center the bottle.
        - On desktop, `md:bg-left-bottom` aligns the image to the bottom-left.
        - You can change `20%` (horizontal percentage) or `center` (vertical position) to adjust the view.
        ========================================================================
      */}
      <div
        className="absolute inset-0 bg-cover bg-[22%_center] md:bg-left-bottom z-0"
        style={{
          backgroundImage: "url('/assets/hero-page.png')",
        }}
      >
        {/* Dark overlay on mobile to make white text readable directly on the background */}
        <div className="absolute inset-0 bg-black/40 md:bg-none" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 py-20 flex flex-col md:flex-row items-center justify-end">
        {/* Text Container aligned to the right (no container/card on mobile anymore) */}
        <div className="w-full md:w-1/2 lg:w-5/12 p-4 md:p-0 text-left">
          {/* Animated Heading (styled in white color on both mobile and desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-white leading-tight mb-6">
              The Essence of <br />
              <span className="italic font-normal text-brand-white/90">Pure Living</span>
            </h1>
          </motion.div>

          {/* Animated Paragraph (white color on both mobile and desktop) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-brand-white/85 text-base md:text-lg leading-relaxed mb-8"
          >
            Pure living begins with pure choices. At Elixora, we bring you naturally extracted cold-pressed oils that preserve the goodness of nature, delivering authentic flavour, wholesome nutrition, and uncompromising quality in every bottle.
          </motion.p>

          {/* Animated Gold Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#products"
              className="inline-block w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-dark text-brand-brown font-sans font-bold px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:scale-103 active:scale-97 text-center tracking-wide text-base border border-brand-brown/10"
            >
              Buy Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative leafy shadows overlay at top/left */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none z-10">
        <img
          src="/assets/icons-01.png"
          alt="Decor"
          className="w-full h-full object-contain filter sepia"
        />
      </div>

    </section>
  );
}
