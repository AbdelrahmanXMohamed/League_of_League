import React, { useRef, useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Logo from "../resource/Logo.png";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const email = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);
  const [faded, setfaded] = useState(false);
  const handleRegister = (email, password, confirmPassword) => {
    console.log("email : " + email);
    console.log("password : " + password);
    console.log("confirmPassword : " + confirmPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = email.current.value;
    const passwordData = password.current.value;
    const confirmPasswordData = confirmpassword.current.value;
    handleRegister(emailData, passwordData, confirmPasswordData);
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
            <div className="handleImage">
              <img src={Logo} className="Logo" alt="logo" />
            </div>
            <div className="handleHeaderRegister">
              <h1>Register</h1>
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
