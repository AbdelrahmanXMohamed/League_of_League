import React, { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import axiosInstance from "../utilities/axios";
import UserCard from '../components/UserCard';
import Loading from "../components/Loading";
import Tilt from 'react-tilt'
import NotFound from '../resource/df3b5390-341f-4f3f-a868-d44fc116c2ad.png'

export default function PopUp({ Chamption, handlePopUp }) {
    const [users, setUsers] = useState([])
    const [version, setVersion] = useState("")
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        axiosInstance((localStorage.getItem('currentUser') && 'Token ' + JSON.parse(localStorage.getItem('currentUser')).token) || '')({
            url: `api/dataOfCertainUser/${Chamption}`,
            method: "get"
        })
            .then(({ data }) => {
                if (data.message) {
                    setNotFound(true)
                }
                else {
                    setUsers(data.users)
                    setVersion(data.version)
                }
            })
            .catch(err => console.log(err))
    }, [Chamption])
    return (
        <>
            <div className="PopUp">
                <div className="Header">
                    <h1>Result of : {Chamption}</h1>
                    <CloseIcon onClick={handlePopUp} />
                </div>
                {
                    users.length === 0 ?

                        <>{notFound ?
                            <div className="ErrorPage">
                                <center>
                                    <img src={NotFound} alt="NotFound" />
                                    <h2>{Chamption} is not found</h2>
                                </center>
                            </div> : <Loading />}</>

                        :
                        <div className="Card">
                            {users.map(user =>
                                <Tilt option={{ scale: 1, cursor: "pointer" }} className="Tilt">
                                    <UserCard key={user.user.id} version={version} user={user.user} platform={user.platform} />
                                </Tilt>)}
                        </div>
                }
            </div>
        </>
    );
}
