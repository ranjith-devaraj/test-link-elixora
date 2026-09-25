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

      {/* Main Layout Sections */}
      <main className="relative">

        {/* HOME */}
        <section id="home" className="relative w-full min-h-screen snap-section">
          <Hero />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="relative w-full min-h-screen bg-brand-sand flex items-center justify-center snap-section"
        >
          <About />
        </section>

        {/* WHY CHOOSE */}
        <section
          id="whychoose"
          className="relative w-full min-h-screen bg-brand-cream flex items-center justify-center snap-section"
        >
          <WhyChoose />
        </section>

        {/* PRODUCTS */}
        <section id="products" className="relative w-full z-30">
          <Products />
        </section>

        {/* OUR PROCESS */}
        <section
          id="our-process"
          className="relative w-full min-h-screen bg-[#EADDC9] flex items-center justify-center snap-section"
        >
          <OurProcess />
        </section>

        {/* REVIEWS */}
        <section
          id="reviews"
          className="relative w-full min-h-screen bg-brand-sand flex items-center justify-center snap-section"
        >
          <Reviews />
        </section>

        {/* BRING HOME */}
        <section
          id="bring-home"
          className="relative w-full min-h-screen bg-[#EFE5D3] flex items-center justify-center"
        >
          <BringHome />
        </section>

      </main>
      {/* Company Footer */}
      <div className="snap-end w-full relative z-70 bg-brand-sand">
        <Footer />
      </div>
    </div>
  );
}

export default App;
