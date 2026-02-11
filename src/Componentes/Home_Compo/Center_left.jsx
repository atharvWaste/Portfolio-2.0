import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Right from "./Right";

const symbols = ["{", "+", "*", "6", "a", ">", "!", "}", ".", "#", "$", "%"];

const Center_left = () => {
  const indexRef = useRef(0);
  const revealRef = useRef(0);

  const titles = [
    "Web Developer",
    "CyberSecurity Enthusiast",
    "Motivator",
    "Future DevOps Engineer",
    "Tech Innovator",
  ];

  const [printable, setPrintable] = useState("");

  useEffect(() => {
    startCycle();
    return () => clearInterval(window.revealTimer);
  }, []);

  function startCycle() {
    revealWord(titles[indexRef.current]);

    setInterval(() => {
      indexRef.current = (indexRef.current + 1) % titles.length;
      revealWord(titles[indexRef.current]);
    }, 8000);
  }

  function revealWord(word) {
    revealRef.current = 0;

    let temp = Array(word.length)
      .fill("")
      .map(() => symbols[Math.floor(Math.random() * symbols.length)]);

    clearInterval(window.revealTimer);

    window.revealTimer = setInterval(() => {
      if (revealRef.current >= word.length) {
        clearInterval(window.revealTimer);
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
    }, 160);
  }

  return (
    <main >
   <section
      className="
h-105 w-125  m-2.5 rounded-4xl mt-26 ml-16 p-14 relative
bg-white/5
"
    >
      <div>
        <h2 className=" text-4xl w-ls h-40">
          You can call me <br />
          <span className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent max-w-[5vw]">
            {printable}
          </span>
        </h2>
        <h3 className="w-ls transition-transform ease-out duration-700">
          Use AI
          <span className="bg-linear-to-r from-[#8e008b]  to-[#5c008b] bg-clip-text text-transparent text-2xl ml-2 mr-2">
            Atharv's Inteligents
          </span>
          in Creating World
        </h3>
        <button
          className="bg-linear-to-r from-violet-600 to-indigo-600 
          m-7 w-25 h-10 rounded-4xl
          transition-transform duration-300 ease-out
          hover:scale-110
          "
        >
          <Link to="/About">About Me</Link>
        </button>

        <button
          className="bg-linear-to-r from-[#5c008b] to-[#c670ff]
          m-7 w-25 h-10 rounded-4xl
         transition-transform duration-300 ease-out
    hover:scale-110
          "
        >
          <Link to="/About">Resume</Link>
        </button>
      </div>
    </section>

    <Right />
</main>
  );
};

export default Center_left;