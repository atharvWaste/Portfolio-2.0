import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EducationCard = ({ card, i, scrollYProgress }) => {
  // We divide the scroll into segments based on 3 cards
  const step = 1 / 3; 
  const start = i * step;
  const end = (i + 1) * step;

  // Animation values
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [start, end], [20, -20]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        zIndex: i + 10,
        backgroundColor: "rgba(17, 17, 17, 0.9)",
      }}
      className="absolute inset-0 w-full h-full flex flex-col items-start justify-between border border-white/10 rounded-[2.5rem] p-12 shadow-2xl backdrop-blur-xl"
    >
      <div className="w-full">
        <div className="flex justify-between items-center w-full mb-8">
          <span className="text-purple-500 font-mono text-sm tracking-[0.3em] uppercase">
            Step 0{card.id}
          </span>
          <div className="h-px flex-1 bg-white/10 mx-4"></div>
          <span className="text-white/20 font-mono text-xs">2025 // VOL 1</span>
        </div>
        
        <h2 className="text-5xl font-black text-white leading-none tracking-tighter uppercase mb-4">
          {card.title}
        </h2>
        <div className="w-20 h-1 bg-purple-600 mb-6"></div>
      </div>

      <p className="text-gray-400 text-lg leading-relaxed font-light">
        {card.content}
      </p>

      <div className="mt-auto w-full flex justify-end">
         <div className="px-4 py-1 border border-white/20 rounded-full text-[10px] text-white/40 uppercase tracking-widest">
            In Progress
         </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const containerRef = useRef(null);
  
  // This creates the scroll for the 400vh area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = [
    { id: 1, title: "Foundation", content: "Focusing on the core principles of design and logic. Building the base for complex systems." },
    { id: 2, title: "Development", content: "Transitioning from concept to code. Specializing in high-performance web architecture." },
    { id: 3, title: "Excellence", content: "Mastering the fine details. Polishing the user experience to a professional standard." },
  ];

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <h1 className="text-[10vw] font-black text-white/5 select-none text-center leading-none uppercase">
           Since Atharv Becone Ekalavy
          </h1>
        </div>

        <div className="relative z-50 w-full max-w-xl h-125">
          {cards.map((card, i) => (
            <EducationCard 
                key={card.id} 
                card={card} 
                i={i} 
                scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;