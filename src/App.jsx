import { Routes, Route } from "react-router-dom";
import Box from "./Componentes/Home_Compo/Box";
import AboutBox from "./Componentes/About_compo/AboutBox.jsx";
import ContectBox from "./Componentes/Contect_compo/ContectBox.jsx";
import BoxProjects from "./Componentes/Projects_compo/BoxProject";
import ExpertiesBox from "./Componentes/Experties_compo/ExpertiesBox.jsx"
import './index.css'



import '@fortawesome/fontawesome-free/css/all.min.css';



export default function App() {
  return (
   <Routes >
      <Route path="/" element={<Box />} />
      <Route path="/AboutBox" element={<AboutBox />} />
      <Route path="/BoxProjects" element={<BoxProjects />} />
      <Route path="/ContectBox" element={<ContectBox />} />
      <Route path="/ExpertiesBox" element={<ExpertiesBox />} />
    </Routes>
   );
}