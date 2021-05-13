import React from "react";

const CharacterCard = ( { card, logic }) => {
    return (
        <button onClick={() => logic(card.name)}>
            <img 
                src={card.src}
                width="280"
                height="300"
                alt={card.name}
            />
            <p className="image-text">{card.name}</p>
        </button>
    )
}

export default CharacterCard;