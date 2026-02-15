import { useState } from "react";

const SkillDisplay = () => {
  
  return (
    <section className="w-screen h-screen mt-[25vh]">
      <div className="bg-[#0b0b0b] w-[60%] ml-5 h-140 absolute">
        <div className=" w-[95%] h-[15%] bg-[#060606] top-5 left-3.5  group cursor-pointer relative flex justify-center align-middle">
          <h2
            className="group text-7xl font-black transition-all duration-700 select-none 
              text-transparent stroke-white stroke-2 group-hover:text-white"
            style={{ WebkitTextStroke: "0.75px rgba(255,255,255,0.2)" }}
          >
            My Skills
          </h2>
        </div>
        <div className="bg-[#060606] w-[95%] h-[75%] top-10 left-5 relative flex flex-col">
         
          <div className="w-full h-[60%]  flex align-super">
            <div className="Filter w-[60%] m-2 h-[40%] top-10 relative flex flex-col justify-center align-middle">
              <img
                className="h-[40%] brightness-90 grayscale-10"
                src="/vite.svg"
                alt=""
              />
              <h2 className="text-30px text-white/30 group-hover:text-blue-400 transition-colors flex justify-center-safe mt-1 ">
                Name
              </h2>
            </div>
            <div className="Filter w-[60%] m-2 h-[40%] top-10 relative flex flex-col justify-center align-middle">
              <img
                className="h-[40%] brightness-90 grayscale-10"
                src="/vite.svg"
                alt=""
              />
              <h2 className="text-30px text-white/30 group-hover:text-blue-400 transition-colors flex justify-center-safe mt-1 ">
                Name
              </h2>
            </div>
            <div className="Filter w-[60%] m-2 h-[40%] top-10 relative flex flex-col justify-center align-middle">
              <img
                className="h-[40%] brightness-90 grayscale-10"
                src="/vite.svg"
                alt=""
              />
              <h2 className="text-30px text-white/30 group-hover:text-blue-400 transition-colors flex justify-center-safe mt-1 ">
                Name
              </h2>
            </div>
          </div>
          <div className="w-full h-[60%]  flex">
            <div className="Filter w-[60%] m-2 h-[40%] top-10 relative flex flex-col justify-center align-middle">
              <img
                className="h-[40%] brightness-90 grayscale-10"
                src="/vite.svg"
                alt=""
              />
              <h2 className="text-30px text-white/30 group-hover:text-blue-400 transition-colors flex justify-center-safe mt-1 ">
                Name
              </h2>
            </div>
            <div className="Filter w-[60%] m-2 h-[40%] top-10 relative flex flex-col justify-center align-middle">
              <img
                className="h-[40%] brightness-90 grayscale-10"
                src="/vite.svg"
                alt=""
              />
              <h2 className="text-30px text-white/30 group-hover:text-blue-400 transition-colors flex justify-center-safe mt-1 ">
                Name
              </h2>
            </div>
            <div className="Filter w-[60%] m-2 h-[40%] top-10 relative flex flex-col justify-center align-middle">
              <img
                className="h-[40%] brightness-90 grayscale-10"
                src="/vite.svg"
                alt=""
              />
              <h2 className="text-30px text-white/30 group-hover:text-blue-400 transition-colors flex justify-center-safe mt-1 ">
                Name
              </h2>
            </div>
          </div>

        </div>
      </div>
      <div></div>
    </section>
  );
};

export default SkillDisplay;
