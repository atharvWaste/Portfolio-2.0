import { Routes, Route } from "react-router-dom";
import Box from "./Componentes/Home_Compo/Box";
import About from "./Componentes/About_compo/AboutBox";
import BoxProjects from "./Componentes/Projects_compo/BoxProject";
import './index.css'

import '@fortawesome/fontawesome-free/css/all.min.css';
export default function App() {
  return (
  <section>
  <Routes>
      <Route path="/" element={<Box />} />
      <Route path="/About" element={<About />} />
      <Route path="/BoxProjects" element={<BoxProjects />} />
      <Route path="/About" element={<About />} />
      <Route path="/About" element={<About />} />
    </Routes>
   </section>
   );
}