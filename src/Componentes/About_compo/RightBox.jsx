

const RightBox=()=>{

    return <section className=" z-10 pl-25 pb-10 pt-7  w-screen ml-290 mt-[-80vh] overflow-x-hidden relative">

        <div className="w-150 h-150  rounded-[100%] opacity-70 blur-xl  z-0 absolute"></div>
            <div  className=" animate_orb w-150 h-150    rounded-[100%] relative ">
            <div className='objectAnimation scale-110 w-[5vh] h-[5vh] relative -top-10 z-30  -right-70'><img src="/vite.svg" alt="" /></div>
             <div className='objectAnimation scale-110 w-[5vh] h-[5vh]  relative top-55  z-30 right-5'><img src="/vite.svg" alt="" /></div>
             <div className='objectAnimation scale-110 w-[5vh] h-[5vh]  relative top-120 z-30  -right-70'><img src="/vite.svg" alt="" /></div>
             <div className='objectAnimation scale-110 w-[5vh] h-[5vh]  relative top-45 z-30  -right-145 '><img src="/vite.svg" alt="" /></div>
        </div>
       
    </section>
}

export default RightBox;