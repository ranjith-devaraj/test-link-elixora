import React from 'react';
import { motion } from 'framer-motion';


export default function WhyChoose() {
  const cards = [
    {
      title: "Naturally Cold Pressed",
      description: "Extracted using traditional wooden ghani methods at room temperature to retain all natural nutrients, antioxidants, and pure, authentic flavour.",
      image: "/assets/why choose elixora-01.png"
    },
    {
      title: "No Chemicals or Additives",
      description: "100% pure and unrefined. We never use preservatives, artificial colours, or chemical solvents in any step of our extraction process.",
      image: "/assets/why choose elixor-02.png"
    },
    {
      title: "Rich in Natural Nutrition",
      description: "Packed with essential fatty acids, natural vitamins, and vital antioxidants that promote heart health, immunity, and overall well-being.",
      image: "/assets/why choose elixora-03.png"
    },
    {
      title: "Rooted in Tradition",
      description: "Honouring ancient Indian Ayurvedic practices by using time-tested, heat-free methods that preserve the true essence and goodness of the oil.",
      image: "/assets/why choose elixora-4.png"
    },
    {
      title: "Premium Ingredients",
      description: "Sourced directly from trusted local farmers, we carefully select only the highest quality, sun-dried seeds and mature nuts for our oils.",
      image: "/assets/why choose elixora-5.png"
    },
    {
      title: "Trusted Everyday",
      description: "A clean, healthy choice for your daily cooking needs, trusted by families to bring wholesome nutrition and rich taste to every single meal.",
      image: "/assets/why choose elixora-6.png"
    }
  ];

  return (
    <section id="why-choose" className="relative py-10 md:py-12 bg-brand-cream px-6 md:px-12 lg:px-16 text-left w-full">

      <div className="max-w-[90rem] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-brand-brown font-normal">
            Why Choose <span className="italic font-normal">Elixora</span>
          </h2>
        </motion.div>

        {/* Cards Container - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full bg-[#4a2e22] rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* 
                ========================================================================
                DEVELOPER NOTE: ADJUST CARD IMAGE HEIGHT HERE
                - Mobile height is controlled by `h-28` (112px). Change to `h-32` for taller.
                - Tablet height is `sm:h-32 md:h-44`.
                - Desktop height is `lg:h-44`.
                =======================================================================
              */}
              <div className="relative w-full h-31 sm:h-32 md:h-44 lg:h-44 overflow-hidden shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>

              {/* 
                ========================================================================
                DEVELOPER NOTE: ADJUST CARD TEXT AND PADDING HERE
                - Padding is `px-4 py-4` on mobile. Increase to `px-5 py-5` for more space.
                - Title text size is `text-[14px]` on mobile. 
                - Description text size is `text-[11px]` on mobile.
                ========================================================================
              */}
              <div className="flex flex-col flex-grow px-4 py-4 md:px-6 md:py-6 text-left">
                <h3 className="font-serif text-[14px] sm:text-base md:text-xl lg:text-xl text-brand-cream mb-1.5 md:mb-3 font-normal leading-tight md:leading-snug">
                  {card.title}
                </h3>
                <p className="font-sans text-brand-cream/85 text-[11px] sm:text-xs md:text-sm lg:text-sm leading-[1.35] sm:leading-[1.4] md:leading-[1.6] font-light line-clamp-3 md:line-clamp-none">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}