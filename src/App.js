import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
