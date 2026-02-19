import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Right from "./Right";

const symbols = ["{", "+", "*", "6", "a", ">", "!", "}", ".", "#", "$", "%"];

const Center_left = () => {
  const indexRef = useRef(0);
  const revealRef = useRef(0);
  const cycleTimerRef = useRef(null);
  const revealTimerRef = useRef(null);

  const titles = [
    "Web Developer",
    "CyberSecurity Enthusiast",
    "Motivator",
    "Future DevOps Engineer",
    "Tech Innovator",
  ];

  const [printable, setPrintable] = useState("");

  useEffect(() => {
    // Initial start
    revealWord(titles[0]);

    // Cycle titles every 5 seconds
    cycleTimerRef.current = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % titles.length;
      revealWord(titles[indexRef.current]);
    }, 5000);

    return () => {
      clearInterval(cycleTimerRef.current);
      clearInterval(revealTimerRef.current);
    };
  }, []);

  function revealWord(word) {
    revealRef.current = 0;
    clearInterval(revealTimerRef.current);

    let temp = Array(word.length)
      .fill("")
      .map(() => symbols[Math.floor(Math.random() * symbols.length)]);

    revealTimerRef.current = setInterval(() => {
      if (revealRef.current >= word.length) {
        clearInterval(revealTimerRef.current);
        setPrintable(word);
        return;
      }

      temp = temp.map((char, i) =>
        i <= revealRef.current
          ? word[i]
          : symbols[Math.floor(Math.random() * symbols.length)]
      );

      setPrintable(temp.join(""));
      revealRef.current++;
    }, 100);
  }

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col lg:flex-row items-center justify-center p-6 md:p-12 gap-10 overflow-x-hidden">
      <section className="relative w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        
        {/* Container: Min-height prevents the whole page from jumping */}
        <div className="rounded-4xl bg-white/5 p-8 w-full max-w-2xl min-h-112.5 flex flex-col justify-center transition-all duration-700 border border-white/10">
          
          <h2 className="text-3xl md:text-5xl font-medium mb-4 leading-tight">
            You can call me <br />
            
            {/* Height-locked wrapper for the animated text */}
            <div className="min-h-[1.5em] flex items-center justify-center lg:justify-start">
               <span className="block bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-mono text-2xl md:text-4xl lg:text-5xl wrap-break-words">
                {printable || "\u00A0"}
              </span>
            </div>
          </h2>

          <div className="mt-6">
            <h3 className="text-gray-400 text-lg md:text-xl font-normal">
              Use AI
              <span className="bg-linear-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent text-xl md:text-2xl font-semibold mx-2 italic">
                Atharv's Intelligence
              </span>
              in Creating World
            </h3>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <Link 
                to="/AboutBox"
                className="bg-linear-to-r from-violet-600 to-indigo-600 px-8 py-3 rounded-full hover:scale-105 transition-transform text-sm font-medium"
              >
                Contact Me
              </Link>

              <Link 
                to="/About"
                className="bg-linear-to-r from-purple-900 to-fuchsia-800 px-8 py-3 rounded-full hover:scale-105 transition-transform text-sm font-medium border border-white/10"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex justify-center">
        <Right />
      </section>
    </main>
  );
};

export default Center_left;