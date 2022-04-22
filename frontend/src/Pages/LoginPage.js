import React from "react";
import rocketImg from "../Assets/Images/rocket.png";
import LoginComponent from "../Component/LoginComponent/LoginComponent";

function LoginPage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-md-5"
        >
          <LoginComponent />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
