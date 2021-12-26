import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
export default function ActivateAccount() {
    let { token } = useParams();
    const [message, setMessage] = useState(() => ({ message: "Loading", style: "" }))
    useEffect(() => {
        axios({
            url: `http://127.0.0.1:5000/auth/email-verify/?token=${token}`,
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