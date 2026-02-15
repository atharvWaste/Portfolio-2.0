import { Link } from "react-router-dom";

const Nav = () => {
  
  return (
    <section className="bg-[#26262675] p-3 w-6xl ml-52 mt-10  border-[#131313b0]  relative" >
       <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-900 "></span>
       <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-900 "></span>
      <nav className="flex  justify-evenly ">
        <div id="rightLogo" className="text-2xl font-semibold
    relative inline-block px-4 py-2

    bg-linear-to-r from-violet-600 to-indigo-600
    bg-clip-text text-transparent

    transition-all duration-300
    hover:scale-110

    before:content-['']
    before:absolute before:inset-0
    before:-z-10
    before:rounded-full

    before:bg-linear-to-r before:from-violet-600 before:to-indigo-600
    before:opacity-0
    before:blur-lg
    before:transition-opacity before:duration-300

    hover:before:opacity-20
  ">
          <a
            href="/"
            className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent
            "
          >
            Atharv
          </a>
        </div>
        <div id="Leftbtn" className="flex relative -top-1 left-5 items-center justify-center">
          <Link to="/AboutBox" className="ml-5 
                    hover:underline decoration-indigo-600 underline-offset-30
                    transition duration-300 ease-in-out
                    hover: translate-y-1
                    hover:scale-85
                    after:content-['']
                    after:transition-[width] after:duration-300 
                    hover:after:w-full">About</Link>
         
          <Link to="/BoxProjects"
            className="ml-5 
                    hover:underline decoration-indigo-600 underline-offset-30
                    transition duration-300 ease-in-out
                    hover: translate-y-1
                    hover:scale-85
                    "
          >
            Projects
          </Link>
          <Link to="/ExpertiesBox"
            className="ml-5 
                    hover:underline decoration-indigo-600 underline-offset-30
                    transition duration-300 ease-in-out
                    hover: translate-y-1
                    hover:scale-85
                    "
          >
            Skill Zone
          </Link>
          <Link to="/ContectBox"
            className="ml-5 
                    hover:underline decoration-indigo-600 underline-offset-30
                    transition duration-300 ease-in-out
                    hover: translate-y-1
                    hover:scale-85
                    "
          >
            ContectBox
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
