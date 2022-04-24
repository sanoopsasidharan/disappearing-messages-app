import React from "react";
import HomeContent from "../Component/HomeContent/HomeContent";
import NavBar from "../Component/NavBar/NavBar";
import NavigationBar from "../Component/NavBar/NavigationBar";

function HomePage() {
  return (
    <>
      {/* <NavBar /> */}
      <NavigationBar />

      <div className="container mt-5">
        <div className="row">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-md-12"
          >
            <div>
              <HomeContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
