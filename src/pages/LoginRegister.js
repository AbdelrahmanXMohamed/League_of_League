import React, { useEffect, useState } from 'react';
import { Link, useHistory, Redirect } from "react-router-dom";
import Register from '../components/Register';
import Login from "../components/Login"
import { Toaster } from 'react-hot-toast';
import { useAuthState } from '../context/AuthContext/AuthContext';

export default function LoginRegister(props) {
    let history = useHistory();
    const { token } = useAuthState()
    history.location.pathname.replace("/", "")
    const [currentForm, setCurrentForm] = useState(() => history.location.pathname.replace("/", ""))
    useEffect(() => {
        setCurrentForm(() => history.location.pathname.replace("/", ""));
    }, [history.location.pathname])
    if (Boolean(token))
        return <Redirect to="/" />
    return (
        <>
            ?

            <Toaster position="top-center" />

            <div className="Forms">
                <div className="Form">
                    <div className={currentForm === "register" ? "Sign-register" : "Sign-login"} >
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
                    {history.location.pathname.replace("/", "") === "register" ?
                        <Register />
                        : <Login />
                    }

                </div>
            </div>
        </>
    );
}
