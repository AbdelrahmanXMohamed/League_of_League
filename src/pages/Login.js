import React, { useRef, useState } from "react";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Logo from "../resource/Logo.png";
import { Link, useHistory } from "react-router-dom";


const Login = () => {
  let history = useHistory();
  history.location.pathname.replace("/", "")
  const username = useRef("");
  const password = useRef("");
  const [faded, setfaded] = useState(false);
  const handleLogin = (username, password) => {
    console.log("username : " + username);
    console.log("password : " + password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameData = username.current.value;
    const passwordData = password.current.value;
    handleLogin(usernameData, passwordData);
  };
  const redirect = (e) => {
    setfaded(true);
    console.log(e.target.id);
    setTimeout(() => history.push(`/${e.target.id}`), 500);
  };
  return (
    <>
      <div className="Form">
        <h2>Login</h2>
        <div className="Sign">
          <Link className={history.location.pathname.replace("/", "") === "login" ? "login active" : "login"} to="/login">
            Login
          </Link>
          <Link className={history.location.pathname.replace("/", "") === "register" ? "register active" : "register"} to="/register">
            Register
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={username} name="username" placeholder="Username" />
          <input type="password" ref={password} name="password" placeholder="Password" />
          <Link to="/forget_password">Forget Password ?</Link>
          <input type="submit" value="Login" />

        </form>
        <p>Not a memeber <Link to="/forget_password">Register Now ?</Link></p>
      </div>
    </>
  );
};

export default Login;
/*
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
    </>*/