import React from "react"
import { Container } from "react-bootstrap";
import './ColorGame.css'


const MainGame = () => {    
    const colors = ['red', 'green', 'blue','orange', 'pink', 'violet']
    let cards = shuffle(colors.concat(colors))
    
    function shuffle(array) {
        // Fisher-Yates algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }   
    return (
        <div>
            <Container id="game-container">
                
            </Container>
        </div>
    ) 
}
