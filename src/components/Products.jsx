import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

// ======================================================
// ASSETS
// ======================================================

const img1 = "/assets/our products.png";

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
  bgPosition: "object-[center_75%] lg:object-center",
};

// ======================================================
// PRODUCTS
// ======================================================

const products = [
  {
    id: "coconut",

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

    bottlePosition:
      "right-[-15%] sm:right-[0%] md:right-[12%] lg:right-[15%]",
  },

  {
    id: "sesame",

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

    bottlePosition:
      "right-[-15%] sm:right-[0%] md:right-[12%] lg:right-[15%]",
  },

  {
    id: "groundnut",

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

    bottlePosition:
      "right-[-15%] sm:right-[0%] md:right-[12%] lg:right-[15%]",
  },
];

// ======================================================
// TOP BANNER
// ======================================================

function TopBanner({ section }) {
  return (
    <section
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        flex
        items-start
        pt-24
        md:pt-32
        lg:pt-40
      "
    >
      {/* Background */}

      <img
        src={section.image}
        alt={section.heading}
        className={`
          absolute
          inset-0
          w-full
          h-full
          object-cover
          ${section.bgPosition}
        `}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/20" />

      {/* Heading */}

      <div
        className="
          relative
          z-10
          w-full
          px-6
          md:px-16
          lg:px-24
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: false,
          }}
          className="
            mx-auto
            text-center
            max-w-2xl
          "
        >
          <h2
            className="
              text-white
              font-serif
              text-3xl
              md:text-5xl
              lg:text-6xl
              font-light
              tracking-wide
              drop-shadow-md
              leading-tight
            "
          >
            {section.heading}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

// ======================================================
// PRODUCT SECTION
//
// ONE PRODUCT = ONE SECTION
//
// 0%
// ------------------------------------------------------
// Blurred full-screen background
// Product name
// Bottle
//
// 0% → 50%
// ------------------------------------------------------
// Background blur disappears
// Bottle disappears
// Description appears
// Buy button appears
//
// 50%
// ------------------------------------------------------
// TRANSITION FINISHED
//
// 50% → 100%
// ------------------------------------------------------
// Everything stays in final state
//
// THEN NEXT PRODUCT
// ======================================================

function ProductSection({ product }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: [
      "start start",
      "end end",
    ],
  });

  // ======================================================
  // BACKGROUND BLUR
  //
  // IMPORTANT:
  // NO SCALE.
  // NO SIZE CHANGE.
  // NO POSITION CHANGE.
  //
  // Only blur changes.
  // ======================================================

  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.15, 0.32, 0.5, 1],
    [18, 14, 6, 0, 0]
  );

  // ======================================================
  // BACKGROUND OPACITY
  //
  // Background remains full screen.
  // ======================================================

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5, 1],
    [0.75, 0.85, 0.95, 1, 1]
  );

  // ======================================================
  // TITLE
  //
  // Always visible.
  // Slight movement only during transition.
  // ======================================================

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 1],
    [0, 0, -8, -8]
  );

  // ======================================================
  // DESCRIPTION
  //
  // Hidden at first.
  // Fully visible at 50%.
  // Locked afterwards.
  // ======================================================

  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.5, 1],
    [0, 0, 0.65, 1, 1]
  );

  const descriptionY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [35, 15, 0, 0]
  );

  // ======================================================
  // BUY BUTTON
  //
  // Appears before 50%.
  // Locked after 50%.
  // ======================================================

  const buttonOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.42, 0.5, 1],
    [0, 0, 0.65, 1, 1]
  );

  const buttonY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 1],
    [25, 10, 0, 0]
  );

  // ======================================================
  // BOTTLE
  //
  // Visible initially.
  //
  // Completely gone at 50%.
  //
  // Stays gone.
  // ======================================================

  const bottleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.5, 1],
    [1, 1, 0.5, 0, 0]
  );

  const bottleScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0.96, 1, 1.05, 1.05]
  );

  const bottleY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0, 0, -25, -25]
  );

  // ======================================================
  // DARK OVERLAY
  //
  // Gets lighter until 50%.
  // Then remains unchanged.
  // ======================================================

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [0.8, 0.55, 0.25, 0.25]
  );

  // ======================================================
  // WHATSAPP
  // ======================================================

  const whatsappNumber = "0000000000";

  const productName =
    product.highlight || product.heading;

  const messageText =
    `Hello Elixora! I would like to order the Premium Cold Pressed ${productName}. Please let me know how to proceed.`;

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[160vh]
        w-full
      "
    >
      {/* ==================================================
          STICKY VISUAL STAGE

          The product remains on screen while the
          transition happens.
      ================================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          w-full
          overflow-hidden
          bg-[#150d09]
        "
      >
        {/* ==================================================
            FULL-SCREEN BACKGROUND

            IMPORTANT:
            No scale.
            No inset.
            No 106%.
            No shrinking.

            It always fills the entire viewport.
        ================================================== */}

        <motion.img
          src={product.bgSharp}
          alt={`${product.highlight} Background`}
          style={{
            opacity: backgroundOpacity,

            filter: useTransform(
              blurValue,
              (value) => `blur(${value}px)`
            ),
          }}
          className={`
            absolute
            inset-0
            w-full
            h-full
            object-cover
            ${product.bgPosition}
          `}
        />

        {/* ==================================================
            OVERLAY
        ================================================== */}

        <motion.div
          style={{
            opacity: overlayOpacity,
          }}
          className="
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-[#1c100a]
            via-[#1c100a]/50
            to-transparent
            pointer-events-none
          "
        />

        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            h-full
            w-full
            max-w-7xl
            mx-auto
            px-6
            md:px-14
            lg:px-20
            flex
            items-center
          "
        >
          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              w-full
              md:w-[57%]
              lg:w-[54%]
              flex
              flex-col
              justify-center
            "
          >
            {/* ==================================================
                PRODUCT NAME

                ALWAYS VISIBLE
            ================================================== */}

            <motion.div
              style={{
                y: titleY,
              }}
            >
              <h2
                className="
                  text-[#FCFBF9]
                  font-serif
                  text-4xl
                  sm:text-5xl
                  md:text-5xl
                  lg:text-[58px]
                  font-light
                  tracking-wide
                  drop-shadow-md
                  leading-[1.08]
                "
              >
                {product.heading}
              </h2>

              <h3
                className="
                  text-[#F7F4EB]
                  font-serif
                  italic
                  text-4xl
                  sm:text-5xl
                  md:text-5xl
                  lg:text-[58px]
                  mt-1
                  md:mt-2
                  drop-shadow-md
                  leading-[1.08]
                  font-light
                "
              >
                {product.highlight}
              </h3>
            </motion.div>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <motion.div
              style={{
                opacity: descriptionOpacity,
                y: descriptionY,
              }}
              className="
                mt-6
                md:mt-8
                max-w-xl
                space-y-3.5
                text-[#F7F4EB]/90
                text-sm
                sm:text-base
                md:text-[15px]
                lg:text-[16px]
                leading-[1.65]
                font-sans
                drop-shadow-sm
              "
            >
              {product.body.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}
            </motion.div>

            {/* ==================================================
                BUY NOW
            ================================================== */}

            <motion.div
              style={{
                opacity: buttonOpacity,
                y: buttonY,
              }}
              className="
                mt-6
                md:mt-8
              "
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  bg-[#EFE5D3]
                  hover:bg-[#DFD1BD]
                  text-[#422C1D]
                  font-serif
                  text-sm
                  md:text-base
                  font-semibold
                  rounded-full
                  shadow-xl
                  transition-all
                  duration-300
                  hover:shadow-2xl
                  hover:scale-105
                  active:scale-95
                "
              >
                {product.cta}
              </a>
            </motion.div>
          </div>

          {/* ==================================================
              DESKTOP BOTTLE
              
              VISIBLE:
              0% → 35%

              DISAPPEARS:
              35% → 50%

              GONE:
              50% → 100%
          ================================================== */}

          <motion.div
            style={{
              opacity: bottleOpacity,
              scale: bottleScale,
              y: bottleY,
            }}
            className={`
              hidden
              md:flex
              absolute
              ${product.bottlePosition}
              top-1/2
              -translate-y-1/2
              z-10
              pointer-events-none
              items-center
              justify-center
            `}
          >
            <img
              src={product.productImage}
              alt={`${product.highlight} Bottle`}
              className="
                md:h-[65vh]
                lg:h-[72vh]
                max-h-[750px]
                w-auto
                object-contain
                drop-shadow-[0_30px_50px_rgba(0,0,0,0.75)]
              "
            />
          </motion.div>

          {/* ==================================================
              MOBILE BOTTLE
          ================================================== */}

          <motion.div
            style={{
              opacity: bottleOpacity,
              scale: bottleScale,
              y: bottleY,
            }}
            className="
              absolute
              bottom-[4vh]
              left-1/2
              -translate-x-1/2
              z-10
              pointer-events-none
              flex
              md:hidden
              items-end
              justify-center
            "
          >
            <img
              src={product.productImage}
              alt={`${product.highlight} Bottle`}
              className="
                h-[45vh]
                sm:h-[50vh]
                w-auto
                object-contain
                drop-shadow-[0_25px_45px_rgba(0,0,0,0.75)]
              "
            />
          </motion.div>

          {/* ==================================================
              SCROLL INDICATOR
          ================================================== */}

        </div>
      </div>
    </section>
  );
}

// ======================================================
// MAIN PRODUCTS COMPONENT
// ======================================================

export default function Products() {
  return (
    <main
      id="products-container"
      className="
        relative
        w-full
        bg-[#150d09]
      "
    >
      {/* ==================================================
          TOP BANNER
      ================================================== */}

      <TopBanner
        section={topBannerSection}
      />

      {/* ==================================================
          PRODUCTS
      ================================================== */}

      {products.map((product) => (
        <ProductSection
          key={product.id}
          product={product}
        />
      ))}
    </main>
  );
}