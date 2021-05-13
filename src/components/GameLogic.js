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
    }

    const addHiscore = () => {
        if (score > hiscore) {
            setHiscore(score);
        }
    }

    const addLosingMessage = () => {
        setMessage("You lost! Click on a card to try again!")
    }

    const pickCard = (card) => {
        setChosenCards((prev) => [...prev, card])
    }
    
    const logic = (card) => {
        if (!chosenCards.includes(card)) {
            pickCard(card);
            addScore();
            setMessage("");
        } else {
            addHiscore()
            setScore(0)
            setChosenCards([]);
            addLosingMessage();
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
