import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../utilities/axios";
import toast, { Toaster } from "react-hot-toast";
import { Redirect } from "react-router-dom";
const ResetPassword = ({ location }) => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [error, setError] = useState(() => false)

  const onSubmit = (data) => {
    if (data.password !== data.repassword) {
      setError(() => true);
      return
    }
    setError(() => false)
    const Alldata = {
      password: data.password,
      token: location.state.data.token,
      uidb64: location.state.data.uidb64
    }
    axiosInstance('')({
      url: `auth/reset/`
      , method: "patch"
      ,
      data: Alldata
    }).then(({ data }) => {
      toast.success(data.message)
    }).catch(error => {
      toast.error(error.response.data.detail)
    })
  };
  if (location.state?.data)
    return (
      <>      <Toaster position="top-center" />

        <div className="Forms">
          <form className="Form ForgetPassword" onSubmit={handleSubmit(onSubmit)}>
            <div className="title">
              <h3 >Reset Password</h3>
            </div>
            <div className="handleInput">
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
              />

            </div>
            {errors.password?.type === 'required' && <span>This field is required</span>}
            {errors.password?.type === 'minLength' && <span>This required minimum Length 6 or greater</span>}
            <div className="handleInput">
              <input
                type="password"
                {...register("repassword", { required: true, minLength: 6 })}
                placeholder="Confirm Password"
              />
            </div>
            {errors.repassword?.type === 'required' && <span>This field is required</span>}
            {errors.repassword?.type === 'minLength' && <span>This required minimum Length 6 or greater</span>}
            {error && <span>Confirm password doesn't match password</span>}
            <div className="handleInput">
              <input
                type="submit"
                className="Submit"
                value="Reset Password"
              />
            </div>

          </form>
        </div >
      </>

    );

  return <Redirect to="/Not_Found" />

};

export default ResetPassword;
