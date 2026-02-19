import RightBox from "./RightBox";

const LeftBox = () => {
  return (
    <section>

    <main className="  w-screen overflow-x-hidden h-full flex flex-col md:flex-row items-center justify-center">
      <section className=" relative  m-30 h-85 p-10 bg-[#20202045] w-[75vw] group overflow-hidden border border-white/10  transition-all hover:border-blue-500/50">
       
        <div className="">
          <h1 className="text-4xl ml-[5vw]">Atharv R. Waste</h1>
          <p className="mt-[3vh] mask-linear-2" style={{
            lineHeight:'20px' ,
            wordSpacing:'2px',
            letterSpacing:'2px'
          }}>
Engineering at the intersection of logic and strategy. Whether it’s a complex algorithm or a chessboard, I play to win. Currently deep-diving into CSE at KITCOEK to bridge the gap between imagination and implementation.          </p>
          <div className="flex items-center justify-evenly mt-15 ">
            <div
              className="border-[#3e3e3e] rounded-4xl w-23 transition-transform duration-300 ease-in 
            group relative
            "
            >
            <a
                href='#'
                target="_blank"
                className="group relative px-8 py-3 overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-blue-500/50"
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>

                <span className="text-[10px] tracking-[0.6em] font-mono text-white group-hover:text-blue-400 transition-colors">
                  Insta
                </span>
              </a>
            </div>
           
            <div
              className=" rounded-4xl w-23 transition-transform duration-300 ease-in 
           group relative
            "
            >
           <a
                href='#'
                target="_blank"
                className="group relative px-8 py-3 overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-blue-500/50"
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>

                <span className="text-[10px] tracking-[0.6em] font-mono text-white group-hover:text-blue-400 transition-colors">
                  linkedin
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <RightBox />

    </main>

    </section>
  );
};

export default LeftBox;
