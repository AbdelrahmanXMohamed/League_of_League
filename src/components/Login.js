import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const fetchData = async (data) => {
        const response = await axios({
            url: `http://127.0.0.1:5000/auth/login/`,
            method: "post",
            data
        }).then(({ data }) => {
            console.log(data)
        }
        )
        return response;
    };
    const onSubmit = (data) => {
        toast.promise(fetchData(data)
            , {
                loading: 'Loading',
                success: (data) => "Welcome," + data.data.username,
                error: (err) =>
                    (err.response.data.message)

            });

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="email" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
                {errors.password?.type === 'required' && <span>This field is required</span>}
                {errors.password?.type === 'minLength' && <span>This required minimum Length 6 or greater</span>}
                <div className="last">
                    <div className="remember_me">
                        <input type="checkbox" id="Remember_me" {...register("remember_me",)} />
                        <label> Remember me</label>
                    </div>
                    <Link className="right" to="/forget_password">Forget Password ?</Link>
                </div>
                <input type="submit" value="Login" />

                <p>Not a memeber <Link to="/register" style={{ fontSize: "inherit" }}>Register Now ?</Link></p>
            </form>
        </>
    );
}
/*
 <input type="text" ref={username} name="username" placeholder="Username" />
                                <input type="password" ref={password} name="password" placeholder="Password" />
                                <div className="remember_me">
                                    <input type="checkbox" id="Remember_me" />
                                    <label> Remember me</label>
                                </div>
                                <Link className="right" to="/forget_password">Forget Password ?</Link>
                                <input type="submit" value="Login" />

                                <p>Not a memeber <Link to="/register" style={{ fontSize: "inherit" }}>Register Now ?</Link></p>
*/