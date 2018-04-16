import React from "react";
import "./TeamCard.css";

const TeamCard = props => (
    <div className="card">
        <div className="image-container">
            <a onClick={() => props.selectTeam(props.team)}>
                <img alt={props.team} src={props.gifs} />
            </a>
        </div>
    </div> 
);

export default TeamCard;