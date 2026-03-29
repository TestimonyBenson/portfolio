import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#D4AF37] tracking-[0.25em] text-xs md:text-sm uppercase mb-6 font-semibold"
        >
          Frontend Engineer | Software Engineer (Frontend Focused) | Web & Systems Developer
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8"
        >
          Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200 italic">Future</span> of Software.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build scalable digital products that simplify complexity and elevate user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => {
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-[#D4AF37] text-[#050505] px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            Explore My Projects
          </button>
          
          <a 
            href="/Testimony_Benson_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-white px-8 py-4 rounded-full font-bold hover:text-[#D4AF37] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Read My Resume <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;