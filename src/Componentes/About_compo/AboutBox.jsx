
import LeftBox from "./LeftBox";
import Education from "./Education";
import Footer from "./Footer";
import IntroAbout from "./IntroAbout";

const About =()=>{
    return (
        <section className="bg-black text-white w-screen min-h-screen  overflow-y-scroll">
          <IntroAbout />
           <LeftBox/>

           <Education/>

           <Footer/>
        </section>
    );
}

export default About