import { useState } from "react";

const SkillDisplay = () => {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center py-10 px-4 md:py-20">
      {/* Main Container - Responsive width and height */}
      <div className="bg-[#0b0b0b] w-full max-w-[90%] md:w-[70%] lg:w-[60%] min-h-fit p-4 md:p-8 rounded-xl border border-white/5">
        
        {/* Title Box */}
        <div className="w-full bg-[#060606] py-8 mb-6 rounded-lg group cursor-pointer flex justify-center items-center border border-white/5">
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-black transition-all duration-700 select-none text-transparent group-hover:text-white"
            style={{ WebkitTextStroke: "0.75px rgba(255,255,255,0.2)" }}
          >
            My Skills
          </h2>
        </div>

        {/* Skills Grid Wrapper */}
        <div className="bg-[#060606] w-full p-4 md:p-10 rounded-lg flex flex-wrap justify-center gap-6 md:gap-10 border border-white/5">
          
          {/* Javascript */}
          <div className="flex flex-col items-center justify-center w-[40%] md:w-[25%] group transition-all">
            <img
              className="h-12 md:h-16 brightness-100 group-hover:scale-110 transition-transform"
              src="/lanLogo/javascript.svg"
              alt="JS"
            />
            <h2 className="text-[10px] md:text-[14px] text-white/30 group-hover:text-blue-400 transition-colors mt-3 uppercase tracking-widest">
              Javascript
            </h2>
          </div>

          {/* Mongoose */}
          <div className="flex flex-col items-center justify-center w-[40%] md:w-[25%] group transition-all">
            <img
              className="h-12 md:h-16 brightness-100 group-hover:scale-110 transition-transform"
              src="/lanLogo/mongoose.svg"
              alt="Mongoose"
            />
            <h2 className="text-[10px] md:text-[14px] text-white/30 group-hover:text-blue-400 transition-colors mt-3 uppercase tracking-widest">
              Mongoose
            </h2>
          </div>

          {/* React */}
          <div className="flex flex-col items-center justify-center w-[40%] md:w-[25%] group transition-all">
            <img
              className="h-12 md:h-16 brightness-100 group-hover:scale-110 transition-transform"
              src="/lanLogo/react.svg"
              alt="React"
            />
            <h2 className="text-[10px] md:text-[14px] text-white/30 group-hover:text-blue-400 transition-colors mt-3 uppercase tracking-widest">
              ReactJs
            </h2>
          </div>

          {/* NodeJs */}
          <div className="flex flex-col items-center justify-center w-[40%] md:w-[25%] group transition-all">
            <img
              className="h-12 md:h-16 brightness-100 group-hover:scale-110 transition-transform"
              src="/lanLogo/nodejs.svg"
              alt="Node"
            />
            <h2 className="text-[10px] md:text-[14px] text-white/30 group-hover:text-blue-400 transition-colors mt-3 uppercase tracking-widest">
              Nodejs
            </h2>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center justify-center w-[40%] md:w-[25%] group transition-all">
            <img
              className="h-12 md:h-16 brightness-100 group-hover:scale-110 transition-transform"
              src="/lanLogo/tailwindcss.svg"
              alt="Tailwind"
            />
            <h2 className="text-[10px] md:text-[14px] text-white/30 group-hover:text-blue-400 transition-colors mt-3 uppercase tracking-widest">
              TailwindCss
            </h2>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center justify-center w-[40%] md:w-[25%] group transition-all">
            <img
              className="h-12 md:h-16 brightness-100 group-hover:scale-110 transition-transform"
              src="/lanLogo/python.svg"
              alt="Python"
            />
            <h2 className="text-[10px] md:text-[14px] text-white/30 group-hover:text-blue-400 transition-colors mt-3 uppercase tracking-widest">
              Python
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillDisplay;