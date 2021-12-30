import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utilities/axios";
import toast from 'react-hot-toast';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(() => false)
  const fetchData = async (data) => {
    const response = await axiosInstance({
      url: `auth/register/`,
      method: "post",
      data
    })
    return response;
  };
  const onSubmit = (data) => {
    if (data.password !== data.repassword) {
      setError(() => true);
      return
    }

    delete data['repassword'];
    toast.promise(fetchData(data), {
      loading: 'Loading',
      success: (data) => data.data.message,
      error: (err) =>
        (err.response.data.email && err.response.data.email.map(message => message)) ||
        (err.response.data.password && err.response.data.password.map(message => message)) ||
        (err.response.data.username && err.response.data.username.map(message => message))
    });
    setError(() => false);


  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <h2>Register</h2> */}
      <input type="text" placeholder="Username" {...register("username", { required: true })} />
      {errors.username && <span>This field is required</span>}
      <input type="email" placeholder="E-mail" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
      {errors.password?.type === 'required' && <span>This field is required</span>}
      {errors.password?.type === 'minLength' && <span>This required minimum Length 6 or greater</span>}
      <input type="password" placeholder="Confirm Password" {...register("repassword", { required: true, minLength: 6 })} />
      {errors.repassword?.type === 'required' && <span>This field is required</span>}
      {errors.repassword?.type === 'minLength' && <span>This required minimum Length 6 or greater</span>}
      {error && <span>Confirm password doesn't match password</span>}

      <input type="submit" value="Register" />

      <p>Already a memeber <Link to="/login" style={{ fontSize: "inherit" }}>Login ?</Link></p>
    </form >
  );
};

export default Register;
/*
                            <input type="text"  name="username" placeholder="Username" />
                            <input type="email"  name="email" placeholder="E-mail" />
                            <input type="password"  name="password" placeholder="Password" />
                            <input type="password"  name="conPassword" placeholder="Confirm Password" />

                            <input type="submit" value="Register" />

                            <p>Already a memeber <Link to="/login" style={{ fontSize: "inherit" }}>Login ?</Link></p>
*/