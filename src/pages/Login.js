import React, { useRef, useState } from "react";
import "../style/Login.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Logo from "../resource/Logo.png";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const email = useRef(null);
  const password = useRef(null);
  const [faded, setfaded] = useState(false);
  const handleLogin = (email, password) => {
    console.log("email : " + email);
    console.log("password : " + password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = email.current.value;
    const passwordData = password.current.value;
    handleLogin(emailData, passwordData);
  };
  const redirect = (e) => {
    setfaded(true);
    console.log(e.target.id);
    setTimeout(() => history.push(`/${e.target.id}`), 500);
  };
  return (
    <>
      <div className={"Login"}>
        <form onSubmit={handleSubmit}>
          <div className={faded ? "fade" : null}>
            <div className="handleImage">
              <img src={Logo} className="Logo" alt="logo" />
            </div>
            <div className="handleHeaderLogin">
              <h1>Login</h1>
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
            <div className="handleSubmit">
              <input type="submit" className="Submit" value="Login" />
            </div>
            <div className="moreLinks">
              <p id="Register" onClick={redirect}>
                Register
              </p>
              <p id="ForgetPassword" onClick={redirect}>
                Forget Password ?
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
