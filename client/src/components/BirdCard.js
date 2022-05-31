// child component of InfoContainer.js
import React, { useState } from 'react'
import Modal from 'react-modal'

import BirdDetail from './BirdDetail';

const BirdCard = ({bird}) => {

    
    const [selected, setSelected] = useState([])
    const [toggleModal, setToggleModal] = useState(false);

    // const selector = () => {
    //     return selected
    // }
    

    // const selectClick = () => {
    //     onFilmClick(film)
    // }

    const showModal = () => {
    
        console.log(bird, "this is BIRD") // DELETE
        setSelected(bird)
        setToggleModal(true)
    };

    const closeModal = () => {
        setSelected('')
        setToggleModal(false)
    }


    return (
        <div className='bird-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <img 
                        src={bird.cartoonimg}
                        alt={bird.name}
                        className="bird-card-img"
                    />
                </div>
                <div onClick={showModal} className='flip-card-back'>
                    <h4>{bird.name}</h4>

                </div>
                <Modal
                    isOpen={toggleModal}
                    ariaHideApp={false}
                    contentLabel="Bird Details"
                >
                <BirdDetail selected={selected} closeModal={closeModal} />
                </Modal>
            </div>
        </div>
    )
}

export default BirdCard;

