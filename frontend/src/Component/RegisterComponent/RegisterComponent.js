import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../TextField/TextField";
import axios from "../../Axios";
import { useNavigate } from "react-router-dom";

function RegisterComponent() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [ErrorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conFirmPassword, setConFirmPassword] = useState("");

  const Validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less ")
      .required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(4, "password must be at least 4 characters ")
      .required("Password is required"),
    conFirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password is must match ")
      .required("ConFirmpassword required"),
  });

  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        conFirmPassword: "",
      }}
      validationSchema={Validate}
      onSubmit={async (values) => {
        try {
          setErrorMessage("");
          await axios
            .post("/register_user", { values })
            .then((res) => {
              console.log(res);
              if (res.data.user) {
                navigate("/login");
              } else {
                setErrorMessage(res.data.msg);
              }
            })
            .catch((error) => {
              setErrorMessage("somthing error");
              console.log("this is catch methos");
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {(formik) => (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 className="my-4 font-weight-bold .display-4">Register</h1>
          </div>
          <Form>
            <TextField label="Name" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="ConFirm password"
              name="conFirmPassword"
              type="password"
            />
            <div
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p>{ErrorMessage}</p>
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
              <p>I have already account</p>
            </div>
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

export default RegisterComponent;
