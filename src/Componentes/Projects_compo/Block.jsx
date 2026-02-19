
const Block = () => {


  return (


      <section className="Card relative z-30  w-xl m-30 h-85 p-10 -mt-[10vh]  bg-[#1b1a1a8f] ">
       <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-700 "></span>
       <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-700 "></span>
          <h1 className="text-4xl ml-[5vw]">Atharv R. Waste</h1>
          <p className="mt-[3vh]">
<ul className="list-disc list-inside space-y-2 text-gray-400">
  <li className="hover:text-purple-500 transition-colors">Mastering MREN stack</li>
  <li className="hover:text-purple-500 transition-colors">Architecting REST APIs</li>
  <li className="hover:text-purple-500 transition-colors">Mastering Server side Js</li>
</ul>
          </p>
          <div className="flex  items-center justify-evenly mt-[3vh]">
             

            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7420791083946848256/?originTrackingId=KjZlukcpV0DWSO4Vnryv4Q%3D%3D"
              className=" w-23 transition-transform duration-300 ease-in 
            hover:hover:scale-110 hover:shadow-[0_0_10px_#6d28d9]
           active:scale-95 relative 
            "
            >
              <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-700 "></span>
       <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-700 "></span>
             <span className="text-[10px] tracking-[0.6em] font-mono p-5 text-white group-hover:text-blue-400 transition-colors">
      More
    </span>
            </a>
          </div>

      </section>

  );
};

export default Block;
