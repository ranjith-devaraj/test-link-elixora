import React from 'react';
import { motion } from 'framer-motion';


export default function OurProcess() {
  const steps = [
    {
      id: '01',
      title: 'Carefully Selected Ingredients',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took"
    },
    {
      id: '02',
      title: 'Traditional Cold Pressing',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took"
    },
    {
      id: '03',
      title: 'No Chemicals or Additives',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took"
    },
    {
      id: '04',
      title: 'Quality Assurance',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took"
    },
    {
      id: '05',
      title: 'Bottled with Care',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took"
    }
  ];

  return (
    <section id="our-process" className="relative py-20 md:py-28 bg-[#EADDC9] px-6 md:px-12 lg:px-24 text-left overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-brand-brown font-normal leading-none">
            Our <span className="italic font-normal">Process</span>
          </h2>
        </motion.div>

        {/* All Steps Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 mb-8 md:mb-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1.334rem)] lg:w-[calc(33.333%-1.667rem)] bg-[#4a2e22] rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 lg:p-8 min-h-[160px] md:min-h-[240px] lg:min-h-[220px] flex flex-col justify-between relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Huge Watermark Background Number */}
              <span className="absolute right-3 md:right-4 bottom-[-5px] md:bottom-[-10px] font-serif text-[5.5rem] md:text-[8rem] lg:text-[9rem] font-bold text-black/10 select-none pointer-events-none z-0 leading-none group-hover:scale-105 transition-transform duration-500">
                {step.id}
              </span>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Header (Number and Title Side by Side) */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 items-start mb-3 md:mb-5 lg:mb-5">
                  <span className="font-serif italic text-3xl md:text-5xl text-brand-cream leading-none shrink-0">
                    {step.id}
                  </span>
                  <h3 className="font-serif text-sm leading-[1.1] md:leading-tight md:text-2xl text-brand-cream font-normal pt-0.5 md:pt-1">
                    {step.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="font-sans text-brand-cream/80 text-[10px] leading-[1.4] md:text-sm lg:text-sm md:leading-relaxed font-light line-clamp-5 md:line-clamp-none">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
