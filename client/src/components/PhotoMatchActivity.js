import React, { useState, useEffect } from "react";
import { images } from "../PhotoMatchImg.js";
import '../PhotoMatchActivity.css'

const PhotoMatchActivity = () =>{
    const [imagesArray, setImagesArray] = useState([])    
    const [cardsChosen, setCardsChosen] = useState([])    
    const [cardsChosenId, setCardsChosenId] = useState([])    
    const [points, setPoints] = useState(0)
    const [openCards, setOpenCards] = useState([])

    const blankCard = 'https://i.etsystatic.com/13208078/r/il/eba185/2601812749/il_300x300.2601812749_mjuw.jpg'

    useEffect(() => {
        createImageBoard()
    }, [])

    const createImageBoard = () => {
        const imagesGenerated = images?.concat(...images)
        const shuffledArray = shuffleArray(imagesGenerated)
        setImagesArray(shuffledArray)
    }

    const flipImage = (image, index) => {

        if (cardsChosenId?.length === 1 && cardsChosenId[0] === index) {
            return
        }

        // Set cardsChosen
        if (cardsChosen?.length < 2) {
            setCardsChosen(cardsChosen => cardsChosen?.concat(image))
            setCardsChosenId(cardsChosenId => cardsChosenId?.concat(index))

            // Check if chosen images are the same and add points
            if (cardsChosen?.length === 1) {
                if (cardsChosen[0] === image) {
                    setPoints(points => points + 1)
                    setOpenCards(openCards => openCards?.concat([cardsChosen[0], image]))
                }
                setTimeout(() => {
                    setCardsChosenId([])
                    setCardsChosen([])
                }, 1000)
                
            } 
        }
    }

    const isCardChosen = (image, index) => {
        return cardsChosenId?.includes(index) || openCards?.includes(image)
    }

    // Fisher-Yates algorithm for randomising the array 
    const shuffleArray = (array) => {
        for (let img = array.length - 1; img > 0; img--) {
            const j = Math.floor(Math.random() * (img + 1));
            [array[img], array[j]] = [array[j], array[img]];
        }
        return array
    }

    // Resets states to restart activity
    const restart = () => {
        setCardsChosenId([])
        setCardsChosen([])
        setPoints(0)
        setOpenCards([])
    }

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
            </style>
            <h1>Picture Matcher!</h1>
            <h2>Match pictures together to win points!</h2>
            <h2>Points: {points}</h2>
            <button className="button" onClick={restart}>Restart</button>
            <div className="photoMatchFlex">
                {imagesArray?.map((image, index) => {
                    return (
                        <div className="imageCard" key={index} onClick={() => flipImage(image, index)}>
                            <img className="image" src={isCardChosen(image, index) ? image : blankCard} alt="card image"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PhotoMatchActivity