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
        
        {/* Anchors for navigation */}
        <div id="home" className="absolute top-0 snap-section"></div>
        <div className="sticky top-0 w-full min-h-screen z-0 snap-section">
          <Hero />
        </div>

        {/* Anchors must be block level and take up space, or we can just use absolute positioning if we know they won't move? 
            Wait, no, an empty block div right before the sticky div perfectly marks its scroll start position! */}
        <div id="about" className="snap-section"></div>
        <div className="sticky top-0 w-full min-h-screen z-10 bg-brand-sand flex items-center justify-center overflow-hidden snap-section">
          <About />
        </div>

        <div id="whychoose" className="snap-section"></div>
        <div className="sticky top-0 w-full min-h-screen z-20 bg-brand-cream flex items-center justify-center overflow-hidden snap-section">
          <WhyChoose />
        </div>

        <div id="products" className="relative w-full z-30">
          <Products />
        </div>

        <div id="our-process" className="snap-section"></div>
        <div className="sticky top-0 w-full min-h-screen z-40 bg-[#EADDC9] flex items-center justify-center overflow-hidden snap-section">
          <OurProcess />
        </div>

        <div id="reviews" className="snap-section"></div>
        <div className="sticky top-0 w-full min-h-screen z-50 bg-brand-sand flex items-center justify-center overflow-hidden snap-section">
          <Reviews />
        </div>

        <div className="sticky top-0 w-full min-h-screen z-60 bg-[#EFE5D3] flex items-center justify-center overflow-hidden snap-section">
          <BringHome />
        </div>
      </main>

      {/* Company Footer */}
      <div className="snap-end w-full relative z-70 bg-brand-sand">
        <Footer />
      </div>
    </div>
  );
}

export default App;
