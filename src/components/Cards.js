import React, { useEffect } from "react";
import afroRick from "./images/afro-rick.png";
import coolRick from "./images/cool-rick.png";
import copRick from "./images/cop-rick.png";
import cronenbergRick from "./images/cronenberg-rick.png";
import doofusRick from "./images/doofus-rick.png";
import fishRick from "./images/fish-rick.png";
import managerRick from "./images/manager-rick.png";
import pickleRick from "./images/pickle-rick.png";
import plumberRick from "./images/plumber-rick.png";
import rickSanchez from "./images/rick-sanchez.png";
import simpleRick from "./images/simple-rick.png";
import tinyRick from "./images/tiny-rick.png";

const Cards = () => {
    
    let images = [
        {
            src: afroRick,
            name: "Afro Rick"
        },
        {
            src: coolRick,
            name: "Cool Rick"
        },
        {
            src: copRick,
            name: "Cop Rick"
        },
        {
            src: cronenbergRick,
            name: "Cronenberg Rick"
        },
        {
            src: doofusRick,
            name: "Doofus Rick"
        },
        {
            src: fishRick,
            name: "Fish Rick"
        },
        {
            src: managerRick,
            name: "Manager Rick"
        },
        {
            src: pickleRick,
            name: "Pickle Rick"
        },
        {
            src: plumberRick,
            name: "Plumber Rick"
        },
        {
            src: rickSanchez,
            name: "Rick Sanchez"
        },
        {
            src: simpleRick,
            name: "Simple Rick"
        },
        {
            src: tinyRick,
            name: "Tiny Rick"
        }
    ]
    
    const [cards, setCards] = useState(images);

    const shuffleCards = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * i);
            [newCards[randomIndex], newCards[i]] = [newCards[i], newCards[randomIndex]]
        }
    }

    useEffect(() => {
        const newCards = [...cards]
        shuffleCards(newCards);
        setCards(newCards)
    }, [score])

    return (
        <div>
            {cards.map((card) => (
                <Card card={card} key={card.name} />
            ))}
        </div>
    )
}