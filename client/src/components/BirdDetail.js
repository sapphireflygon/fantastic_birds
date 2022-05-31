// child component of BirdCard.js
import React,{ useRef } from "react";


const BirdDetail = ({selected, closeModal}) => {

    // useEffect ( () => {
    //     // Update the document title using the browser API
    //     console.log(selected, 'this is selected BIRD DETAIL')
    //   });

    const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
        const imageRef = useRef(null);

            return (
            <img 
                onMouseOver={() => {
                imageRef.current.src =secondaryImg ;
                }}
                onMouseOut={() => {
                imageRef.current.src= primaryImg;
                }}
                src={primaryImg} 
                className="bird-image"
                alt=""
                ref={imageRef}
            />
        )}

    return(
        <div className="modal">
            <div className="modal-title">
                <h1>{selected.name}</h1>
            </div>
                <div className="bird-info-label">
                        <p>Active: </p>
                        <p>Food:</p>
                        <p>Can it fly?</p>
                        <p>Beak: </p>
                        <p>Feet: </p>
                </div>

                <div className='bird-info-fact'>
                    <p>{selected.activity}</p>
                    <p> {selected.food}</p>
                    <p> {selected.fly ? 'Yes' : 'No'}</p>
                    <p>{selected.beak}</p>
                    <p>{selected.feetinfo}</p>
                </div>

                <div>
                    <ImageToggleOnMouseOver primaryImg= {selected.realimg} secondaryImg={selected.cartoonimgfeet} alt="" />
                </div>

                <div className="close-modal">
                    <button onClick={closeModal}>Close</button>
                </div>
        </div>
    )
}

export default BirdDetail