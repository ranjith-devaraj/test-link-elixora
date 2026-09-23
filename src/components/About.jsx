import React from 'react';
import { motion } from 'framer-motion';


export default function About() {
  return (
    <section className="relative w-full bg-brand-sand text-[#4E3629] overflow-hidden">
     

      {/* Premium Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] bg-[#EFE5D3]/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Top-Left Blob */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-44 md:h-44 bg-[#EFE5D3] rounded-br-full opacity-50 pointer-events-none" />

      {/* Decorative Leaf in Bottom-Left with wind-sway animation */}
      <motion.svg
        animate={{ rotate: [-1, 2, -1], y: [0, -4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-36 h-56 md:w-48 md:h-72 text-brand-gold-dark/25 pointer-events-none select-none z-0 origin-bottom-left"
        viewBox="0 0 100 180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main stem */}
        <path d="M10,180 Q25,110 65,30" />
        
        {/* Pairs of leaves */}
        <path d="M22,142 Q8,135 15,122 Q25,130 22,142 Z" />
        <path d="M24,136 Q42,126 34,114 Q26,124 24,136 Z" />
        
        <path d="M35,108 Q20,100 28,88 Q38,96 35,108 Z" />
        <path d="M37,102 Q55,92 47,80 Q39,90 37,102 Z" />
        
        <path d="M47,74 Q32,66 40,54 Q50,62 47,74 Z" />
        <path d="M49,68 Q67,58 59,46 Q51,56 49,68 Z" />
        
        <path d="M58,44 Q46,34 52,24 Q60,32 58,44 Z" />
        <path d="M60,38 Q75,26 67,16 Q59,26 60,38 Z" />
        
        <path d="M65,30 Q62,10 68,4 Q74,12 65,30 Z" />
      </motion.svg>

      {/* Decorative Grid of Dots */}
      <svg 
        className="absolute top-12 left-[40%] md:left-[45%] w-24 h-16 text-brand-gold/30 pointer-events-none select-none" 
        fill="currentColor"
      >
        <pattern id="about-dot-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" />
        </pattern>
        <rect width="96" height="64" fill="url(#about-dot-grid)" />
      </svg>

      {/* Main Grid Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] items-center relative z-10">
        
        {/* Left Column: Text & Content with dynamic padding-left to align with standard content margins */}
        <div className="col-span-1 lg:col-span-5 pl-6 md:pl-16 lg:pl-[max(4rem,calc((100vw-1280px)/2+4rem))] pr-6 md:pr-16 lg:pr-12 py-8 md:py-24 flex flex-col justify-center items-start text-left relative z-10">
          <div className="max-w-xl">
            {/* Staggered Heading Reveal */}
            <h2 className="font-serif text-[#4E3629] text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.05] font-light tracking-wide">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                About
              </motion.span>
              <motion.span 
                className="block italic font-normal text-brand-gold-dark"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 100 }}
              >
                Elixora
              </motion.span>
            </h2>

            {/* Decorative Divider */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-2 mt-3 mb-6 md:mt-4 md:mb-8 origin-left"
            >
              <div className="h-[1px] w-8 md:w-12 bg-brand-gold-dark/60"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rotate-45 border border-brand-gold-dark/80 bg-brand-sand"></div>
              <div className="h-[1px] w-8 md:w-12 bg-brand-gold-dark/60"></div>
            </motion.div>

            {/* Description Paragraphs with Staggered Fade-in */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-sans text-[#4E3629] text-sm md:text-[16px] lg:text-[17px] leading-[1.6] md:leading-[1.7] space-y-3 md:space-y-6 font-normal"
            >
              <p>
                At <span className="italic">Elixora</span>, we believe that pure living begins with pure choices. Guided by our promise, 
                "<span className="italic">The Essence of Pure Living</span>," we are committed to delivering 
                oils that are naturally extracted and completely free from adulteration.
              </p>
              
              <p>
                Every bottle is crafted using carefully selected ingredients and produced through traditional 
                cold-pressing methods, preserving their natural goodness, authentic flavour, and essential nutrition. 
                Built on decades of knowledge and a deep-rooted passion for quality, <span className="italic">Elixora</span> combines time-honoured 
                expertise with uncompromising standards to bring you products you can trust.
              </p>
              
              <p className="hidden sm:block">
                Because when it comes to your family's health, purity isn't just a promise, it's our way of life.
              </p>
            </motion.div>


</div> {/* max-w-xl */}
        </div> {/* Left Column */}

        {/* Right Column: Image with Sweeping Curve and Hover Scale */}
        <div className="col-span-1 lg:col-span-7 relative min-h-[220px] sm:min-h-[350px] md:min-h-[550px] lg:min-h-0 lg:h-auto lg:aspect-[1.35] overflow-hidden flex items-end group/img">
          
          {/* Floating Pure Living Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-white/90 backdrop-blur-md px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-lg border border-brand-gold/30 flex items-center gap-2 md:gap-2.5"
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-gold-dark animate-pulse" />
            <span className="font-serif italic text-[10px] md:text-xs tracking-wider text-brand-brown font-semibold select-none">100% Pure Living</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <img
              src="/assets/about page-image.png"
              alt="Elixora Family Dinner"
              className="w-full h-full object-cover object-left rounded-tl-[120px] sm:rounded-tl-[240px] md:rounded-tl-[320px] lg:rounded-tl-[480px] rounded-tr-none rounded-br-none rounded-bl-none group-hover/img:scale-[1.025] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
