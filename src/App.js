import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import AboutMe from "./Views/AboutMe";
import Contact from "./Views/Contact";
import Experience from "./Views/Experience";
import Landing from "./Views/Landing";
import Projects from "./Views/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/Inicio" element={<Landing />}/>
          <Route path="/sobreMi" element={<AboutMe />}/>
          <Route path="/Experiencia" element={<Experience />}/>
          <Route path="/Proyectos" element={<Projects />}/>
          <Route path="/Contacto" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
