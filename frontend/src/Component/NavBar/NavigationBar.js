import React, { useContext } from "react";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import "./NavigatonBar.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import axios from "../../Axios";
import UserContext from "../../Store/UserContext";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const { getUserLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/table");
  };
  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleLogOut = () => {
    try {
      axios
        .post("/loggedout")
        .then(async (res) => {
          console.log(res);
          getUserLogged();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navigationBarMainDiv col-12">
      <div onClick={handleNavigateHome} className="navigationBarLeftDiv">
        <BakeryDiningIcon style={{ fontSize: "55px" }} />
        <span>M&L</span>
      </div>
      <div className="navigationBarLeftDiv">
        <div onClick={handleNavigate} className="navigationBarLeftDiv">
          <span> Message&Link</span>
        </div>
        <button onClick={handleLogOut} className="logOutButton">
          <div>
            <span>
              <p>LogOut</p>
            </span>
          </div>
          <div>
            <span style={{ color: "white" }}>
              Bye
              <SentimentVeryDissatisfiedIcon style={{ color: "white" }} />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
