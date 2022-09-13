import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navs/Nav";
import Home from "./Pages/Home";
import Akansha from "./Components/Team/Details/Akansha";
import Sampath from "./Components/Team/Details/Sampath";
import Vishakha from "./Components/Team/Details/Vishakha";
import Sasi from "./Components/Team/Details/Sasi";
import Nisal from "./Components/Team/Details/Nisal";
import Prabhakar from "./Components/Team/Details/Prabhakar";
import Sonica from "./Components/Team/Details/Sonica";
import Pramoda from "./Components/Team/Details/Pramoda";
import Tanmay from "./Components/Team/Details/Tanmay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/navs" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/akansha" element={<Akansha />} />
          <Route path="/sampath" element={<Sampath />} />
          <Route path="/vishakha" element={<Vishakha />} />
          <Route path="/sasi" element={<Sasi />} />
          <Route path="/nisal" element={<Nisal />} />
          <Route path="/prabhakar" element={<Prabhakar />} />
          <Route path="/sonica" element={<Sonica />} />
          <Route path="/pramoda" element={<Pramoda />} />
          <Route path="/tanmay" element={<Tanmay />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
