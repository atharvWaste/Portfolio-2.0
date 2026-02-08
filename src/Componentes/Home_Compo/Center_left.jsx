import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Center_left = () => {

  const count = useRef(0);

  const [index, setIndex] = useState(0);
  const [word, setWord] = useState("SOmething1");
  const [printable, setPrintable] = useState("");

  const arrayOfNames = [
    "Web Developer",
    "CyberSecurity Enthusiast",
    "Motivator",
    "Futuer DevOps Engineer",
    "Tech Innovator",
  ];

  const [theOneUWanted, setTheOneUWanted] = useState(
    Array(arrayOfNames[0].length).fill("%")
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = (index + 1) % arrayOfNames.length;
      const newWord = arrayOfNames[newIndex];

      setWord(newWord);
      setIndex(newIndex);

      startReveal(newWord);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  function startReveal(newWord) {
    const afterSplit = newWord.split("");
    count.current = 0;

    let temp =["$", ")","{","]","@","|","!", "&","^","."];

    const interval = setInterval(() => {
      if (count.current >= afterSplit.length) {
        clearInterval(interval);
        return;
      }

      temp[count.current] = afterSplit[count.current];
      count.current++;

      setTheOneUWanted([...temp]);
      setPrintable(temp.join(""));
    }, 120);
  }
  return (
    <section
      className="
h-105 w-125  m-2.5 rounded-4xl mt-26 ml-16 p-14 relative
bg-white/5
"
    >
      <div>
        <h2 className=" text-4xl w-ls h-40">
          You can call me <br />
          <span className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
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
  );
};

export default Center_left;
