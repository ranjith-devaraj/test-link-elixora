import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const img1 = "/assets/our products.png";
const bgBlur = "/assets/our products-blured bg.png"; // Kept for reference

const coconutOil = "/assets/cocunt-oil.png";
const sesameOil = "/assets/sesame-oil.png";
const groundnutOil = "/assets/groundnut-oil.png";

const sesameBg = "/assets/sesame-oils-backgorund.png";
const coconutBg = "/assets/cocnut-oil-backgorund.png";
const groundnutBg = "/assets/grounfnut-oils-backgorund.png";


// ======================================================
// TOP BANNER
// ======================================================

const topBannerSection = {
  image: img1,
  heading: "Our Products",
  align: "top",
  bgPosition: "object-[center_75%] lg:object-center",
};


// ======================================================
// PRODUCTS
// ======================================================

const products = [
  {
    id: "coconut",
    bgBlur: bgBlur,
    bgSharp: coconutBg,
    productImage: coconutOil,
    heading: "Premium Cold Pressed",
    highlight: "Coconut Oil",
    body: [
      "Cold Pressed Coconut Oil is extracted using a traditional cold-press process without heat or chemicals, preserving its natural nutrients, fresh aroma, and wholesome flavour.",
      "Crafted from carefully selected mature coconuts, every bottle reflects Elixora's commitment to purity, authenticity, and uncompromising quality, making it the perfect choice for healthier everyday cooking.",
    ],
    cta: "Buy Now",
    bgPosition: "object-[75%_center] md:object-center",
    // 👇 MARK: Adjust Desktop Position Here (md:right-... lg:right-...)
    bottlePosition: "right-[-15%] sm:right-[0%] md:right-[12%] lg:right-[15%]",
  },
  {
    id: "sesame",
    bgBlur: bgBlur,
    bgSharp: sesameBg,
    productImage: sesameOil,
    heading: "Premium Cold Pressed",
    highlight: "Sesame Oil",
    body: [
      "Cold Pressed Sesame Oil is extracted at low temperatures without chemicals or additives, preserving its natural nutrients and distinctive aroma.",
      "Inspired by India's culinary heritage and Ayurvedic wisdom, it offers a pure alternative to refined oils, providing wholesome nutrition and authentic quality for healthier everyday cooking.",
      "With Elixora, every bottle reflects a commitment to purity, tradition, and uncompromising quality.",
    ],
    cta: "Buy Now",
    bgPosition: "object-[78%_center] md:object-center",
    // 👇 MARK: Adjust Desktop Position Here
    bottlePosition: "right-[-15%] sm:right-[0%] md:right-[12%] lg:right-[15%]",
  },
  {
    id: "groundnut",
    bgBlur: bgBlur,
    bgSharp: groundnutBg,
    productImage: groundnutOil,
    heading: "Premium Cold Pressed",
    highlight: "Groundnut Oil",
    body: [
      "Cold Pressed Groundnut (Peanut) Oil is extracted using traditional, chemical-free methods without high heat, preserving its natural nutrients and authentic flavour.",
      "Prized for its rich aroma and nutritional value, it is an ideal choice for families seeking wholesome, unrefined ingredients. As more home cooks embrace healthier lifestyles, Elixora offers a pure, clean-label alternative to heavily processed refined oils.",
    ],
    cta: "Buy Now",
    bgPosition: "object-[80%_center] md:object-center",
    // 👇 MARK: Adjust Desktop Position Here
    bottlePosition: "right-[-15%] sm:right-[0%] md:right-[12%] lg:right-[15%]",
  },
];


// ======================================================
// TOP BANNER COMPONENT
// ======================================================

function TopBanner({ section }) {
  return (
    <section
      className="
        sticky top-0 z-10 w-full overflow-hidden flex items-start h-screen
        pt-24 md:pt-32 lg:pt-40
      "
    >
      {/* Background */}
      <img
        src={section.image}
        alt={section.heading}
        className={`absolute inset-0 w-full h-full object-cover ${section.bgPosition}`}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Heading */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center max-w-2xl"
        >
          <h2 className="text-white font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-wide drop-shadow-md leading-tight">
            {section.heading}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}


// ======================================================
// 1. PRODUCT HERO / TEASER SECTION (Stage 1)
// Blurred BG + Title + Single Cutout Bottle
// ======================================================

function ProductHeroSection({ product, zIndex }) {
  return (
    <section
      style={{ zIndex }}
      className="sticky top-0 h-screen w-full overflow-hidden bg-[#150d09] flex flex-col md:flex-row md:items-center"
    >
      {/* Background (Blurred on Mobile and Desktop) */}
      <img
        src={product.bgSharp}
        alt={`${product.highlight} Blurred Background`}
        className={`absolute inset-0 w-full h-full object-cover scale-110 filter blur-lg ${product.bgPosition}`}
      />

      {/* Dark gradient overlay — top-to-bottom on mobile, left-to-right on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c100a]/90 via-[#1c100a]/60 to-transparent md:bg-gradient-to-r md:from-[#1c100a]/95 md:via-[#1c100a]/65 md:to-transparent z-[1] pointer-events-none" />

      {/* ── MOBILE LAYOUT (flex column, text top, bottle bottom) ── */}
      <div className="flex flex-col h-full w-full relative z-10 md:hidden">

        {/* Text — top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="px-6 pt-28 pb-4 text-left"
        >
          <h2 className="text-[#FCFBF9] font-serif text-3xl sm:text-4xl font-light tracking-wide drop-shadow-md leading-[1.15]">
            {product.heading}
          </h2>
          <h3 className="text-[#F7F4EB] font-serif italic text-3xl sm:text-4xl mt-1 drop-shadow-md leading-[1.15] font-light">
            {product.highlight}
          </h3>
        </motion.div>

        {/* Bottle — mobile bottom */}
        {/* 👇 MARK MOBILE BOTTLE POSITION: Change `pb-[5vh]` below to move bottle up/down */}
        <div className="flex-1 flex items-end justify-center pb-[6vh] overflow-hidden">
          {/* 👇 MARK MOBILE BOTTLE SIZE: Change `h-[48vh]` below to make bottle taller or shorter */}
          <motion.img
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
            src={product.productImage}
            alt={`${product.highlight} Bottle`}
            className="h-[65vh] w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]"
          />
        </div>

      </div>

      {/* ── DESKTOP LAYOUT (text left, bottle right absolute) ── */}
      {/* Text */}
      <div className="hidden md:flex relative z-10 w-full h-full max-w-7xl mx-auto px-14 lg:px-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[60%] lg:w-[52%] flex flex-col justify-center text-left z-10"
        >
          <h2 className="text-[#FCFBF9] font-serif text-5xl lg:text-[56px] font-light tracking-wide drop-shadow-md leading-[1.15]">
            {product.heading}
          </h2>
          <h3 className="text-[#F7F4EB] font-serif italic text-5xl lg:text-[56px] mt-2 drop-shadow-md leading-[1.15] font-light">
            {product.highlight}
          </h3>
        </motion.div>
      </div>

      {/* Bottle — desktop absolute right */}
      {/* 👇 MARK DESKTOP BOTTLE: Change `bottlePosition` in the products array above to adjust horizontal position */}
      {/* 👇 MARK DESKTOP BOTTLE SIZE: Change `md:h-[65vh] lg:h-[72vh]` below to resize the desktop bottle */}
      <div
        className={`hidden md:flex absolute ${product.bottlePosition || "right-[12%] lg:right-[15%]"} top-1/2 -translate-y-1/2 z-[2] pointer-events-none items-center justify-center`}
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: false, amount: 0.3 }}
          src={product.productImage}
          alt={`${product.highlight} Bottle`}
          className="md:h-[65vh] lg:h-[72vh] max-h-[750px] w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
}


// ======================================================
// 2. PRODUCT DETAILS SECTION (Stage 2)
// Sharp 3-Bottle BG + Title + Description + Buy Now
// ======================================================

function ProductDetailsSection({ product, zIndex }) {
  const whatsappNumber = "0000000000";
  const productName = product.highlight || product.heading;
  const messageText = `Hello Elixora! I would like to order the Premium Cold Pressed ${productName}. Please let me know how to proceed. 🌿`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <section
      style={{ zIndex }}
      className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#150d09]"
    >
      {/* Background (Sharp Full Photography) */}
      <img
        src={product.bgSharp}
        alt={`${product.highlight} Setup`}
        className={`absolute inset-0 w-full h-full object-cover scale-105 ${product.bgPosition}`}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c100a]/95 via-[#1c100a]/65 md:via-[#1c100a]/40 to-transparent z-[1] pointer-events-none" />

      {/* Text: Title + Description + CTA */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-14 lg:px-20 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-[60%] lg:w-[52%] flex flex-col justify-center text-left py-12"
        >
          {/* Title */}
          <div>
            <h2 className="text-[#FCFBF9] font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light tracking-wide drop-shadow-md leading-[1.15]">
              {product.heading}
            </h2>
            <h3 className="text-[#F7F4EB] font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[54px] mt-1 md:mt-2 drop-shadow-md leading-[1.15] font-light">
              {product.highlight}
            </h3>
          </div>

          {/* Description */}
          <div className="mt-5 sm:mt-7 space-y-3.5 sm:space-y-4 text-[#F7F4EB]/90 text-sm sm:text-base md:text-[16px] lg:text-[17px] leading-[1.65] font-sans drop-shadow-sm max-w-lg">
            {product.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Buy Now Button */}
          {product.cta && (
            <div className="pt-6 sm:pt-7">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-3.5 bg-[#EFE5D3] hover:bg-[#DFD1BD] text-[#422C1D] font-serif text-base font-semibold rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 text-center cursor-pointer"
              >
                {product.cta}
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}


// ======================================================
// MAIN COMPONENT
// ======================================================

export default function OurProducts() {
  return (
    // Each sticky section needs a preceding 100vh spacer div that is the actual
    // scroll-snap target. This prevents the snap from landing mid-transition
    // between two adjacent sticky cards.
    <div id="products-container" className="w-full relative">

      {/* Snap anchor for Top Banner */}
      <div className="snap-section" style={{ scrollSnapStop: 'always' }} />
      <TopBanner section={topBannerSection} />

      {/* Product Sections */}
      {products.map((product, index) => {
        const heroZIndex = 11 + index * 2;
        const detailsZIndex = 12 + index * 2;

        return (
          <React.Fragment key={product.id}>
            {/* Snap anchor for Hero Teaser */}
            <div className="snap-section" style={{ scrollSnapStop: 'always' }} />
            <ProductHeroSection
              product={product}
              zIndex={heroZIndex}
            />

            {/* Snap anchor for Details Section */}
            <div className="snap-section" style={{ scrollSnapStop: 'always' }} />
            <ProductDetailsSection
              product={product}
              zIndex={detailsZIndex}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
