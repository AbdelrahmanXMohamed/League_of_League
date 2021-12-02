import React, { useRef, useState } from "react";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Logo from "../resource/Logo.png";
import { useHistory, Link } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const username = useRef("")
  const email = useRef("");
  const password = useRef("");
  // const [faded, setfaded] = useState(false);
  const handleRegister = (email, password) => {
    console.log("email : " + email);
    console.log("password : " + password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = email.current.value;
    const passwordData = password.current.value;
    handleRegister(emailData, passwordData);
  };
  // const redirect = () => {
  //   setfaded(true);
  //   setTimeout(() => history.push("/Login"), 500);
  // };
  return (

    <form className="Form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="Sign">
        <Link className={history.location.pathname.replace("/", "") === "login" ? "login active" : "login"} to="/login">
          Login
        </Link>
        <Link className={history.location.pathname.replace("/", "") === "register" ? "register active" : "register"} to="/register">
          Register
        </Link>
      </div>
      <input type="text" ref={username} name="username" placeholder="Username" />
      <input type="email" ref={email} name="email" placeholder="E-mail" />
      <input type="password" ref={password} name="password" placeholder="Password" />


      <input type="submit" value="Register" />

      <p>Already a memeber <Link to="/login" style={{ fontSize: "inherit" }}>Login ?</Link></p>
    </form>
  );
};

export default Register;
