import React, { useState } from "react"
import { Container, Button } from "react-bootstrap";
import { useEffect } from "react";
import './ColorGame.css'
import Card from "./Card";
import Score from "./Score";
const maxTime = 100

const MainGame = () => {    
    const shuffle = (array) => {
        // Fisher-Yates algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }   
    const colors = ['red', 'green', 'blue','orange', 'pink', 'violet']
    const [cards, setCards] = useState(shuffle(colors.concat(colors)).map(color => ({color, isFlipped:false, isMatch:false})))
    const [selectedCards, setSelectedCards] = useState([])
    const [time, setTime] = useState(maxTime)
    const [gameIterval, setGameIterval] = useState(null)
    const [score, setScore] = useState(0)

    useEffect(() => {
        if (time === 0){
            clearInterval(gameIterval)
            alert("Game Over!")
        }
    })
    
    

    const handleCardClick = (index) => {
        // console.log(index)
        const newCards = [...cards]
        if (!newCards[index].isFlipped && !newCards[index].isMatch) {
            newCards[index].isFlipped = true
            setCards(newCards)
            const newSelectedCards = [...selectedCards, index];
            setSelectedCards(newSelectedCards);
            if (newSelectedCards.length === 2) {
                // console.log(newSelectedCards)
                setTimeout(() => {
                    checkMatch(newCards, newSelectedCards)
                }, 250);
                
            }
        }
    }

    const checkMatch = (newCards, newSelectedCards) => {
        
        const [index1, index2] = newSelectedCards
        // console.log(newCards[index1])
        if (newCards[index1].color === newCards[index2].color) {
            newCards[index1].isMatch = true
            newCards[index2].isMatch = true
            setScore(score + 2)
        }
        else {    
            newCards[index1].isFlipped = false
            newCards[index2].isFlipped = false
        }
        setSelectedCards([])
        setCards(newCards)
    }

    const startGame = () => {
        console.log(cards)
        if (gameIterval) clearInterval(gameIterval)
        const interval = setInterval(() => {
            setTime(time => time - 1)
        }, 1000);
        setGameIterval(interval)
    }
    return (
        <div className="row">
            <div id="game-container" className="col-sm">
                {cards.map((card, index) => (
                    <Card key={index} card={card} onClick={() => handleCardClick(index)}/>
                ))}
            </div>
            <div className="col-sm">
                <Button id="startBtn" onClick={startGame} disabled={time !== 0 && time !== maxTime}>Start Game</Button>
                <Score score={score}></Score>
            </div>
        </div>
    ) 
}

export default MainGame 