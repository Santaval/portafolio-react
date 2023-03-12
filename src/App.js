import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Landing from "./Views/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
