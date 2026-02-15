import Nav from "../Home_Compo/Nav"
import Block from "./Block"
import IntroProject from "./IntroProject"
import Footer from "../About_compo/Footer"
import ProjectOne from "./ProjectOne"

const BoxProjects=() =>{
    return(
 <section className="bg-black w-screen h-screen overflow-x-hidden overflow-y-scroll text-white ">
 <Nav />
 <IntroProject/>
<ProjectOne />
<Block /> 
<Footer />
   </section>
   );
}

export default BoxProjects