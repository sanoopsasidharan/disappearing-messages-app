import React, { createContext, useEffect, useState } from "react";
import axios from "../Axios";
const UserContext = createContext(null);

function UserContextProvider(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserLogged();
  }, [userLoggedIn]);

  const getUserLogged = () => {
    axios
      .post("/msg&link/userIsLoggedIn")
      .then((result) => {
        if (result.data.user === false) setUserLoggedIn(false);
        else setUserLoggedIn(true);
        const userData = result.data.payload;
        if (!!userData) setUserData(userData);
      })
      .catch((err) => {
        setUserLoggedIn(false);
      });
  };
  return (
    <UserContext.Provider value={{ userLoggedIn, userData, getUserLogged }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContextProvider };

export default UserContext;
