import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/navBar/NavBar";
import Header from "./Components/header/Header";
import Container from "./Components/layout/Container";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Header />
        <Container />
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
