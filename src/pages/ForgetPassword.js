import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from '../utilities/axios'
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    const checking = toast.loading('Checking...')
    let response = await axiosInstance('')({
      url: "auth/forget-password/",
      method: "post",
      data
    })
    if (response.status === 200) { toast.dismiss(checking); toast.success(response.data.message) }
    else { toast.dismiss(checking); toast.error(response.data.message) }
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="Forms">
        <form className="Form ForgetPassword" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">
            <h3 >Forget Password</h3>
          </div>
          <div className="handleInput">
            <input
              type="text"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"

            />
            {errors.email?.type === 'required' && <span>This field is required</span>}
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
