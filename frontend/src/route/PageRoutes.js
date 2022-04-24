import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import axios from "../Axios";
import ShowingData from "../Pages/ShowingData";
import Listofmessage from "../Pages/Listofmessage";
axios.defaults.withCredentials = true;

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Data/:id" element={<ShowingData />} />
        <Route path="/table" element={<Listofmessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
