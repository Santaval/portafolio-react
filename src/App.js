import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileNav from "./Components/MobileNav";
import { MbNavContext } from "./context/MbNavState";
import "./css/App.css";
import AboutMe from "./Views/AboutMe";
import API from "./Views/API";
import Contact from "./Views/Contact";
import Experience from "./Views/Experience";
import Landing from "./Views/Landing";
import Projects from "./Views/Projects";

function App() {

  const {nav} = useContext(MbNavContext)

  return (
    <>

      <BrowserRouter>
      {nav &&  <MobileNav/>}
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/Inicio" element={<Landing />}/>
          <Route path="/sobreMi" element={<AboutMe />}/>
          <Route path="/Experiencia" element={<Experience />}/>
          <Route path="/Proyectos" element={<Projects />}/>
          <Route path="/Contacto" element={<Contact />}/>
          <Route path="/API'S" element={<API />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
