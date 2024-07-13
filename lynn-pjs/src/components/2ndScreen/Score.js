import React from "react";
import './ColorGame.css'
import { Button } from "react-bootstrap";

const Score = (score) => {
    return (
        <div id="score">
            Score: {score.score}
        </div>
    )
}

export default Score