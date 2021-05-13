import React, { useState } from "react";
import Cards from "./Cards";
import Header from "./Header.js";

const GameLogic = () => {
    const [score, setScore] = useState(0);
    const [hiscore, setHiscore] = useState(0);
    const [chosenCards, setChosenCards] = useState([]);
    const [message, setMessage] = useState("");
    
    const addScore = () => {
        setScore(score + 1)
        if (score === 11) {
            setMessage("You won the game!");
            setChosenCards([]);
            setHiscore(12);
            setScore(0);
        }
    }
    

    const addHiscore = () => {
        if (score > hiscore) {
            setHiscore(score);
        }
    }

    const pickCard = (card) => {
        setChosenCards((prev) => [...prev, card])
    }
    
    const logic = (card) => {
        if (!chosenCards.includes(card)) {
            setMessage("");
            pickCard(card);
            addScore();
        } else {
            addHiscore()
            setScore(0)
            setChosenCards([]);
            setMessage("You lost! Click on a card to try again!")
        }
    }

    return (
        <div>
            <Header score={score} hiscore={hiscore} message={message}/>
            <Cards score={score} hiscore={hiscore} logic={logic}/>
        </div>
    )
}

export default GameLogic;
