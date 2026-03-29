import React from 'react';

const Navbar = () => {
  // Smooth scroll function that accounts for the fixed navbar height
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to absolute top for the Logo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={scrollToTop}
          className="text-[#D4AF37] font-serif text-3xl font-bold tracking-widest cursor-pointer hover:text-white transition-colors duration-300"
        >
          TDB. 
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-[#94A3B8] text-sm tracking-widest uppercase">
          <li onClick={() => scrollToSection('work')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Work</li>
          <li onClick={() => scrollToSection('about')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">About</li>
          <li onClick={() => scrollToSection('contact')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Contact</li>
        </ul>

        {/* Call to Action */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;