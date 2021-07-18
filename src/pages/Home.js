import React from "react";
import Logo from "../image/Logo.png";
import "../style/Home.css";
const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div className="Home">
        <div>
          <img src={Logo} alt="logo" width="200px" />
          <h1 style={{ textAlign: "center" }}>Coming Soon</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
