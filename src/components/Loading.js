import React from "react";
import Logo from "../resource/Logo.png";

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
