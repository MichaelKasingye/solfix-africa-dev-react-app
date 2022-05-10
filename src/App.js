import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Components/NavBar";

import Tapp from "./Pages/App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
<Nav/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/test" element={<Tapp />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
