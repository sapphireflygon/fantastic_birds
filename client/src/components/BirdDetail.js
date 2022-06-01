// child component of BirdCard.js
import React,{ useRef } from "react";


const BirdDetail = ({selected, closeModal}) => {

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
            <div className='bird-info-fact'>
                <p>Active: {selected.activity}</p>
                <p>Food: {selected.food}</p>
                <p>Can it fly?: {selected.fly ? 'Yes' : 'No'}</p>
                <p>Beak: {selected.beak}</p>
                <p>Feet: {selected.feetinfo}</p>
            </div>


            <div className= "bird-image">
                <ImageToggleOnMouseOver primaryImg= {selected.realimg} secondaryImg={selected.cartoonimgfeet} alt="" />
            </div>
            <div className="close-modal">
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default BirdDetail

