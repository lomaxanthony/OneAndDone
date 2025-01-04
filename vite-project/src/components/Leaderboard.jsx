import React from "react";
import "../styles/Leaderboard.css";

export default function Leaderboard(props) {
    return (
       <li className='playerInfo'>
            <span className="player-name">{props.name}</span>
            <span className="player-money">$ {props.money.toLocaleString()}</span>
       </li>
    )
}
