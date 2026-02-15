import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { link } from "framer-motion/client";

const ProjectOne = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "WEATHER",
      subtitle: "FORECASTING SYSTEM",
      year: "2025",
      tech: "MERN / API",
      Gitlink: "https://github.com/atharvWaste/Weather_app",
    },
  ];

  return (
    <section className="relative h-screen w-full bg-[#050505] flex flex-col justify-center px-20 overflow-hidden">
      <div className="absolute left-0 w-full h-px bg-white/5 top-1/2 -translate-y-1/2 z-0" />

      <div className="relative z-10 flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group cursor-pointer relative"
          >
            <div
              className={`absolute -top-10 left-0 text-[10px] tracking-[0.5em] text-blue-500 transition-all duration-500 ${hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              {project.tech} — {project.year}
            </div>

            <h2
              className="text-8xl font-black transition-all duration-700 select-none 
              text-transparent stroke-white stroke-2 group-hover:text-white"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              {project.title}
            </h2>

            <p className="text-xs tracking-[1em] text-white/30 mt-2 group-hover:text-blue-400 transition-colors">
              {project.subtitle}
            </p>

            <div className="mt-12 flex items-center gap-8">
              <a
                href={project.Gitlink}
                target="_blank"
                className="group relative px-8 py-3 overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-blue-500/50"
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>

                <span className="text-[10px] tracking-[0.6em] font-mono text-white group-hover:text-blue-400 transition-colors">
                  EXECUTE_SOURCE_CODE
                </span>
              </a>

              <a
                href={project.Livelink}
                className="text-[10px] tracking-[0.4em] font-mono text-white/30 hover:text-white transition-all flex items-center gap-2"
              >
                LIVE_DEMO <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            className="absolute right-10 top-1/4 w-200 h-100 pointer-events-none"
          >
            <div className="absolute inset-0 border border-blue-500/30 rounded-lg animate-pulse" />
            <div className="w-full h-full bg-[#111] border border-white/10 overflow-hidden">
              <img src="src\Assats\test.png" alt="" />
              <div className="w-full h-full bg-linear-to-t from-blue-900/20 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectOne;
