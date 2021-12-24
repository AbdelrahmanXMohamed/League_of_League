import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
export default function ActivateAccount() {
    let { token } = useParams();
    const [message, setMessage] = useState(() => "")
    useEffect(() => {
        axios({
            url: `http://127.0.0.1:5000/auth/email-verify/?token=${token}`,
            method: "get"
        }).then(({ data }) => {
            console.log(data)


            setMessage(() => data.message)
        })

    }
        , [])
    return (
        <div className="ActivateAccount">
            <div className="message">
                <p>{message}</p>
            </div></div>
    )
}
/*email-verify/*/