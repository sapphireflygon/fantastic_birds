// child component of InfoContainer.js
import React, { useState } from 'react'
import Modal from 'react-modal'

import BirdDetail from './BirdDetail';

const BirdCard = ({bird}) => {

    console.log(bird, "this is BIRD") // DELETE
    const [selected, setSelected] = useState([])
    const [toggleModal, setToggleModal] = useState(false);

    // const selector = () => {
    //     return selected
    // }
    console.log(selected, 'this is SELECTED')

    const showModal = (bird) => {
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

