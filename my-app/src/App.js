import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Footer from "./Components/Footer";
import Doctors from "./HomePage/Doctors";
import Consultant from "./HomePage/Consultant";

import UpperNavbar from "./Components/UpperNavbar";
import Navbar from "./Components/Navbar";

import NewSkin from "./HomePage/NewSkin";
import MainRoutes from "./Pages/MainRoutes";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Singup";
import SkinCare from "./Pages/SkinCare";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/skincare" element={<SkinCare/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
