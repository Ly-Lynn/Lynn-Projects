import React from "react";
import './ColorGame.css';

const Card = ({ card, onClick }) => {
    return (
        <div
            className={`card-game ${card.isFlipped ? 'flipped' : ''}`}
            style={{ backgroundColor: card.isFlipped || card.isMatched ? card.color : '#ddd' }}
            onClick={onClick}
        >
        </div>
    );
};

export default Card;