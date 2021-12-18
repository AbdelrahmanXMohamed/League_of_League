import React, { useRef } from "react";
const ResetPassword = () => {
  const password = useRef(null);
  const handleForgetPassword = (password) => {
    console.log("password : " + password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordData = password.current.value;
    handleForgetPassword(passwordData);
  };
  return (
    <>
      <div className="Forms">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="title">
            <h3 >Reset Password</h3>
          </div>
          <div className="handleInput">
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
            <div className="handleLogo">
              <input
                type="password"
                name="password"
                ref={password}
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="handleSubmit">
            <input
              type="submit"
              className="Submit"
              value="Reset Password"
            />
          </div>

        </form>
      </div>
    </>
  );
};

export default ResetPassword;
