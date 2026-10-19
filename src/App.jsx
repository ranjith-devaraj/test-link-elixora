import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import OurProcess from './components/OurProcess';
import Products from './components/Products';
import Reviews from './components/Reviews';
import BringHome from './components/BringHome';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-sand font-sans text-brand-brown antialiased selection:bg-brand-gold selection:text-brand-brown">
      {/* Premium Floating Header */}
      <Navbar />

      {/* Main Layout Sections - Stacking Curtain Reveal */}
      <main className="relative">

        {/* 1. HOME (HERO) - Pinned at top as subsequent sections glide up */}
        <section
          id="home"
          className="sticky top-0 h-screen w-full z-10 overflow-hidden"
        >
          <Hero />
        </section>

        {/* 2. ABOUT - Glides smoothly UP over Hero */}
        <section
          id="about"
          className="stacking-section z-20 bg-brand-sand flex items-center justify-center shadow-[0_-20px_50px_rgba(40,20,10,0.14)]"
        >
          <About />
        </section>

        {/* 3. WHY CHOOSE - Glides smoothly UP over About */}
        <section
          id="whychoose"
          className="stacking-section z-30 bg-brand-cream flex items-center justify-center shadow-[0_-20px_50px_rgba(40,20,10,0.16)]"
        >
          <WhyChoose />
        </section>

        {/* 4. PRODUCTS - Natural flow with its own internal sticky animation stages */}
        <section
          id="products"
          className="relative w-full z-40 bg-[#150d09] shadow-[0_-25px_60px_rgba(0,0,0,0.35)]"
        >
          <Products />
        </section>

        {/* 5. OUR PROCESS - Glides smoothly UP over Products */}
        <section
          id="our-process"
          className="stacking-section z-50 bg-[#EADDC9] flex items-center justify-center shadow-[0_-25px_60px_-15px_rgba(40,20,10,0.22)]"
        >
          <OurProcess />
        </section>

        {/* 6. REVIEWS - Glides smoothly UP over Our Process */}
        <section
          id="reviews"
          className="stacking-section z-60 bg-brand-sand flex items-center justify-center shadow-[0_-20px_50px_rgba(40,20,10,0.16)]"
        >
          <Reviews />
        </section>

        {/* 7. BRING HOME - Glides smoothly UP over Reviews */}
        <section
          id="bring-home"
          className="stacking-section z-70 bg-[#EFE5D3] flex items-center justify-center shadow-[0_-30px_70px_rgba(0,0,0,0.3)]"
        >
          <BringHome />
        </section>

      </main>

      {/* Company Footer - Docks smoothly over Bring Home */}
      <footer className="relative w-full z-80 bg-brand-sand shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
