import React from "react";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import "./NavigatonBar.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function NavigationBar() {
  return (
    <div className="navigationBarMainDiv">
      <div className="navigationBarLeftDiv">
        <BakeryDiningIcon style={{ fontSize: "55px" }} />
        <span>sanoop</span>
      </div>
      <div className="navigationBarLeftDiv">
        <button className="logOutButton">
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
