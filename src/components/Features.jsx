import React from 'react';

const Features = () => {
  return (
    <section className="py-24 bg-obsidian px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-white mb-12 text-center">Core <span className="text-gold">Expertise</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="md:col-span-2 bg-charcoal p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-colors duration-300 group">
            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">Modern Frameworks</h3>
            <p className="text-silver">Building scalable and responsive applications using React, Next.js, and modern state management tools. Focusing on clean, component-driven architecture.</p>
          </div>
          
          {/* Small Card 1 */}
          <div className="bg-charcoal p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-colors duration-300 group">
            <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">UI/UX Engineering</h3>
            <p className="text-silver">Translating complex designs into pixel-perfect, accessible, and interactive frontend code.</p>
          </div>

          {/* Small Card 2 */}
          <div className="bg-charcoal p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-colors duration-300 group">
            <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">API & LLM Integration</h3>
            <p className="text-silver">Seamlessly connecting frontends with RESTful APIs, GraphQL endpoints, and AI models for dynamic data.</p>
          </div>

          {/* Wide Card */}
          <div className="md:col-span-2 bg-charcoal p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-colors duration-300 group">
            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">Performance Optimization</h3>
            <p className="text-silver">Ensuring blazing-fast load times, smooth framer-motion animations, and top-tier Core Web Vitals across all devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;