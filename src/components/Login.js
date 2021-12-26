import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { loginUser, useAuthState, useAuthDispatch } from '../context/AuthContext/AuthIndex'
import { useHistory } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useAuthDispatch()
    let history = useHistory();
    const { loading, errorMessage } = useAuthState()
    const onSubmit = async (data) => {
        const toastLoading = toast.loading("Sending data ...")

        let payload = { email: data.email, password: data.password, remember_me: data.remember_me }

        try {
            let response = await loginUser(dispatch, payload);
            toast.dismiss(toastLoading);
            if (response.email)
                history.push('/');
            else
                toast.error(response || errorMessage);

        } catch (error) {
            console.log(error)
            toast.dismiss(toastLoading);
            toast.error(error || errorMessage);
        }
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
                <input type="submit" value="Login" disabled={loading} />

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