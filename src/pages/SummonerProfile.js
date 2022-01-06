import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utilities/axios";
import { Skeleton } from "@material-ui/lab";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import NotFound from '../resource/df3b5390-341f-4f3f-a868-d44fc116c2ad.png'
import WinLose from "../components/WinLose";
const SummonerProfile = (props) => {
    let { puuid } = useParams();
    //   let id = puuid;
    let [matchesdata, setMatchesdata] = useState([null, null, null, null, null]);
    let [version, setVersion] = useState("");
    let [user, setUser] = useState(null);
    let [favorite, setFavorite] = useState(() => false)
    let [error, setError] = useState(() => "")
    useEffect(() => {
        axiosInstance((localStorage.getItem('currentUser') && 'Token ' + JSON.parse(localStorage.getItem('currentUser')).token) || '')
            ({
                url: `api/matchesForUser/${puuid}`,
                method: "get"
            }).then(({ data }) => {
                setVersion(() => data.version)
                setUser(() => data.user_info)
                setMatchesdata(() => data.match)
                setFavorite(() => data.favorite)
            })
            .catch(err => setError(() => err.response.data.message))

    }, [puuid])
    const addFavorite = () => {
        axiosInstance((localStorage.getItem('currentUser') && 'Token ' + JSON.parse(localStorage.getItem('currentUser')).token) || '')
            ({
                url: `api/favorite`,
                method: "put",
                data: { "UUID": puuid }
            }).then(data => setFavorite(() => setFavorite(() => !favorite)))
    }
    return (
        <>
            <div className="SummonerProfile">
                {Boolean(error) ?
                    <div className="ErrorPage">
                        <center >
                            <img src={NotFound} alt="NotFound" />
                            <h2>{error}</h2>
                        </center>
                    </div> :

                    <>
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
                                    <>
                                        <h3>{user.name} </h3>
                                        <div className='Favorite'>
                                            {favorite ? <Favorite onClick={addFavorite} /> : <FavoriteBorder onClick={addFavorite} />}
                                        </div></>) : (
                                    <>
                                        <Skeleton animation="wave" variant="text" />
                                        <div className='FavoriteLoading'>
                                        </div>
                                    </>
                                )}
                            </center>

                        </div>
                        <div className="WinLose">

                            {matchesdata.length > 0 ? matchesdata.map((match, index) => <WinLose key={index} match={match} version={version} />) : <h3>No matches found</h3>}

                        </div>


                        <br /></>
                }
            </div>
        </>
    );
};

export default SummonerProfile;
/*
                    <WinLose winLose="Win" />
                    <WinLose winLose="Lose" />

*/