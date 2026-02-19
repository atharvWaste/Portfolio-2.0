import { Link } from "react-router-dom";

import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
const Footer = () => {
  return (
    <>
      <section className="mt-5 bg-[#1b1a1a8f] h-full relative w-screen flex flex-col overflow-hidden">
        <div className="flex justify-center mt-7 mb-7">
          Made With ❤️ And Code
        </div>
        <hr className="bg-[#3e3e3e] border-0 h-px" />
        <div className="flex m-6 justify-evenly">
          <div className=" top-25 w-125 p-10">
            <div>
            <h1 className="xl:text-3xl md:text-2xl sm:text-xl">
              Atharv R. Vaste
            </h1>
            <br />
            <p>
              The feeling of creating some thing is a lot more then any thing.
              If You like the project Dont forget to Like And follow me On
              Different Platforms Your Single Click Motivats Me A Lot.
            </p>
            </div>
            <div className=" flex justify-evenly mt-10 -ml-25 ">
              <span className="insta_colo">
                <a href="https://www.instagram.com/atharv_16o8/">
                  <Instagram size={30} />
                </a>
              </span>
              <span className="insta_colo">
                <a href="https://www.linkedin.com/in/atharv-vaste-814430372/">
                  <Linkedin size={30} />
                </a>
              </span>
              <span className="insta_colo">
                <Twitter size={30} />
              </span>
            </div>
          </div>

          <div className=" flex flex-col">
            <div className="flex h-[50vh] w-[30vw] p-5 justify-between">
              <div className="flex flex-col iteam-start">
                <Link to="/AboutBox">About</Link>
                <Link to="/BoxProjects">Projects</Link>
                <Link to="/ExpertiesBox">Skill Zone</Link>
                <Link to="/ContectBox">Contect Us</Link>
              </div>
              <div className=" flex flex-col">
                <a href="#">Github</a>
                <a href="#">HackerRank</a>
                <a href="https://www.linkedin.com/in/atharv-vaste-814430372/">
                  linked
                </a>
              </div>
            </div>

            <div>
              <div>
                <h2>We Will Love To Here You🤓</h2>
              </div>
              <div className="w-25 h-10 border-2 flex justify-center items-center p-3 m-3 rounded-4xl">
              <Link to="/ContectBox">feedBack</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <hr className="bg-[#3e3e3e] border-0 h-px" />
          <div className="flex items-center justify-center">
            <p>Feel free to follow, your one click motivates Us a lot🔥</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
