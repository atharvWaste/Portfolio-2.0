import { useEffect, useState } from "react";

const Education = () => {
  return (
    <section className="flex justify-evenly h-screen overflow-x-hidden">
      <section className="z-10 pl-25 pb-7 pt-7 pr-5 -ml-120 overflow-y-hidden overflow-x-hidden relative">
        <div className="w-150 h-130  rounded-[100%] opacity-70 blur-xl  z-0 absolute"></div>
        <div className=" animate_orb_oppo w-150 h-140  rounded-[100%] relative ">
          <div className="objectAnimation_oppo scale-110 w-[5vh] h-[5vh] relative -top-10 z-30  -right-70">
            <img src="/vite.svg" />
          </div>
          <div className="objectAnimation_oppo scale-110 w-[5vh] h-[5vh]  relative top-55  z-30 right-5">
            <img src="/vite.svg" />
          </div>
          <div className="objectAnimation_oppo scale-110 w-[5vh] h-[5vh]  relative top-120 z-30  -right-70">
            <img src="/vite.svg" />
          </div>
          <div className="objectAnimation_oppo scale-110 w-[5vh] h-[5vh]  relative top-45 z-30  -right-145 ">
            <img src="/vite.svg" />
          </div>
        </div>
      </section>

      <section>
        <div className="z-30   w-xl m-30 h-85 p-10 rounded-3xl  bg-[#20202045]   border-l-[0.25px] border-t-[0.25px] border-[#212121]">
          <div>
            <h1 className="text-3xl">Atharv</h1>

            <p className="mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
              minus. Amet aliquam magni quaerat nam, illo laboriosam quae
              architecto voluptas quisquam totam quis exercitationem quo
              quibusdam quos, assumenda officia animi?
            </p>
            <button className="border-l-[0.1px] border-b-[0.1px] rounded-4xl w-18.75 mt-6  border-[#515151]
                    ">
              <a href="#">The btn</a>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Education;
