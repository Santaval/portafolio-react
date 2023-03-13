import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import AboutMe from "./Views/AboutMe";
import Landing from "./Views/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/Inicio" element={<Landing />}/>
          <Route path="/sobreMi" element={<AboutMe />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
