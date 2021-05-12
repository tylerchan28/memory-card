import React from "react";

const CharacterCard = ({imageSource, cardName }) => {
    return (
        <button>
            <img>{imageSource}</img>
            <p>{cardName}</p>
        </button>
    )
}

export default CharacterCard;