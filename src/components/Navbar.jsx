import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Process', href: '#our-process' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      window.history.pushState(null, null, href);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-brand-cream rounded-b-[2rem] md:rounded-b-[2.5rem] shadow-md px-4 sm:px-6 md:px-12 py-3 md:py-4 transition-all duration-300 border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between min-w-0">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          className="flex items-center gap-3 min-w-0 transition-transform duration-300 hover:scale-102"
        >
          <img
            src="/assets/elixora logo.png"
            alt="Elixora Logo"
            className="h-10 sm:h-12 md:h-16 w-auto max-w-[180px] sm:max-w-none object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="font-serif text-brand-brown hover:text-brand-dark-brown transition-colors duration-300 text-lg md:text-xl font-medium relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-brown transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="#products"
            onClick={(e) => handleScroll(e, '#products')}
            className="flex items-center gap-2 bg-brand-brown hover:bg-brand-dark-brown text-brand-sand px-7 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-base border border-brand-brown/15"
          >
            <ShoppingCart size={16} />
            <span>Buy Now</span>
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-brand-brown hover:bg-brand-gold/20 rounded-full transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-3 bg-brand-cream rounded-2xl border border-brand-gold/30 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="font-serif text-brand-brown font-semibold hover:bg-brand-gold/25 p-2.5 rounded-xl transition-colors duration-300 text-lg"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#products"
                onClick={(e) => handleScroll(e, '#products')}
                className="flex items-center justify-center gap-2 bg-brand-brown hover:bg-brand-dark-brown text-brand-sand py-3 rounded-xl font-bold transition-all duration-300 mt-2 text-center"
              >
                <ShoppingCart size={18} />
                <span>Buy Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
