import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import axiosInstance from '../utilities/axios';

export default function CheckResetPassword() {
    const [secret, setSecret] = useState(() => ({ data: {}, style: "loading" }))
    const linkData = useParams()

    useEffect(() => {
        axiosInstance('')({
            url: `auth/reset-password/${linkData.uidb64}/${linkData.token}`
        }).then(({ data }) => {
            console.log(data)
            setSecret(() => ({ ...secret, style: "success", data }))

        }).catch(error => {
            console.log(error.response.data.message)
            setSecret(() => ({ ...secret, style: "error", data: error.response.data.message }))
        })
    }, [linkData.uidb64, linkData.token, secret])

    return (
        <div className="CheckResetPassword">
            {
                <>
                    {secret.style === 'loading' ?
                        <>
                            <div className={`center ${secret.style}`}>
                                <span>
                                    Checking ....
                                </span>
                                <br />
                            </div>
                        </> :
                        secret.style === 'error' ?

                            <>
                                <div className={`center ${secret.style}`}>
                                    <span>
                                        {secret.data}
                                    </span>
                                    <br />
                                    <Link to="forget_password" >
                                        Go to forget password
                                    </Link>
                                </div>
                            </> : <>
                                <Redirect to={{
                                    pathname: "/reset_password",
                                    state: { data: secret.data }
                                }} />
                            </>
                    }
                </>}

        </div>
    )
}
