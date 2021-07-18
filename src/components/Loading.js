import React from "react";
import Logo from "../image/Logo.png";
import "../style/Loading.css";

const Loading = () => {
  return (
    <>
      <div className="Loading">
        <div className="middle">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Loading;
