import React from 'react';
import { Skeleton } from "@material-ui/lab";


export default function WinLose({ winLose }) {
    return (
        <div className={winLose}>
            <div className="Highlight">
                <span className="Char">{winLose !== "Loading" ? winLose[0] : <Skeleton animation="wave" variant="rect" className="Skelaton-Char" />}</span>
            </div>
            <div className="Data">

                <Skeleton
                    animation="wave"
                    variant="rect"
                    className="Skeleton-Champ-Img"
                />

                <div className="Details">
                    <div className="KDA">
                        <Skeleton animation="wave" variant="text" className="Skeleton-KDA" /><span>/</span>
                        <Skeleton animation="wave" variant="text" className="Skeleton-KDA" /><span>/</span>
                        <Skeleton animation="wave" variant="text" className="Skeleton-KDA" />
                    </div>
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
                        /></div>
                    <center>
                        <Skeleton animation="wave" variant="text" className="Skeleton-Champ-Name" />
                    </center>
                </div>
            </div>
        </div>)
}
