import React from 'react';

const About = () => {
  return (
     <section id="about" className="py-24 bg-obsidian px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Story */}
        <div>
          <h2 className="text-4xl font-serif text-white mb-8">Beyond the <span className="text-gold italic">Screen</span></h2>
          <div className="space-y-6 text-silver text-base md:text-lg leading-relaxed">
            <p>
              I don’t just build websites, I build experiences. I’m Testimony, a software engineer with a passion for turning ideas into clean, functional, and visually engaging products. From web design to automation systems, I focus on creating solutions that are not only efficient but also intuitive to use. I care about more than just code. I care about how people experience what I build.
            </p>
              I’m big on growth, creativity, and doing things differently. Whether it’s launching a new platform or improving an existing system, I approach every project with curiosity and precision. If it solves a real problem and looks good doing it, I’m interested.
            <p>
              When I’m not working, I’m exploring new ideas, improving my skills, or creating something new, because for me, growth never really stops.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div>
              <h4 className="text-4xl font-serif text-gold">2+</h4>
              <p className="text-xs uppercase tracking-widest text-silver mt-2 font-semibold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-4xl font-serif text-gold">100%</h4>
              <p className="text-xs uppercase tracking-widest text-silver mt-2 font-semibold">Commitment to Output</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="relative group mx-auto w-full max-w-md md:max-w-full">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-gold to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative h-[600px] bg-charcoal rounded-2xl border border-white/10 overflow-hidden group-hover:border-gold/30 transition-colors duration-500">
            <img 
              src="/profile.jpg" 
              alt="Testimony Darakeobong Benson" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;