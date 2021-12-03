import React, { useRef } from 'react';
import { Link, useHistory } from "react-router-dom";

export default function LoginRegister(props) {
    let history = useHistory();
    history.location.pathname.replace("/", "")
    const username = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    return (
        <>
            <form className="Form" >
                <div className={history.location.pathname.replace("/", "") === "register" ? "Sign active" : "Sign"} >
                    <div className="login">
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                    <div className="register">
                        <Link to="/register">
                            Register
                        </Link>
                    </div>
                </div>
                {history.location.pathname.replace("/", "") === "register" ? <>
                    <input type="text" ref={username} name="username" placeholder="Username" />
                    <input type="email" ref={email} name="email" placeholder="E-mail" />
                    <input type="password" ref={password} name="password" placeholder="Password" />
                    <input type="password" ref={password} name="conPassword" placeholder="Confirm Password" />

                    <input type="submit" value="Register" />

                    <p>Already a memeber <Link to="/login" style={{ fontSize: "inherit" }}>Login ?</Link></p>
                </> : <>
                    <input type="text" ref={username} name="username" placeholder="Username" />
                    <input type="password" ref={password} name="password" placeholder="Password" />
                    <div className="remember_me">
                        <input type="checkbox" id="Remember_me" />
                        <label> Remember me</label>
                    </div>
                    <Link className="right" to="/forget_password">Forget Password ?</Link>
                    <input type="submit" value="Login" />

                    <p>Not a memeber <Link to="/register" style={{ fontSize: "inherit" }}>Register Now ?</Link></p>
                </>
                }

            </form>

        </>
    );
}
