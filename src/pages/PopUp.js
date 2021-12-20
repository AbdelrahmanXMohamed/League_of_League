import React, { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";
import UserCard from '../components/UserCard';
import Loading from "../components/Loading";
import Tilt from 'react-tilt'

export default function PopUp({ Chamption, handlePopUp }) {
    const [users, setUsers] = useState([])
    const [version, setVersion] = useState("")
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        axios({
            url: `http://127.0.0.1:5000/api/dataOfCertainUser/${Chamption.current.value}`,
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

        return () => console.log("unmounted")
    }, [Chamption])
    useEffect(() => {
        if (users.length > 0) {
            console.log(users[0].user.puuid)
            axios({
                url: `http://127.0.0.1:5000/api/matchesForUser/${users[0].user.puuid}`,
                method: "get"
            })
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(err => console.log(err))
        }
        else { console.log("Loading") }
    }, [users])
    console.log(users)
    return (
        <>
            <div className="PopUp">
                <div className="Header">
                    <h1>PopUp</h1>
                    <CloseIcon onClick={handlePopUp} />
                </div>
                {
                    users.length === 0 ?

                        <>{notFound ? <center> <h3> No Users Found</h3></center> : <Loading />}</>

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
