import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Portfolio from "./Views/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
