import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../TextField/TextField";
import axios from "../../Axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Store/UserContext";

function LoginComponent() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { getUserLogged } = useContext(UserContext);
  const Validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(4, "password must be at least 4 characters ")
      .required("Password is required"),
  });

  const handleNavigate = () => {
    navigate("/register");
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Validate}
      onSubmit={(values) => {
        setErrorMessage("");
        axios
          .post("/login_user", { values })
          .then(async (res) => {
            if (res.data.loggedIn) {
              await getUserLogged();
              navigate("/");
            } else {
              setErrorMessage("email and password is not match");
            }
          })
          .catch((err) => {
            setErrorMessage("email and password is not match");
            console.log(err);
          });
      }}
    >
      {(formik) => (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          </div>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <div
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <p>{errorMessage}</p>
            </div>
            <div
              onClick={handleNavigate}
              style={{
                color: "black",
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              <p>Create an account</p>
            </div>
            <button
              style={{ width: "100%" }}
              className="btn btn-dark"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default LoginComponent;
