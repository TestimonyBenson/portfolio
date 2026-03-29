import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-obsidian selection:bg-gold selection:text-obsidian text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-obsidian py-10 border-t border-white/5 text-center flex flex-col items-center justify-center">
        <div className="text-gold font-serif text-2xl font-bold tracking-widest mb-4">
          TDB.
        </div>
        <p className="text-silver text-sm tracking-wider">© 2026 Testimony Darakeobong Benson. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
