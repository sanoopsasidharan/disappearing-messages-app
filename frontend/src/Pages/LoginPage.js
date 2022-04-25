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
          <img
            className="img-fluid w-60"
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
