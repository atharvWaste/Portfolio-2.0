import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
const Footer = () => {
  return (
    <>
      <section className="mt-5 bg-[#1b1a1a8f] h-150 w-screen flex flex-col ">
        <div className="flex justify-center mt-7 mb-7">
          made with 🩷 and code
        </div>
        <hr className="bg-[#3e3e3e] border-0 h-px" />
        <div className="flex m-6 justify-evenly">
          <div className="relative top-25 w-125">
            <h1 className="text-3xl"> Atharv R. Vaste</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.o in
              rerum, consequatur recusandae necessitatibus quia! Doloremque,
              fugiat.
            </p>
            <div className=" flex justify-evenly mt-10 -ml-25 ">
              <span className="insta_colo">
               <Instagram size={30}/>
               </span>
               <span className="insta_colo">
               <Linkedin size={30}/>
               </span>
               <span className="insta_colo">
               <Twitter size={30}/>
               </span>
            </div>
          </div>

<div className="relative flex flex-col mb-0">
          <div className="flex justify-between ">
            
            <div className="relative top-25 flex flex-col">
              <a href="#">About</a>
              <a href="#">Education</a>
              <a href="#">project</a>
              <a href="#">contects</a>
            </div>
            <div className="relative top-25 flex flex-col">
              <a href="#">Github</a>
              <a href="#">HackerRank</a>
              <a href="#">linked</a>
            </div>
          </div>

          <div className="relative top-50">
            <div>
              <h2>We Will Love To Here You🤓</h2>
            </div>
            <button>FeedBack</button>
          </div>
</div>

        </div>
        <div className="relative top-65">
          <hr className="bg-[#3e3e3e] border-0 h-px" />
          <div className="relative left-150">
            <p>Feel free to follow, your one click motivates Us a lot🔥</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
