import React from "react";
import rocketImg from "../Assets/Images/rocket.png";
import RegisterComponent from "../Component/RegisterComponent/RegisterComponent";

function RegisterPage() {
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
          <RegisterComponent />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
