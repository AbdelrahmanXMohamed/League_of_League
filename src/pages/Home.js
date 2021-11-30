import React from "react";
import logo from "../resource/Logo.png";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="Top">
          <img src={logo} alt="logo" />
          <div className="SearchBorder">
            <input
              placeholder="Chamption Name"
              type="text"
              className="Search"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
