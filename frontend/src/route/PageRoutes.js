import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import axios from "../Axios";
import ShowingData from "../Pages/ShowingData";
import Listofmessage from "../Pages/Listofmessage";
import UserContext from "../Store/UserContext";
axios.defaults.withCredentials = true;

function PageRoutes() {
  const { userLoggedIn } = useContext(UserContext);
  console.log(userLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={userLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!userLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!userLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route path="/Data/:id" element={<ShowingData />} />
        <Route path="/table" element={<Listofmessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
