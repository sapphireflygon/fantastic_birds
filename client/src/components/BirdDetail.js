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
            <div className="close-modal">
                <button className="close-modal-btn" onClick={closeModal}><b>X</b></button>
            </div>
            <div className='bird-info-fact'>
                <p><b>Active:</b> {selected.activity}</p>
                <p><b>Food:</b> {selected.food}</p>
                <p><b>Can it fly?:</b> {selected.fly ? 'Yes' : 'No'}</p>
                <p><b>Beak:</b> {selected.beak}</p>
                <p><b>Feet:</b> {selected.feetinfo}</p>
            </div>


            <div className= "bird-image">
                <ImageToggleOnMouseOver primaryImg= {selected.realimg} secondaryImg={selected.cartoonimgfeet} alt="" />
            </div>
        </div>
    )
}

export default BirdDetail

