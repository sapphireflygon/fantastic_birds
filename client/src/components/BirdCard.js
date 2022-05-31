// child component of InfoContainer.js
import React, { useState } from 'react'
import Modal from 'react-modal'
import BirdDetail from './BirdDetail';

const BirdCard = ({bird}) => {

    const [selected, setSelected] = useState('')
    const [toggleModal, setToggleModal] = useState(false);

    const showModal = () => {
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
                <div className='flip-card-back'>
                    <h4 onClick={showModal}>{bird.name}</h4>

                </div>
                <Modal
                    isOpen={toggleModal}
                    ariaHideApp={false}
                    contentLabel="Bird Details"
                >
                <BirdDetail selected={selected} closeModal={closeModal}/>
                </Modal>
            </div>
        </div>
    )
}

export default BirdCard;

