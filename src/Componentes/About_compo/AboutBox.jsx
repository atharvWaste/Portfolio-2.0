import Nav from "../Home_Compo/Nav";
import LeftBox from "./LeftBox";
import Education from "./Education";
import Footer from "./Footer";

const About =()=>{
    return (
        <section className="bg-black text-white w-screen h-screen overflow-x-hidden overflow-y-scroll">
           <Nav/>
           <LeftBox/>
           <Education/>
           {/* <Footer/> */}
        </section>
    );
}

export default About