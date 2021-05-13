import React from "react";

const Header = ({ score, hiscore, message }) => {
    return (
        <div class="header-container">
            <h1>Memory game</h1>
            <p className="message-text">{message}</p>
            <div className="score-container">
                <p>Current Score: {score} </p>
                <p>Hi-score: {hiscore}</p>
            </div>
        </div>
    )
}

export default Header;