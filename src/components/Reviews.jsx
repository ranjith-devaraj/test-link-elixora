import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';


export default function Reviews() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Home Chef & Mother of Two",
      rating: 5,
      text: "Switching to Elixora Cold Pressed Groundnut Oil has completely changed my cooking. The aroma of pure groundnuts makes every dish taste authentic. My kids can easily notice the difference, and knowing it is 100% chemical-free gives me immense peace of mind.",
      date: "August 2026"
    },
    {
      name: "Rohan Deshmukh",
      role: "Fitness Coach",
      rating: 5,
      text: "As someone highly conscious about nutrition and heart health, I recommend Elixora Coconut Oil. I use it for my morning bullet coffee and baking. It's incredibly light, doesn't smell processed, and is as raw and natural as it gets.",
      date: "July 2026"
    },
    {
      name: "Ananya Iyer",
      role: "Yoga Practitioner",
      rating: 5,
      text: "Elixora Sesame Oil is a staple in my household. I use it for Ayurvedic oil pulling (Kavala) and traditional south Indian cooking. The richness and authentic wood-press flavor are unmatched by any supermarket brand I have tried.",
      date: "June 2026"
    }
  ];

  return (
    <section id="reviews" className="relative py-16 md:py-20 bg-brand-cream/20 px-4 md:px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-brand-brown mb-3 md:mb-4">
            Loved by <span className="italic font-normal">Families</span>
          </h2>
          <p className="max-w-2xl mx-auto font-sans text-brand-brown/70 text-sm md:text-base px-4">
            Hear from our health-conscious community about how Elixora oils have enhanced their wellness journey and cooking flavors.
          </p>
        </motion.div>

        {/* Testimonials Flex Container (2 on top, 1 centered) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.25rem)] max-w-md bg-brand-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-brand-gold/20 shadow-sm relative hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Icon Background decoration */}
              <div className="absolute top-4 right-4 md:top-5 md:right-5 text-brand-gold/20 pointer-events-none">
                <Quote size={24} className="md:w-8 md:h-8" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex text-amber-500 gap-1 mb-2 md:mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={12} className="md:w-3.5 md:h-3.5" fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-brand-brown/85 text-[10px] md:text-xs leading-relaxed italic mb-3 md:mb-5">
                  "{item.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="border-t border-brand-gold/10 pt-3 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xs md:text-sm text-brand-brown font-bold">{item.name}</h4>
                  <p className="font-sans text-[9px] md:text-[10px] text-brand-brown/60 mt-0.5">{item.role}</p>
                </div>
                <span className="text-[9px] md:text-[10px] text-brand-brown/40 font-semibold">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
