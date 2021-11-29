import React, { useRef, useState } from "react";
import "../style/Login.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Logo from "../resource/Logo.png";
import { useHistory } from "react-router-dom";

const ForgetPassword = () => {
  let history = useHistory();
  const email = useRef(null);
  const [faded, setfaded] = useState(false);
  const handleForgetPassword = (email) => {
    console.log("email : " + email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = email.current.value;
    handleForgetPassword(emailData);
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
              <h1>Forget Password</h1>
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
            <div className="handleSubmit">
              <input
                type="submit"
                className="Submit"
                value="Recover Password"
              />
            </div>
            <div className="moreLinks">
              <p id="Register" onClick={redirect}>
                Register
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
