import React from 'react';
import { Link } from "react-router-dom";
export default function UserCard({ user }) {
    return (
        <>
            <Link to={"/summoner/" + user.puuid}>
                <div className="UserCard">
                    <div className="UserProfileImg">
                        {<img src={`http://ddragon.leagueoflegends.com/cdn/${user.version}/img/profileicon/${user.profileIconId}.png`} alt={`${user.name}`} />}
                        <figcaption className="UserProfileCaption">
                            {user.summonerLevel}
                        </figcaption>
                    </div>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.platform}</p>
                    </div>
                </div></Link>
        </>
    );
}
