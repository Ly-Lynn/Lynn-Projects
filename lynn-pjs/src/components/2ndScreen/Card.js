import React from "react";
import './ColorGame.css'

const Card = ({card, onclick}) => {
    return (
        <div className={`card ${card.isFlipped ? 'flipped':''}`}  
        onclick={onclick}>

        </div>
    )
}