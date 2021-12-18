import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "@material-ui/lab";
import WinLose from "../components/WinLose";
// import logo from "../resource/Logo.png"
const SummonerProfile = (props) => {
    let { puuid } = useParams();
    let id = puuid;
    let [champdata, setChampdata] = useState(null);
    let [version, setVersion] = useState("");
    console.log(puuid)

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/certainChamption/${id}`).then(function ({ data }) {
            setChampdata(data.data[`${id}`])
            setVersion(data.version)
        }).catch(err => console.log(err.message))
    }, [id])
    return (
        <>
            <div className="SummonerProfile">
                <div className="ProHead">

                    <div className="Profile">
                        {Boolean(champdata) ? (
                            <img
                                src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`}
                                alt={id}
                            />
                        ) : (
                            <Skeleton
                                animation="wave"
                                variant="circle"
                                className="Skeleton"
                            />
                        )}
                    </div>
                    <center className="Name">
                        {Boolean(champdata) ? (
                            <h3>{champdata.name}</h3>
                        ) : (
                            <>
                                <Skeleton animation="wave" variant="text" />
                            </>
                        )}
                    </center>

                </div>
                <div className="WinLose">
                    <WinLose winLose="Win" />
                    <WinLose winLose="Lose" />
                    <WinLose winLose="Loading" />
                </div>


                <br />
            </div>
        </>
    );
};

export default SummonerProfile;
