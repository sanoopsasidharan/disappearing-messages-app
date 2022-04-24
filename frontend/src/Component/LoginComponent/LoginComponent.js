import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../TextField/TextField";
import axios from "../../Axios";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const navigate = useNavigate();

  const Validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(4, "password must be at least 4 characters ")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Validate}
      onSubmit={(values) => {
        axios
          .post("/login_user", { values })
          .then((res) => {
            if (res.data.loggedIn) {
              navigate("/");
            }
            console.log(res);
          })
          .catch((err) => {
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
            <button
              style={{ width: "100%" }}
              className="btn btn-dark mt-3"
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
