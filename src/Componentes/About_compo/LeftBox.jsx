import RightBox from "./RightBox";

const LeftBox = () => {
  return (
    <section>

    <main className=" w-screen overflow-x-clip h-screen flex justify-between">
      <section className=" relative top-26  m-30 h-85 p-10 rounded-3xl  bg-[#20202045] w-[75vw]  border-l-[0.25px] border-t-[0.25px] border-[#212121]">
        <div className="">
          <h1 className="text-4xl ml-[5vw]">Atharv R. Waste</h1>
          <p className="mt-[3vh]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nam
            sunt ipsum fugiat voluptatum iure excepturi ea animi veritatis
            numquam tempore fuga voluptates sequi rerum officiis! Deserunt nobis
            reprehenderit distinctio.
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
