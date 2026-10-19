import React from "react";
import { motion } from "framer-motion";

export default function BringHome() {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden flex items-center bg-[#EFE5D3]">

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <img
        src="/assets/elixora last page-image.webp"
        alt="Trusted by families"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-[20%_center]
          md:object-[20%_center]
        "
      />

      {/* =========================================================
          DARK OVERLAY - MOBILE
      ========================================================= */}
      <div className="absolute inset-0 bg-black/30 md:bg-transparent" />

      {/* =========================================================
          GRADIENT OVERLAY
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          md:bg-gradient-to-l
          from-[#20120c]/90
          md:from-[#20120c]/85
          via-[#20120c]/60
          md:via-[#20120c]/40
          to-transparent
        "
      />

      {/* =========================================================
          CONTENT CONTAINER
      ========================================================= */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          md:px-16
          lg:px-24

          flex
          justify-end

          /* ⭐ ADJUST RIGHT POSITION HERE ⭐ */
          pr-0
          md:pr-4
          lg:pr-6
        "
      >

        {/* =======================================================
            CONTENT
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            max-w-xl
            text-left
            flex
            flex-col
            items-start
          "
        >

          {/* =====================================================
              HEADING
          ===================================================== */}
          <h2
            className="
              text-white
              font-serif
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-light
              tracking-wide
              leading-tight
              drop-shadow-md
            "
          >
            Bring Home the
            <br />

            Essence of
            <br />

            <span className="italic font-normal">
              Pure Living
            </span>
          </h2>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              w-full
              sm:w-auto
            "
          >

            {/* SHOP NOW */}
            <button
              className="
                w-full
                sm:w-auto
                px-8
                py-3.5
                bg-brand-cream
                hover:bg-brand-gold
                text-brand-brown
                font-serif
                text-base
                font-medium
                rounded-xl
                shadow-md
                transition-all
                duration-300
                hover:shadow-lg
                hover:scale-[1.03]
                active:scale-[0.97]
              "
            >
              Shop Now
            </button>

            {/* EXPLORE MORE */}
            <button
              className="
                w-full
                sm:w-auto
                px-8
                py-3.5
                bg-brand-cream
                hover:bg-brand-gold
                text-brand-brown
                font-serif
                text-base
                font-medium
                rounded-xl
                shadow-md
                transition-all
                duration-300
                hover:shadow-lg
                hover:scale-[1.03]
                active:scale-[0.97]
              "
            >
              Explore More
            </button>

          </div>

        </motion.div>

      </div>
    </div>
  );
}