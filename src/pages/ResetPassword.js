import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const ResetPassword = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const linkData = useParams()
  const [secret, setSecret] = useState(() => ({ data: {}, style: "loading" }))
  const [error, setError] = useState(() => false)
  useEffect(() => {
    axios({
      url: `http://127.0.0.1:5000/auth/reset-password/${linkData.uidb64}/${linkData.token}`
    }).then(({ data }) => {
      console.log(data)
      setSecret(() => ({ ...secret, style: "success", data }))

    }).catch(error => {
      console.log(error.response)
      setSecret(() => ({ ...secret, style: "error", secret: error }))
    })
  }, [])
  const onSubmit = (data) => {
    if (data.password !== data.repassword) {
      setError(() => true);
      return
    }
    setError(() => false)
    const Alldata = {
      password: data.password,
      token: secret.data.token,
      uidb64: secret.data.uidb64
    }
    axios({
      url: `http://127.0.0.1:5000/auth/reset/`
      , method: "patch"
      ,
      data: Alldata
    }).then(({ data }) => {
      console.log(data)
      toast.success(data.message)
    }).catch(error => {
      console.log(error.response)
    })
  };

  return (
    <>
      <Toaster position="top center" />
      {secret.style === 'loading' ?
        <>
          loading
        </> :
        secret.style === 'error' ?
          <>
            error
          </> :
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
          </div>
      }

    </>
  );
};

export default ResetPassword;
