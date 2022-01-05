import React, { useState, useEffect } from 'react';
import { Skeleton } from "@material-ui/lab";

export default function WinLose({ match, version }) {
    const [winLose, setWinLose] = useState(() => "Loading")

    useEffect(() => {
        if (match) {
            setWinLose(() => match.win ? "Win" : "Lose")
        }
    }, [match])
    return (
        <div className={winLose}>
            <div className="Highlight">
                <span className="Char">{winLose !== "Loading" ? winLose[0] : <Skeleton animation="wave" variant="circle" className="Skelaton-Char" />}</span>
            </div>
            <div className="Data">


                {match ?
                    <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${match.championName}.png`}
                        className="Skeleton-Champ-Img"

                        alt={match.championName} />
                    :
                    <Skeleton
                        animation="wave"
                        variant="rect"
                        className="Skeleton-Champ-Img"
                    />}

                <div className="Details">
                    <div className="KDA">

                        {
                            match ? <>
                                <p>{match.kills}</p><span>/</span>
                                <p>{match.deaths}</p><span>/</span>
                                <p>{match.assists}</p>
                            </> :
                                <>
                                    <Skeleton animation="wave" variant="text" className="Skeleton-KDA" /><span>/</span>
                                    <Skeleton animation="wave" variant="text" className="Skeleton-KDA" /><span>/</span>
                                    <Skeleton animation="wave" variant="text" className="Skeleton-KDA" />
                                </>}                    </div>
                    {match ?
                        <div className="Items">

                            {match.item0 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${match.item0}.png`}
                                className="Skeleton-Item-Img"
                                alt={match.item0} /> : <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />}
                            {match.item1 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${match.item1}.png`}
                                className="Skeleton-Item-Img"
                                alt={match.item1} /> : <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />}
                            {match.item2 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${match.item2}.png`}
                                className="Skeleton-Item-Img"
                                alt={match.item2} /> : <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />}
                            {match.item3 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${match.item3}.png`}
                                className="Skeleton-Item-Img"
                                alt={match.item3} /> : <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />}
                            {match.item4 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${match.item4}.png`}
                                className="Skeleton-Item-Img"
                                alt={match.item4} /> : <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />}
                            {match.item5 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${match.item5}.png`}
                                className="Skeleton-Item-Img"
                                alt={match.item5} /> : <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />}
                            {match.item6 ? <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${match.item6}.png`}
                                className="Skeleton-Item-Img"
                                alt={match.item6} /> : <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />}
                        </div>
                        :
                        <div className="Items">
                            <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />
                            <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />
                            <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />
                            <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />
                            <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />
                            <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />
                            <Skeleton animation="wave" variant="rect" className="Skeleton-Item-Img"
                            />
                        </div>}
                    <center>
                        {match ? null :
                            <Skeleton animation="wave" variant="text" className="Skeleton-Champ-Name" />
                        }
                        {
                            match ? match.pentaKills ? <p className="pentaKill">Penta Kill</p> :
                                match.quadraKills ? <p className="quadraKill">Quadra Kill</p> :
                                    match.tripleKills ? <p className="tripleKill">Triple Kill</p> :
                                        match.doubleKills ? <p className="doubleKill"> Double Kill</p> :
                                            match.firstBloodKill ? <p className="firstBlood">First Blood</p>
                                                : null : null
                        }

                    </center>
                </div>
            </div>
        </div>)
}
