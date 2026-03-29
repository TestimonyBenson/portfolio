import React from 'react';

const projectsData = [
  {
    id: 1,
    title: "RepairAgent UI",
    description: "A frontend dashboard interfacing with the RepairAgent framework (Pryzant et al.) for AI-driven automated code repair. Features real-time syntax highlighting and diff views.",
    tech: ["React", "Tailwind", "LLM APIs"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Zero to Tech Bootcamp",
    description: "A high-conversion landing page designed for an upcoming tech education platform tailored for beginners.",
    tech: ["Vite", "Framer Motion", "React Router"],
    image: "/bootcamp.png",
    github: "https://github.com/TestimonyBenson/Zero-to-Tech-Bootcamp", // <-- Paste your GitHub link here
    live: "https://zero-to-tech-bootcamp-asb2.vercel.app/"             // <-- Paste your live Vercel/Netlify link here
  },
  {
    id: 3,
    title: "Kicks Resell Storefront",
    description: "A premium, dark-themed e-commerce storefront for an aftermarket shoe reselling brand, featuring dynamic inventory mapping and a sleek checkout flow.",
    tech: ["Next.js", "Shopify API", "Tailwind"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-24 bg-charcoal px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif text-white">Featured <span className="text-gold">Work</span></h2>
            <p className="text-silver mt-4 max-w-lg">A selection of recent frontend architecture and UI engineering projects.</p>
          </div>
          <button className="text-gold hover:text-white transition-colors border-b border-gold pb-1 font-medium">
            View GitHub Archive →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="group relative bg-obsidian rounded-2xl overflow-hidden border border-white/5 hover:border-gold/50 transition-all duration-500">
              
              {/* Dynamic Image Area */}
              <div className="h-56 w-full border-b border-white/5 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#111] transition-colors duration-500">
                    <span className="text-silver/50 text-xs tracking-[0.2em] uppercase font-semibold">Project Preview</span>
                  </div>
                )}
              </div>

                <div className="flex space-x-6 absolute bottom-8">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-white hover:text-gold transition-colors"
                  >
                    GitHub Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-white hover:text-gold transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;