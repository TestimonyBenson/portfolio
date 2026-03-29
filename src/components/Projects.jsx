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
    description: "A high-conversion landing page and student portal UI designed for an upcoming tech education platform tailored for beginners.",
    tech: ["Vite", "Framer Motion", "React Router"],
    github: "#",
    live: "#"
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
    <section className="py-24 bg-charcoal px-6 border-t border-white/5">
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
              
              {/* Image Placeholder area */}
              <div className="h-56 bg-[#0a0a0a] w-full flex items-center justify-center border-b border-white/5 group-hover:bg-[#111] transition-colors duration-500">
                <span className="text-silver/50 text-xs tracking-[0.2em] uppercase font-semibold">Project Preview</span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="text-silver text-sm mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((item, index) => (
                    <span key={index} className="text-[11px] font-semibold tracking-wider uppercase text-gold bg-gold/5 px-3 py-1.5 rounded-full border border-gold/20">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6 absolute bottom-8">
                  <a href={project.github} className="text-sm font-semibold text-white hover:text-gold transition-colors">GitHub Code</a>
                  <a href={project.live} className="text-sm font-semibold text-white hover:text-gold transition-colors">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;