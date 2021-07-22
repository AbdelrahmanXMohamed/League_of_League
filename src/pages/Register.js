import React, { useRef, useState } from "react";
import "../style/Login.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Logo from "../image/Logo.png";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const email = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);
  const [faded, setfaded] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = email.current.value;
    const password = password.current.value;
    const confirmPassword = confirmpassword.current.value;
  };
  const redirect = () => {
    setfaded(true);
    setTimeout(() => history.push("/Login"), 500);
  };
  return (
    <>
      <div className={"Login"}>
        <form onSubmit={handleSubmit}>
          <div className={faded ? "fade" : null}>
            <div className="handleHeaderRegister">
              <h1>Register</h1>
            </div>
            <div className="handleImage">
              <img src={Logo} className="Logo" alt="logo" />
            </div>
            <div className="handleInput">
              <MailOutlineIcon />
              <div className="handleLogo">
                <input
                  type="text"
                  name="email"
                  ref={email}
                  placeholder="Email"
                />
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
            <div className="handleInput">
              <LockOutlinedIcon />
              <div className="handleLogo">
                <input
                  type="confirmpassword"
                  name="confirmpassword"
                  ref={confirmpassword}
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="handleSubmit">
              <input type="submit" className="Submit" value="Register" />
            </div>
            <div className="registerLink">
              <p onClick={redirect}>Login</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
