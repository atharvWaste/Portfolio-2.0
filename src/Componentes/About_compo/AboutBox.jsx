import React, { useEffect } from 'react';

import LeftBox from "./LeftBox";
import Education from "./Education";
import Footer from "./Footer";
import IntroAbout from "./IntroAbout";

const About = () => {
    
    return (
        <section className="bg-black text-white w-full min-h-screen overflow-visible">
          <IntroAbout />
          <LeftBox />
          <Education />
          <Footer />
        </section>
    );
}

export default About;