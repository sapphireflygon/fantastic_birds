import React, { useState, useEffect } from "react";
import './PhotoMatchActivity.css'

const duck = require('./InfoImages/duck_card.jpg')
const peacock = require('./InfoImages/peacock_card.jpg')
const owl = require('./InfoImages/owl_card.jpg')
const pelican = require('./InfoImages/pelican_card.jpg')
const penguin = require('./InfoImages/penguin_card.jpg')
const robin = require('./InfoImages/robin_card.jpg')
const blank = require('./InfoImages/egg.png')

const images = [
    duck,
    owl,
    peacock,
    pelican,
    penguin,
    robin,
]

const PhotoMatchActivity = () => {

    const [imagesArray, setImagesArray] = useState(getShuffledImagesArray)
    const [cardsChosen, setCardsChosen] = useState([])
    const [cardsChosenId, setCardsChosenId] = useState([])
    const [points, setPoints] = useState(0)
    const [openCards, setOpenCards] = useState([])

    const blankCard = blank

    // useEffect(() => {
    //     console.log("This is the OG images will we ")

    //     // const imagesGenerated = images?.concat(...images)
    //     // console.log("This is the imagesGenereated ", imagesGenerated)

    //     // const shuffledArray = shuffleArray(imagesGenerated)
    //     // setImagesArray(shuffledArray)
    // }, [])

    function getShuffledImagesArray() {
        const imagesGenerated = images?.concat(...images)
        const shuffledArray = shuffleArray(imagesGenerated)
        return shuffledArray
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
    function shuffleArray(array) {
        for (let img = array.length - 1; img > 0; img--) {
            const j = Math.floor(Math.random() * (img + 1));
            [array[img], array[j]] = [array[j], array[img]];
        }
        return array
    }

    // Resets states to restart activity
    const restart = () => {
        setImagesArray(getShuffledImagesArray())
        setCardsChosenId([])
        setCardsChosen([])
        setPoints(0)
        setOpenCards([])
    }

    return (
        <div id="photo-match">
            <div className="photoMatchMain">
                <h2>Picture Matcher!</h2>
                <h2>Points: {points}</h2>
                <div className="photoMatchFlex">
                    {imagesArray?.map((image, index) => {
                        return (
                            <div className="imageCard" key={index} onClick={() => flipImage(image, index)}>
                                <img className="image" src={isCardChosen(image, index) ? image : blankCard} alt="card image" />
                            </div>
                        )
                    })}
                </div>
                <br></br>
                <button className="button-match" onClick={restart}>Restart</button>
            </div>
        </div>
    )
}

export default PhotoMatchActivity