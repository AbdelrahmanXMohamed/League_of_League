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
        <form className="Form ForgetPassword" onSubmit={handleSubmit}>
          <div className="title">
            <h3 >Forget Password</h3>
          </div>
          <div className="handleInput">
            <input
              type="text"
              name="email"
              ref={email}
              placeholder="Email"
            />
          </div>
          <input
            type="submit"
            className="Submit"
            value="Recover Password"
          />

          <p>
            Not a memeber <Link to="/register" style={{ fontSize: "inherit" }}>Register Now ?</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
