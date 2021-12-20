import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "@material-ui/lab";
import WinLose from "../components/WinLose";
const SummonerProfile = (props) => {
    let { puuid } = useParams();
    //   let id = puuid;
    let [matchesdata, setMatchesdata] = useState([null, null, null, null, null]);
    let [version, setVersion] = useState("");
    let [user, setUser] = useState(null);

    useEffect(() => {
        axios({
            url: `http://127.0.0.1:5000/api/matchesForUser/${puuid}`,
            method: "get"
        })
            .then(({ data }) => {
                setVersion(() => data.version)
                setUser(() => data.user_info)
                setMatchesdata(() => data.match)

            })
            .catch(err => console.log(err))

    }, [puuid])
    return (
        <>
            <div className="SummonerProfile">
                <div className="ProHead">

                    <div className="Profile">
                        {Boolean(user) ? (

                            < img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${user.profileIconId}.png`} alt={`${user.name}`} />
                        ) : (
                            <Skeleton
                                animation="wave"
                                variant="circle"
                                className="Skeleton"
                            />
                        )}
                    </div>
                    <center className="Name">
                        {Boolean(user) ? (
                            <h3>{user.name}</h3>
                        ) : (
                            <>
                                <Skeleton animation="wave" variant="text" />
                            </>
                        )}
                    </center>

                </div>
                <div className="WinLose">

                    {matchesdata.map((match, index) => <WinLose key={index} match={match} version={version} />)}

                </div>


                <br />
            </div>
        </>
    );
};

export default SummonerProfile;
/*
                    <WinLose winLose="Win" />
                    <WinLose winLose="Lose" />

*/