import RightBox from "./RightBox";

const LeftBox = () => {
  return (
    <section>

    <main className=" w-screen overflow-x-clip h-screen flex justify-between">
      <section className=" relative top-26  m-30 h-85 p-10 bg-[#20202045] w-[75vw] border-[0.005px]  border-blue-700">
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-700 "></span>
       <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-700 "></span>

        <div className="">
          <h1 className="text-4xl ml-[5vw]">Atharv R. Waste</h1>
          <p className="mt-[3vh] mask-linear-2">
           Hi! I am Atherv , I am Presiving the Enginering from <span className="text-[#A855F7] text-xl font-mono">KITCOEK College Of Enginering </span>,I belive in adaptivity, I Have Stonge desire to code and create new thing ,      Acpting the current state and getting the result in that direction. I love to make myself better then the last stage .

          </p>
          <div className="flex items-center justify-evenly mt-15">
            <button
              className="border-l border-b border-[#3e3e3e] rounded-4xl w-23 transition-transform duration-300 ease-in 
            hover:bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-110 hover:shadow-[0_0_10px_#6d28d9]
            hover:rotate-1  active:scale-95  
            "
            >
              Insta
            </button>
            <button
              className="border-l border-b border-[#3e3e3e] rounded-4xl w-23 transition-transform duration-300 ease-in 
            hover:bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-110 hover:shadow-[0_0_10px_#6d28d9]
            hover:rotate-1  active:scale-95  
            "
            >
              X
            </button>
            <button
              className="border-l border-b border-[#3e3e3e] rounded-4xl w-23 transition-transform duration-300 ease-in 
            hover:bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-110
             hover:drop-shadow-[0_0_80px_rgba(124,58,23,7,0.9)]
            hover:rotate-1  active:scale-95  
            "
            >
              Linkedin
            </button>
          </div>
        </div>
      </section>

      <RightBox />

    </main>

    </section>
  );
};

export default LeftBox;
