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
                <h1><b>{selected.name}</b></h1>
            </div>
            <div className="close-modal">
                <button className="close-modal-btn" onClick={closeModal}><b> X </b></button>
            </div>
            <div className='bird-info-fact'>
                <p className="bird-info-line"><b>Active:</b> {selected.activity}</p>
                <p className="bird-info-line"><b>Food:</b> {selected.food}</p>
                <p className="bird-info-line"><b>Can it fly?</b> {selected.fly ? 'Yes' : 'No'}</p>
                <p className="bird-info-line"><b>Beak:</b> {selected.beak}</p>
                <p className="bird-info-line"><b>Feet:</b> {selected.feetinfo}</p>
                <p className='hover-me'>Hover over the feet to see them close up!</p>
            </div>


            <div className= "bird-image-container">
                <ImageToggleOnMouseOver className="modal-image" primaryImg= {selected.realimg} secondaryImg={selected.cartoonimgfeet} alt="" />
            </div>
        </div>
    )
}

export default BirdDetail

