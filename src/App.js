import "./app.css";
import React from "react";
import { Routes, Route } from "react-router";
import { Header } from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
