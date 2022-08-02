import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navs/Nav";

// import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/navs" element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
