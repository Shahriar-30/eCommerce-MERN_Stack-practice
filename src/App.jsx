import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LinkPage from "./Components/layout/LinkPage";

function App() {
  return (
    <>
      <p>this is top</p>
      <div>
        <LinkPage path="/about" txt="about" />
        <LinkPage className='text-red-500' path="/" txt="home" />
      </div>
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="/about" element={<>about</>} />
      </Routes>
      <p>this is bottom</p>
    </>
  );
}

export default App;
