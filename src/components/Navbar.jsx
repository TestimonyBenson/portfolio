import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo area using your initials */}
        <div className="text-[#D4AF37] font-serif text-3xl font-bold tracking-widest cursor-pointer hover:text-white transition-colors duration-300">
          TDB.
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-[#94A3B8] text-sm tracking-widest uppercase">
          <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">Work</li>
          <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">About</li>
          <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">Contact</li>
        </ul>

        {/* Call to Action */}
        <button className="hidden md:block border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;