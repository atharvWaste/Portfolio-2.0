import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectOne = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "WEATHER",
      subtitle: "FORECASTING SYSTEM",
      year: "2025",
      tech: "MERN / API",
      Gitlink: "https://github.com/atharvWaste/Weather_app",
      image: "/src/Assats/test.png",
      LiveLink: "https://weather-app-alpha-sooty-96.vercel.app/"
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      
      <div className="relative z-10 flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col lg:block group relative">
            
            {/* 1. TEXT CONTENT AREA */}
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer relative z-10"
            >
              {/* Tech Label */}
              <div className="text-[10px] tracking-[0.4em] text-blue-500 mb-4 lg:absolute lg:-top-10 lg:mb-0 transition-all duration-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                {project.tech} — {project.year}
              </div>

              {/* Responsive Title */}
              <h2
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black transition-all duration-700 text-transparent lg:group-hover:text-white leading-[0.9]"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                {project.title}
              </h2>

              <p className="text-[10px] md:text-xs tracking-[0.5em] md:tracking-[1em] text-white/30 mt-4 lg:group-hover:text-blue-400 transition-colors">
                {project.subtitle}
              </p>
            </div>

            {/* 2. MOBILE & TABLET ANIMATION (sm & md) */}
            {/* This div only shows on mobile and tablet */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 block lg:hidden w-full aspect-video relative rounded-lg border border-white/10 overflow-hidden shadow-2xl"
            >
              <img 
                src={project.image} 
                className="w-full h-full object-cover opacity-60" 
                alt="Project Preview" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
            </motion.div>

            {/* 3. BUTTONS */}
            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
              <a href={project.Gitlink} target="_blank" className="group/btn relative px-8 py-4 overflow-hidden border border-white/10 bg-white/5 w-full sm:w-auto text-center">
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500" />
                <span className="text-[10px] tracking-[0.5em] font-mono text-white group-hover/btn:text-blue-400">EXECUTE_SOURCE</span>
              </a>

              <a href={project.LiveLink} target="_blank" className="group/btn relative px-8 py-4 overflow-hidden border border-white/10 bg-white/5 w-full sm:w-auto text-center">
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500" />
                <span className="text-[10px] tracking-[0.5em] font-mono text-white group-hover/btn:text-blue-400">Live Link</span>
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* 4. DESKTOP ONLY HOVER ANIMATION (lg+) */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            className="fixed right-10 top-1/2 -translate-y-1/2 w-[35vw] aspect-video pointer-events-none hidden lg:block z-50"
          >
            <div className="w-full h-full bg-[#111] border border-white/10 overflow-hidden rounded-lg shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <img src={projects[hoveredIndex].image} className="w-full h-full object-cover opacity-80" alt="Desktop Preview" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectOne;