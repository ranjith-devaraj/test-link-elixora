import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 -mt-10 md:-mt-12 bg-brand-cream text-brand-brown pt-14 pb-12 px-6 md:px-12 lg:px-24 rounded-t-[40px] md:rounded-t-[50px] shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        
        {/* Left Side: Logo & Contact Information Side-by-Side */}
        <div className="flex flex-row items-start gap-5 md:gap-10 font-serif text-brand-brown text-left">
          <img
            src="/assets/elixora logo.png"
            alt="Elixora Logo"
            className="h-10 md:h-12 w-auto object-contain mt-1 opacity-95"
          />
          <div className="space-y-1">
            <h4 className="text-xl md:text-2xl font-normal mb-2 text-brand-brown">Contact us</h4>
            <p className="text-[14px] md:text-base opacity-95">
              Mail: <a href="mailto:xxxxx@gmail.com" className="hover:text-brand-dark-brown transition-colors">xxxxx@gmail.com</a>
            </p>
            <p className="text-[14px] md:text-base opacity-95">
              Phone: 0000000000
            </p>
            <p className="text-[14px] md:text-base opacity-95">
              Address: xxxxx xxxxx xxxxx
            </p>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-4 items-center">
          <a
            href="#"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-brown hover:text-brand-dark-brown shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-brown hover:text-brand-dark-brown shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="font-serif font-bold text-xl leading-none -mt-0.5">in</span>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-brown hover:text-brand-dark-brown shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Divider Line */}
      <div className="max-w-7xl mx-auto mt-10 mb-6 border-t border-brand-brown/15" />

      {/* Bottom Bar with Developer Credit */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm font-sans text-brand-brown/80">
        <p>© {new Date().getFullYear()} Elixora. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://gen6software.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-brand-gold transition-colors duration-300"
          >
            Gen6 Software Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  );
}
