import React, { useRef } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const email = useRef(null);
  const handleForgetPassword = (email) => {
    console.log("email : " + email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = email.current.value;
    handleForgetPassword(emailData);
  };

  return (
    <>
      <div className="Forms">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="title">
            <h3 >Forget Password</h3>
          </div>
          <div className="handleInput">
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

          <p>
            Not a memeber <Link to="/register" style={{ fontSize: "inherit" }}>Register Now ?</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
