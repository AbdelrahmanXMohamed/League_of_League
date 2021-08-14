import React from "react";
import Logo from "../resource/Logo.png";
import "../style/ResetPassword.css";
const ResetPassword = () => {
  return (
    <>
      <h1>ResetPassword Page</h1>
      <div className="ResetPassword">
        <div>
          <img src={Logo} alt="logo" width="200px" />
          <h1 style={{ textAlign: "center" }}>Coming Soon</h1>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
