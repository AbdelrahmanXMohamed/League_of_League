import React, { useRef } from "react";
import "../style/Login.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Logo from "../image/Logo.png";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password.current.value);
    console.log(email.current.value);
  };
  return (
    <>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <div className="handleHeader">
            <h1>Login</h1>
          </div>
          <div className="handleImage">
            <img src={Logo} className="Logo" alt="logo" />
          </div>
          <div className="handleInput">
            <MailOutlineIcon />
            <div className="handleLogo">
              <input type="text" name="email" ref={email} placeholder="Email" />
            </div>
          </div>
          <div className="handleInput">
            <LockOutlinedIcon />
            <div className="handleLogo">
              <input
                type="password"
                name="password"
                ref={password}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="handleSubmit">
            <input type="submit" className="Submit" value="Click" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
