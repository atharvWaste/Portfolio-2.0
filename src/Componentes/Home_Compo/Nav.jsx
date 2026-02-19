import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  // Logic for a mobile toggle menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" bg-[#26262675] p-3 w-[92%] mx-auto mt-6 border-[#131313b0] relative 
                        md:w-6xl md:ml-52 md:mt-10">
       <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-900 "></span>
       <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-900 "></span>
      
      <nav className="flex items-center justify-between md:justify-evenly">
        {/* Logo Section */}
        <div id="rightLogo" className="text-2xl font-semibold relative inline-block px-4 py-2 bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-110 before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-linear-to-r before:from-violet-600 before:to-indigo-600 before:opacity-0 before:blur-lg before:transition-opacity before:duration-300 hover:before:opacity-20">
          <a href="/" className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Atharv
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div id="Leftbtn" className={`${isOpen ? 'flex' : 'hidden'} 
          absolute top-16 left-0 w-full bg-[#1a1a1ae6] flex-col items-center py-5 space-y-4 z-50
          md:static md:flex md:flex-row md:w-auto md:bg-transparent md:space-y-0 md:p-0 md:top-auto`}>
          
          <Link to="/AboutBox" className="md:ml-5 hover:underline decoration-indigo-600 underline-offset-30 transition duration-300 ease-in-out hover:translate-y-1 hover:scale-85">About</Link>
         
          <Link to="/BoxProjects" className="md:ml-5 hover:underline decoration-indigo-600 underline-offset-30 transition duration-300 ease-in-out hover:translate-y-1 hover:scale-85">
            Projects
          </Link>
          
          <Link to="/ExpertiesBox" className="md:ml-5 hover:underline decoration-indigo-600 underline-offset-30 transition duration-300 ease-in-out hover:translate-y-1 hover:scale-85">
            Skill Zone
          </Link>
          
          <Link to="/ContectBox" className="md:ml-5 hover:underline decoration-indigo-600 underline-offset-30 transition duration-300 ease-in-out hover:translate-y-1 hover:scale-85">
            Contact Us
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Nav;