import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = props => (
    <div className="scoreBoard">
        <h3>Current Score: {props.currentScore}</h3>
        <h3>Top Score: {props.topScore}</h3>
        <h2>{props.message}</h2>
    </div>
);

export default ScoreBoard;