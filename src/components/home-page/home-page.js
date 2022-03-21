import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBar from "../header-bar/header-bar";
import CreateSecret from "../create-secret/create-secret";
import RetrieveSecret from "../retrieve-secret/retrieve-secret";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <HeaderBar />
      <BrowserRouter>
        <Routes>
          <Route path="/:linkForSecret" element={<RetrieveSecret />}></Route>
          <Route path="/" element={<CreateSecret />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
