import React from 'react';

const projectsData = [
  {
    id: 1,
    title: "Smart Admin Dashboard",
    description: "A clean, modern dashboard that shows real-time data.",
    tech: ["React", "Tailwind", "LLM APIs"],
    image:"/admindash.png",
    github: "https://github.com/TestimonyBenson/Smart-Admin-Dashboard", 
    live: "https://smart-admin-dashboard-35o5.vercel.app/"            
  },
  {
    id: 2,
    title: "Zero to Tech Bootcamp",
    description: "A high-conversion landing page designed for an upcoming tech education platform tailored for beginners.",
    tech: ["Vite", "Framer Motion", "React Router"],
    image: "/bootcamp.png",
    github: "https://github.com/TestimonyBenson/Zero-to-Tech-Bootcamp", 
    live: "https://zero-to-tech-bootcamp-asb2.vercel.app/"            
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 bg-charcoal px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif text-white">Featured <span className="text-gold">Work</span></h2>
            <p className="text-silver mt-4 max-w-lg">A selection of recent frontend architecture and UI engineering projects.</p>
          </div>
          <button className="text-gold hover:text-white transition-colors border-b border-gold pb-1 font-medium">
            View GitHub Archive →
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="group flex flex-col bg-obsidian rounded-2xl overflow-hidden border border-white/5 hover:border-gold/50 transition-all duration-500">
              
              {/* Image Area */}
              <div className="h-56 w-full border-b border-white/5 overflow-hidden flex-shrink-0">
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

              {/* Content Area (This was missing!) */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, index) => (
                    <span key={index} className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-silver text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex space-x-6 mt-auto pt-4 border-t border-white/5">
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
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;