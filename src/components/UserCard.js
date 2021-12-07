import React from 'react';

export default function UserCard({ version, user, platform }) {
    console.log(platform)
    return (
        <>
            <div className="UserCard">
                <div className="UserProfileImg">
                    {<img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${user.profileIconId}.png`} alt={`${user.name}`} />}
                    <figcaption className="UserProfileCaption">
                        {user.summonerLevel}
                    </figcaption>
                </div>
                <div>
                    <p>{user.name}</p>
                    <p>{platform}</p>
                </div>
            </div>
        </>
    );
}
