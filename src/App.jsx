import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/navBar/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<>about</>} />
      </Routes>
      {/* <p>this is bottom</p> */}
    </>
  );
}

export default App;
