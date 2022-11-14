import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import SkinCare from "./Pages/SkinCare";
import Login from "./Newlogin/Login";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/skincare" element={<SkinCare/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
