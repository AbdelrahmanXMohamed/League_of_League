import React from 'react';


export default function Login() {
    return (
        <>
            <input type="text" ref={username} name="username" placeholder="Username" />
            <input type="password" ref={password} name="password" placeholder="Password" />
            <div className="last">
                <div className="remember_me">
                    <input type="checkbox" id="Remember_me" />
                    <label> Remember me</label>
                </div>
                <Link className="right" to="/forget_password">Forget Password ?</Link>
            </div>
            <input type="submit" value="Login" />

            <p>Not a memeber <Link to="/register" style={{ fontSize: "inherit" }}>Register Now ?</Link></p>
        </>
    );
}
