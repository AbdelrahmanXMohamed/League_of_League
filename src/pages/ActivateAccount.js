import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axiosInstance from '../utilities/axios';
export default function ActivateAccount() {
    let { token } = useParams();
    const [message, setMessage] = useState(() => ({ message: "Loading", style: "" }))
    useEffect(() => {
        axiosInstance('')({
            url: `auth/email-verify/?token=${token}`,
            method: "get"
        }).then(({ data }) => {
            setMessage(() => ({ message: data.message, style: "success" }))
        }).catch(err => setMessage(() => ({ message: err.response.data.message, style: "failed" }))
        )
    }
        , [token])
    return (
        <div className="ActivateAccount">
            <div className={`message ${message.style}`} >
                <p>{message.message}</p>
            </div></div>
    )
}
/*email-verify/*/